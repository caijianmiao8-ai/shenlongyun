<template>
  <div
    class="goods-item w-196px h-140px border border-grayE4 rounded-12px pt-18px pb-12px flex-between flex-col items-center relative mr-16px flex-shrink-0 cursor-pointer transition-all hover:border-primary hover:shadow-md"
  >
    <p class="text-18px text-black333">
      <span class="font-bold mr-4px">{{ good.goods_name }}</span>
      {{ good.goods_time }}{{ getGoodsUnit(good.goods_unit) }}
    </p>
    <p class="text-12px text-black666">{{ good.goods_desc }}</p>
    <p class="text-28px text-primary font-semibold">{{ good.unit }}{{ good.price }}</p>
    <p class="text-12px text-black666">
      {{ good.unit }}
      {{ good.price_desc }}
      <span class="text-black999 line-through ml-10px">{{ good.unit }} {{ good.original_price }}</span>
    </p>
    <img v-if="good.corner_url" :src="good.corner_url" alt="" class="absolute -top-0.5 -left-0.2 h-20px" />
  </div>
</template>
<script lang="ts" setup>
import { PropType, ref, watch } from 'vue';
import { IGoodsItem } from '@/api/model/pkgModel';
const props = defineProps({
  good: {
    type: Object as PropType<IGoodsItem>,
    default: () => {
      return {
        goods_name: '',
        corner_url: '',
        goods_unit: '',
        unit: '',
        original_price: 0,
        price: 0,
        goods_time: '',
      };
    },
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
<style lang="scss" scoped></style>
