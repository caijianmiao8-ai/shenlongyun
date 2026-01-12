<template>
  <div class="goods-card" :class="{ active: active }">
    <!-- 角标 -->
    <div v-if="good.corner_url" class="corner-badge">
      <img :src="good.corner_url" alt="" />
    </div>

    <!-- 商品名称 -->
    <div class="goods-name">
      <span class="name-text">{{ good.goods_name }}</span>
      <span class="time-text">{{ good.goods_time }}{{ getGoodsUnit(good.goods_unit) }}</span>
    </div>

    <!-- 商品描述 -->
    <p class="goods-desc">{{ good.goods_desc }}</p>

    <!-- 价格 -->
    <div class="price-section">
      <span class="currency">{{ good.unit }}</span>
      <span class="price">{{ good.price }}</span>
    </div>

    <!-- 单价信息 -->
    <div class="price-info">
      <span class="unit-price">{{ good.unit }}{{ good.price_desc }}</span>
      <span class="original-price">{{ good.unit }} {{ good.original_price }}</span>
    </div>

    <!-- 选中指示器 -->
    <div class="check-indicator" v-if="active">
      <svg viewBox="0 0 24 24" fill="currentColor" class="w-16px h-16px">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref, watch } from 'vue';
import { IGoodsItem } from '@/api/model/pkgModel';

const props = defineProps({
  good: {
    type: Object as PropType<IGoodsItem>,
    default: () => ({
      goods_name: '',
      corner_url: '',
      goods_unit: '',
      unit: '',
      original_price: 0,
      price: 0,
      goods_time: '',
    }),
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const good = ref(props.good);

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

watch(
  () => props.good,
  (newVal) => {
    if (newVal) good.value = newVal;
  },
);
</script>

<style lang="scss" scoped>
.goods-card {
  position: relative;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    background: rgba(99, 102, 241, 0.08);
    border-color: rgba(99, 102, 241, 0.3);
    transform: translateY(-2px);
  }

  &.active {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.1) 100%);
    border-color: rgba(99, 102, 241, 0.5);
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);

    .price {
      color: #A5B4FC;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #6366F1, #A855F7);
    }
  }
}

.corner-badge {
  position: absolute;
  top: -2px;
  left: -2px;

  img {
    height: 24px;
    object-fit: contain;
  }
}

.goods-name {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 8px;
}

.name-text {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}

.time-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

.goods-desc {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 16px;
  min-height: 18px;
}

.price-section {
  display: flex;
  align-items: baseline;
  margin-bottom: 8px;
}

.currency {
  font-size: 14px;
  color: #F59E0B;
  margin-right: 2px;
}

.price {
  font-size: 32px;
  font-weight: 700;
  color: #F59E0B;
  line-height: 1;
  transition: color 0.3s;
}

.price-info {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
}

.unit-price {
  color: rgba(255, 255, 255, 0.6);
}

.original-price {
  color: rgba(255, 255, 255, 0.4);
  text-decoration: line-through;
}

.check-indicator {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366F1 0%, #A855F7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
</style>
