<template>
  <div class="aside-container w-72px flex items-center flex-col pt-24px bg-white border-r border-grayE4">
    <div class="aside-item flex flex-col items-center py-12px px-8px rounded-8px cursor-pointer hover:bg-primary-50 transition-colors">
      <img src="@/assets/image/pay/icon-phone.png" alt="" class="w-28px h-28px" />
      <p class="text-12px text-gray mt-8px">云手机</p>
    </div>
    <div class="aside-item aside-item-active flex flex-col items-center py-12px px-8px rounded-8px cursor-pointer mt-8px">
      <img src="@/assets/image/pay/icon-pay.png" alt="" class="w-28px h-28px" />
      <p class="text-12px text-primary font-medium mt-8px">购买</p>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.aside-container {
  min-height: calc(100vh - 60px);
}
.aside-item-active {
  background: linear-gradient(180deg, #FEF2F2 0%, #FDE8E8 100%);
  border: 1px solid #FACACB;
}
</style>
