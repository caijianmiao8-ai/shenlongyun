<template>
  <div class="w-screen h-screen p-20px pay content-box">
    <div class="box-left">
      <div class="box-tag" :class="{ 'box-left-active': state.typeTab === 1 }" @click="typeTabChange(1)">标准</div>
      <div class="box-tag" :class="{ 'box-left-active': state.typeTab === 2 }" @click="typeTabChange(2)">定制</div>
    </div>
    <div class="box-right">
      <ul
        v-if="state.pkgList.length"
        class="flex h-40px items-center bg-grayE4 rounded-tl-18px rounded-tr-18px"
        :style="{ width: state.tabWidth + 'px' }"
      >
        <li
          v-for="(tab, index) in state.pkgList"
          :key="index"
          class="h-40px flex-center cursor-pointer relative"
          :class="getTabClasses(index, tabActive, state.pkgList.length)"
          @click="tabChange(index, tab)"
        >
          <img v-if="tab.product_name_type === 2" :src="tab.product_name_url" alt="" class="h-16px" :class="`w-${tab.width}px`" />
          <p v-if="tab.product_name_type === 1" class="font-bold">{{ tab.product_name_txt }}</p>
          <img
            :src="tab.corner_url"
            alt=""
            class="h-16px absolute top-0"
            :class="[tabActive === index && index < state.pkgList.length - 1 ? 'right-22px' : 'right-2px']"
          />
        </li>
      </ul>
      <div class="bg-white w-full p-16px">
        <div v-if="state.pkgList.length">
          <p>{{ state.pkgList[tabActive].product_desc }}</p>
          <ul class="flex mt-8px mb-16px">
            <li class="flex flex-col items-center mr-25px">
              <img :src="state.pkgList[tabActive].image_url" alt="" class="h-120px" />
              <!-- <p class="text-14px text-black999 mt-8px">{{ activePkg.title }}</p> -->
            </li>
          </ul>
        </div>
        <div class="overflow-x-auto w-full flex pb-10px flex-wrap">
          <template v-for="(good, index) in state.goodsList" :key="index">
            <GoodsItem
              :good="good"
              :class="[goodActive === index ? 'activity-item-active-bg' : good.corner_url ? 'activity-item-base-bg' : '']"
              class="mb-16px"
              @click="goodsChange(index, good)"
            ></GoodsItem>
          </template>
        </div>
      </div>
      <div style="padding: 10px"><Payment ref="paymentRef" /></div>
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

const positionTab = [
  {
    width: 46,
    base: '/pay/svip.png',
    active: '/pay/svip-active.png',
  },
  {
    width: 49,
    base: '/pay/vvip.png',
    active: '/pay/vvip-active.png',
  },
  {
    width: 48,
    base: '/pay/bvip.png',
    active: '/pay/bvip-active.png',
  },
  {
    width: 34,
    base: '/pay/vip.png',
    active: '/pay/vip-active.png',
  },
];
const tabActive = ref(0);
// const activeBgClass = ['tab-bg-active-left', 'tab-bg-active-center', 'tab-bg-active-center', 'tab-bg-active-right'];
const tabChange = (index: number, item: IPkgItem) => {
  tabActive.value = index;
  getGoodsList(item.id);
};

const typeTabChange = (type: number) => {
  getPkgList(type);
};

const getTabClasses = (index: number, tabActive: number, listLength: number) => {
  const classes = [];

  if (tabActive === index) {
    if (index === 0) {
      classes.push('tab-bg-active-left');
    } else if (index === listLength - 1) {
      classes.push('tab-bg-active-right');
    } else {
      classes.push('tab-bg-active-center');
    }
  }

  if (index < listLength - 1 && !(tabActive > 0 && index === tabActive - 1)) {
    classes.push('tab-bg');
  }

  if (tabActive === index) {
    classes.push('w-180px');
  } else {
    classes.push('w-160px');
  }

  return classes;
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
  // 套餐列表
  let res = await commonMethodPOST('/dlyp/v1/product_list', param);
  let list = res.data;
  state.tabWidth = 120 * list.length + 20;
  state.pkgList = list.map((pkg: IPkgItem, index: number) => {
    if (index === state.pkgList.length - 1) {
      return {
        ...pkg,
        ...positionTab[positionTab.length - 1],
      };
    } else {
      return {
        ...pkg,
        ...positionTab[index],
      };
    }
  });
  tabActive.value = 0;
  getGoodsList(state.pkgList[0].id);
};

// 商品列表
const getGoodsList = async (id: number) => {
  let param = {
    product_id: id,
  };
  let res = await commonMethodPOST('/dlyp/v1/goods_list', param);
  state.goodsList = res.data;
  goodsChange(0, state.goodsList[0]);
};

onBeforeMount(() => {
  getPkgList(1);
});
</script>
<style lang="scss" scoped>
.pay {
  .tab-bg {
    background: url('https://reso.dalongyun.com/yun/dalongyun_page/webRtc/dlyphoneWeb/pay/base-bg.png') no-repeat;
    background-size: contain;
  }
  .tab-bg-active-left {
    background: url('https://reso.dalongyun.com/yun/dalongyun_page/webRtc/dlyphoneWeb/pay/left-active.png') no-repeat;
    background-size: contain;
  }
  .tab-bg-active-right {
    background: url('https://reso.dalongyun.com/yun/dalongyun_page/webRtc/dlyphoneWeb/pay/right-active.png') no-repeat;
    background-size: contain;
  }
  .tab-bg-active-center {
    background: url('https://reso.dalongyun.com/yun/dalongyun_page/webRtc/dlyphoneWeb/pay/center-active.png') no-repeat;
    background-size: contain;
  }
  .activity-item-active-bg {
    background: linear-gradient(180deg, #fff0d3 0%, #fdfde9 100%);
    border: 1px solid #ffa12e;
  }
  .activity-item-base-bg {
    background: linear-gradient(180deg, #fff4f4 0%, #ffffff 100%);
  }
}
.content-box {
  display: flex;
  width: 100%;
}
.box-left {
  width: 10%;
}
.box-left-active {
  background-color: #e4e4e4;
  font-weight: 600;
}
.box-tag {
  width: 90%;
  display: grid; /* 使用 grid 布局 */
  place-items: center; /* 垂直和水平居中 */
  height: 40px; /* 设置高度 */
  border-radius: 8px; /* 设置圆角，可以根据需要调整值 */
}
.box-right {
  background-color: #ffffff;
  padding-left: 10px;
  width: 80%;
  display: table-cell;
}
</style>
