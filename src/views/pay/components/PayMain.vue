<template>
  <div class="pay-container">
    <!-- 背景装饰 -->
    <div class="bg-decoration">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
    </div>

    <div class="pay-content">
      <!-- 左侧套餐类型选择 -->
      <div class="type-sidebar">
        <div class="sidebar-title">套餐类型</div>
        <div
          class="type-tab"
          :class="{ active: state.typeTab === 1 }"
          @click="typeTabChange(1)"
        >
          <div class="tab-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-20px h-20px">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span>标准套餐</span>
        </div>
        <div
          class="type-tab"
          :class="{ active: state.typeTab === 2 }"
          @click="typeTabChange(2)"
        >
          <div class="tab-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-20px h-20px">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </div>
          <span>定制套餐</span>
        </div>
      </div>

      <!-- 右侧主内容区 -->
      <div class="main-content">
        <!-- VIP等级选项卡 -->
        <div v-if="state.pkgList.length" class="vip-tabs">
          <div
            v-for="(tab, index) in state.pkgList"
            :key="index"
            class="vip-tab"
            :class="{ active: tabActive === index }"
            @click="tabChange(index, tab)"
          >
            <div class="tab-content">
              <img v-if="tab.product_name_type === 2" :src="tab.product_name_url" alt="" class="tab-image" />
              <span v-if="tab.product_name_type === 1" class="tab-text">{{ tab.product_name_txt }}</span>
            </div>
            <img v-if="tab.corner_url" :src="tab.corner_url" alt="" class="corner-badge" />
          </div>
        </div>

        <!-- 产品信息 -->
        <div class="product-info" v-if="state.pkgList.length">
          <div class="product-header">
            <img :src="state.pkgList[tabActive].image_url" alt="" class="product-image" />
            <div class="product-details">
              <h3 class="product-title">{{ state.pkgList[tabActive].product_name_txt || '云手机套餐' }}</h3>
              <p class="product-desc">{{ state.pkgList[tabActive].product_desc }}</p>
            </div>
          </div>
        </div>

        <!-- 商品列表 -->
        <div class="goods-section">
          <h4 class="section-title">
            <span class="title-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-18px h-18px">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </span>
            选择时长
          </h4>
          <div class="goods-grid">
            <template v-for="(good, index) in state.goodsList" :key="index">
              <GoodsItem
                :good="good"
                :active="goodActive === index"
                @click="goodsChange(index, good)"
              />
            </template>
          </div>
        </div>

        <!-- 支付组件 -->
        <div class="payment-section">
          <Payment ref="paymentRef" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onBeforeMount } from 'vue';
import { commonMethodPOST } from '@/api/commonApi';
import { IPkgItem, IGoodsItem } from '@/api/model/pkgModel';
import Payment from '@/components/Payment/index.vue';
import usePayStore from '@/store/model/usePayStore';
import GoodsItem from '@/components/GoodsItem/index.vue';

const store = usePayStore();

const tabActive = ref(0);

const tabChange = (index: number, item: IPkgItem) => {
  tabActive.value = index;
  getGoodsList(item.id);
};

const typeTabChange = (type: number) => {
  getPkgList(type);
};

const state = reactive<{ pkgList: IPkgItem[]; tabWidth: number; goodsList: IGoodsItem[]; typeTab: number }>({
  pkgList: [],
  tabWidth: 0,
  typeTab: 1,
  goodsList: [],
});

const goodsUnit = new Map([
  [1, '小时'],
  [2, '天'],
  [3, '月'],
  [4, '季'],
  [5, '半年'],
  [6, '一年'],
]);

const getGoodsUnit = (unit: number) => {
  return goodsUnit.get(unit);
};

const goodActive = ref(0);
const paymentRef = ref<any>(null);

const goodsChange = (index: number, item: IGoodsItem) => {
  goodActive.value = index;
  store.$patch({
    goods_id: item.goods_id,
    goods_name: item.goods_name,
    price: item.price,
    goods_title: `${item.goods_time}${getGoodsUnit(item.goods_unit)}`,
    num: 1,
    limit_num: item.limit_num,
    goods_limit: item.goods_limit,
  });
  paymentRef.value.num = 1;
};

const getPkgList = async (type: number) => {
  let param = {
    product_type: type,
  };
  state.typeTab = type;
  let res = await commonMethodPOST('/dlyp/v1/product_list', param);
  let list = res.data;
  state.tabWidth = 120 * list.length + 20;
  state.pkgList = list.map((pkg: IPkgItem) => {
    return { ...pkg };
  });
  tabActive.value = 0;
  if (state.pkgList.length > 0) {
    getGoodsList(state.pkgList[0].id);
  }
};

const getGoodsList = async (id: number) => {
  let param = {
    product_id: id,
  };
  let res = await commonMethodPOST('/dlyp/v1/goods_list', param);
  state.goodsList = res.data;
  if (state.goodsList.length > 0) {
    goodsChange(0, state.goodsList[0]);
  }
};

onBeforeMount(() => {
  getPkgList(1);
});
</script>

<style lang="scss" scoped>
.pay-container {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #0F0F23 0%, #1A1A2E 100%);
  position: relative;
  overflow: hidden;
  padding: 20px;
}

// 背景装饰
.bg-decoration {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
  top: -100px;
  right: -100px;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%);
  bottom: -50px;
  left: 20%;
}

.pay-content {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

// 左侧边栏
.type-sidebar {
  width: 180px;
  flex-shrink: 0;
}

.sidebar-title {
  font-size: 12px;
  color: rgba(165, 180, 252, 0.6);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
  padding-left: 16px;
}

.type-tab {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid transparent;

  &:hover {
    background: rgba(99, 102, 241, 0.1);
    color: rgba(255, 255, 255, 0.9);
  }

  &.active {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%);
    border-color: rgba(99, 102, 241, 0.3);
    color: #fff;

    .tab-icon {
      background: linear-gradient(135deg, #6366F1 0%, #A855F7 100%);
    }
  }

  .tab-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(99, 102, 241, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  span {
    font-size: 14px;
    font-weight: 500;
  }
}

// 主内容区
.main-content {
  flex: 1;
  min-width: 0;
}

// VIP 选项卡
.vip-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.vip-tab {
  position: relative;
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;

  &:hover {
    background: rgba(99, 102, 241, 0.1);
    border-color: rgba(99, 102, 241, 0.3);
  }

  &.active {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%);
    border-color: rgba(99, 102, 241, 0.4);
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
  }

  .tab-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tab-image {
    height: 20px;
    object-fit: contain;
  }

  .tab-text {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
  }

  .corner-badge {
    position: absolute;
    top: -6px;
    right: -6px;
    height: 20px;
  }
}

// 产品信息
.product-info {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 20px;
}

.product-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 16px;
  background: rgba(99, 102, 241, 0.1);
  padding: 10px;
}

.product-details {
  flex: 1;
}

.product-title {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}

.product-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
}

// 商品区域
.goods-section {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 20px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;

  .title-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #A5B4FC;
  }
}

.goods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
}

// 支付区域
.payment-section {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 20px;
  padding: 24px;
}

// 响应式
@media (max-width: 768px) {
  .pay-content {
    flex-direction: column;
  }

  .type-sidebar {
    width: 100%;
    display: flex;
    gap: 12px;
  }

  .sidebar-title {
    display: none;
  }

  .type-tab {
    flex: 1;
    justify-content: center;
    margin-bottom: 0;
  }

  .goods-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
