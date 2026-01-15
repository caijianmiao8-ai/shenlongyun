<template>
  <div>
    <p class="mb-16px mt-17px text-14px text-black666">支付方式</p>
    <ul class="flex">
      <li
        v-for="(item, index) in paymethods"
        :key="index"
        class="flex-center w-196px px-6px h-68px text-18px text-black333 border rounded-12px mr-16px bg-white cursor-pointer transition-all"
        :class="active === index ? 'border-primary border-2 bg-primary-50' : 'border-grayE4 hover:border-primary-300'"
        @click="payChange(index, item)"
      >
        <img :src="VITE_PREFIXURL + item.icon" alt="" />
        <p class="ml-14px font-semibold">{{ item.name }}支付</p>
      </li>
    </ul>
    <div class="flex-between items-center h-40px mt-30px">
      <div v-if="props.showPayNum" class="flex items-center h-32px">
        <p class="text-14px text-black666 mr-14px">购买数量：</p>
        <div class="w-24px h-32px flex-center bg-grayF1">
          <img
            :src="VITE_PREFIXURL + `${num > 1 ? '/pay/icon-minus-active.png' : '/pay/icon-minus.png'}`"
            alt=""
            class="w-16px h-16px"
            @click="handleNum('minus')"
          />
        </div>
        <div class="pl-16px h-32px pr-16px bg-white text-14px font-semibold flex-center border border-grayE4">{{ num }}</div>
        <div class="w-24px h-32px flex-center bg-grayF1">
          <img :src="VITE_PREFIXURL + '/pay/icon-plus.png'" alt="" class="w-16px h-16px" @click="handleNum('plus')" />
        </div>
      </div>
      <div v-else></div>
      <div class="flex-center">
        <p class="text-14px text-black666 mt-6px">订单价格</p>
        <p class="text-primary text-24px font-bold ml-16px mr-16px">
          ￥<span class="text-32px">{{ totalPrice }}</span>
        </p>
        <p
          class="w-125px h-40px text-14px text-white rounded-6px pay-btn flex-center cursor-pointer"
          :class="checked ? '' : 'opacity-50'"
          @click="confirmPay"
        >
          确认支付
        </p>
      </div>
    </div>
    <div class="flex justify-end py-12px">
      <img :src="`${checkedIcon[Number(checked)]}`" alt="" class="w-16px h-16px mr-8px" @click="checked = !checked" />
      <p class="text-14px text-black333 cursor-pointer" @click="toPolicy">请先阅读<span class="text-primary hover:text-primary-dark transition-colors">《神龙云手机充值服务协议》</span></p>
    </div>
  </div>
  <PayDialog ref="payDialogRef" :from-page="props.fromPage" :dialog-data="dialogData" @pay="confirmPay" />
</template>
<script lang="ts" setup>
import { ref, computed, onBeforeMount } from 'vue';
import PayDialog from '@/components/PayDialog/index.vue';
import { IPayType, IPayParam } from '@/api/model/payModel';
import { commonMethodPOST } from '@/api/commonApi';
import usePayStore from '@/store/model/usePayStore';
import Toast from '@/components/Toast';
import { useRoute } from 'vue-router';
import { getAppEnvConfig } from '@/utils/env';

const { VITE_PREFIXURL } = getAppEnvConfig();
const route = useRoute();
const store = usePayStore();
const props = defineProps({
  showPayNum: {
    type: Boolean,
    default: true,
  },
  fromPage: {
    type: String,
    default: 'recharge',
  },
});
const paymethods: IPayType[] = [
  {
    type: 1,
    name: '支付宝',
    icon: '/pay/icon-zfb.png',
  },
  {
    type: 2,
    name: '微信',
    icon: '/pay/icon-wx.png',
  },
];
const active = ref(0);
const checkedIcon = [`${VITE_PREFIXURL}/pay/checked-base.png`, `${VITE_PREFIXURL}/pay/checked-active.png`];
const checked = ref(false);

const num = ref(store.num);
const handleNum = (type: 'plus' | 'minus') => {
  if (type === 'plus') {
    if (store.limit_num && store.goods_limit === 1 && num.value >= store.limit_num) {
      Toast({ title: `已达到此商品的限购数量${store.limit_num}` });
      return;
    }
    num.value += 1;
  } else {
    if (num.value > 1) num.value -= 1;
  }
  store.$patch({
    num: num.value,
  });
};

const totalPrice = computed(() => (num.value * store.price).toFixed(2));

const payDialogRef = ref<any>(null);
let dialogData = ref({
  orderSn: '',
  payCode: '',
});

const payChange = (index: number, item: IPayType) => {
  active.value = index;
  store.$patch({
    pay_type: item.type,
  });
};

const confirmPay = async () => {
  if (!checked.value) return;
  const params: IPayParam = {
    goods_id: store.goods_id,
    num: store.num,
    pay_type: store.pay_type,
    return_url: '',
    device: 'pc',
    trade_type: 'native',
  };
  let api = '';
  if (props.fromPage === 'renew') {
    // 续费
    params.server_list = route.query.serid as string;
    api = '/dlyp/v1/order/renewal';
  } else {
    api = '/dlyp/v1/order/add';
  }
  let res: any = await commonMethodPOST(api, params);
  if (res.code === 200) {
    payDialogRef.value.show = true;
    dialogData.value = res.data;
  }
};

const toPolicy = () => {
  window.location.href = 'https://note.youdao.com/s/b62EczL4';
};

onBeforeMount(() => {
  payChange(0, paymethods[0]);
});
defineExpose({
  num,
});
</script>
<style lang="scss" scoped>
.pay-btn {
  background: linear-gradient(135deg, #C94A4A 0%, #E87070 100%);
  box-shadow: 0 4px 12px rgba(201, 74, 74, 0.3);
  transition: all 0.3s ease;
  &:hover {
    background: linear-gradient(135deg, #A53A3A 0%, #C94A4A 100%);
    box-shadow: 0 6px 16px rgba(201, 74, 74, 0.4);
  }
}
</style>
