<template>
  <div class="w-screen h-screen p-20px pay">
    <div class="w-full h-42px text-21px text-gray3 bg-[#DFF2FF] flex-center rounded-tl-13px rounded-tr-13px font-bold">
      {{ payData.pkgTitle }}
    </div>
    <div class="bg-white w-full p-16px">
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
    <Payment ref="paymentRef" :show-pay-num="false" from-page="renew" />
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onBeforeMount } from 'vue';
import { commonMethodPOST } from '@/api/commonApi';
import { IPkgItem, IGoodsItem } from '@/api/model/pkgModel';
import Payment from '@/components/Payment/index.vue';
import usePayStore from '@/store/model/usePayStore';
import GoodsItem from '@/components/GoodsItem/index.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const payData = route.query;

const store = usePayStore();

const state = reactive<{ pkgList: IPkgItem[]; tabWidth: number; goodsList: IGoodsItem[] }>({
  pkgList: [],
  tabWidth: 0,
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

// 商品列表
const getGoodsList = async () => {
  let param = {
    product_id: payData.pkgId,
  };
  let res = await commonMethodPOST('/dlyp/v1/goods_list', param);
  state.goodsList = res.data;
  goodsChange(0, state.goodsList[0]);
};

onBeforeMount(() => {
  getGoodsList();
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
</style>
