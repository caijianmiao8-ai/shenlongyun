<template>
  <Teleport to="body">
    <div v-if="show" class="w-screen h-screen fixed bg-[rgba(51,51,51,0.2)] top-0 right-0 flex-center">
      <div v-if="[2, 4].includes(orderStatus)" class="w-304px h-290px bg-white pt-44px pb-38px flex-center relative rounded-2px shadow-sm">
        <img :src="`${VITE_PREFIXURL}/pay/close.png`" alt="" class="absolute top-0 right-0 w-40px h-40px cursor-pointer" @click="close" />
        <div class="text-black333 flex-center flex-col pl-44px pr-44px">
          <img :src="`${VITE_PREFIXURL}/pay/icon-success.png`" alt="" class="w-60px h-60px" />
          <p class="text-18px font-bold mt-12px mb-12px">支付成功</p>
          <p class="text-14px leading-20px text-center">本次订单已支付成功，可返回首页进行查看</p>
          <p class="w-120px h-40px rounded-6px bg-blue text-14px text-white flex-center mt-24px" @click="toYphoneHome">回到首页</p>
        </div>
      </div>
      <div v-if="[0].includes(orderStatus)" class="w-304px h-290px bg-white pt-44px pb-38px flex-center relative rounded-2px shadow-sm">
        <img :src="`${VITE_PREFIXURL}/pay/close.png`" alt="" class="absolute top-0 right-0 w-40px h-40px cursor-pointer" @click="close" />
        <div class="text-black333 flex-center flex-col pl-44px pr-44px">
          <img :src="`${VITE_PREFIXURL}/pay/icon-error.png`" alt="" class="w-60px h-60px" />
          <p class="text-18px font-bold mt-12px mb-12px">支付失败</p>
          <p class="text-14px leading-20px text-center">请重新下单，再次尝试</p>
          <p class="w-120px h-40px rounded-6px bg-blue text-14px text-white flex-center mt-24px cursor-pointer" @click="payAgain">重新支付</p>
        </div>
      </div>
      <div
        v-if="![0, 2, 4].includes(orderStatus)"
        class="bg-white pl-16px lr-16px flex-center relative rounded-2px shadow-sm"
        :class="fromPage === 'renew' ? 'pt-16px' : 'w-500px h-328px'"
      >
        <img :src="`${VITE_PREFIXURL}/pay/close.png`" alt="" class="absolute top-0 right-0 w-40px h-40px cursor-pointer" @click="close" />
        <div class="text-black333 pl-44px pr-44px" :class="fromPage === 'renew' ? '' : 'flex-between'">
          <div class="flex-center flex-col mr-16px">
            <p class="text-16px">打开手机{{ payStore.pay_type === 1 ? '支付宝' : '微信' }}</p>
            <p class="text-14px text-black999 mt-12px mb-6px">扫一扫继续付款</p>
            <div class="p-10px w-220px h-220px">
              <qrcode-vue :value="props.dialogData.payCode" :size="200"></qrcode-vue>
            </div>
          </div>
          <div class="text-14px p-24px">
            <p class="text-18px mb-18px">
              <span class="font-bold">{{ payStore.goods_name }}</span>
            </p>
            <p class="mb-12px">充值账号：{{ userStore.phone }}</p>
            <p class="mb-12px">购买云机数量：{{ payStore.num }}台</p>
            <p class="mb-6px">订单编号：</p>
            <p>{{ props.dialogData.orderSn }}</p>
            <div class="mt-33px text-right">
              <p class="text-black666 mb-16px">订单总价</p>
              <p class="text-redF35 tet-24px font-bold">
                ￥<span class="text-32px">{{ (payStore.num * payStore.price).toFixed(2) }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
import { PropType, ref, watch } from 'vue';
import { IOrder } from '@/api/model/payModel';
import usePayStore from '@/store/model/usePayStore';
import useUserStore from '@/store/model/useUserStore';
import { getAppEnvConfig } from '@/utils/env';
import QrcodeVue from 'qrcode.vue';
import { commonMethodPOST } from '@/api/commonApi';
import { sendMsgToQt } from '@/utils/qtBridge';

const { VITE_PREFIXURL } = getAppEnvConfig();
const payStore = usePayStore();
const userStore = useUserStore();

const emits = defineEmits(['pay']);
const props = defineProps({
  dialogData: {
    type: Object as PropType<IOrder>,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    default: () => {
      return {
        orserSn: '',
        payCode: '',
      };
    },
  },
  fromPage: {
    type: String,
    default: 'recharge',
  },
});

const show = ref(false);
const close = () => {
  show.value = false;
  clearInterval(orderTimer.value);
};

// 获取订单状态
const orderStatus = ref(1);
const orderTimer = ref();
const getOrderStatus = async () => {
  let params = {
    order_sn: props.dialogData.orderSn,
  };
  let res = await commonMethodPOST('/dlyp/v1/order/fetch', params);
  // 1未付款;2已支付;3已退款;4已完成;0 已取消
  orderStatus.value = res.data.order_status;
  if ([0, 2, 4].includes(res.data.order_status)) {
    clearInterval(orderTimer.value);
  }
};

const toYphoneHome = () => {
  close();
  sendMsgToQt('goHome');
  console.log('回去首页');
};

const payAgain = () => {
  orderStatus.value = 1;
  close();
  emits('pay');
};

const startTimer = () => {
  orderTimer.value = setInterval(() => {
    getOrderStatus();
  }, 2000);
};

watch(
  () => show.value,
  (newVal) => {
    if (newVal) {
      orderStatus.value = 1;
      startTimer();
    } else {
      clearInterval(orderTimer.value);
    }
  },
);

defineExpose({
  show,
});
</script>
<style lang="scss" scoped></style>
