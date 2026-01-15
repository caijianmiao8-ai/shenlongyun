<template>
  <div class="header-container flex-between items-center h-60px w-100% pl-20px pr-20px">
    <div class="flex-center">
      <img src="@/assets/image/pay/logo.png" class="w-32px h-32px mr-12px" />
      <span class="text-18px font-bold text-white">神龙云</span>
    </div>
    <div class="flex-center">
      <div class="flex-center mr-20px">
        <img src="@/assets/image/pay/user-img.png" class="w-32px h-32px rounded-full border-2 border-white border-opacity-50" />
        <span class="text-14px ml-12px text-white text-opacity-90">13987964862</span>
      </div>
      <div class="flex-center">
        <div class="window-btn flex-center w-32px h-32px rounded-6px hover:bg-white hover:bg-opacity-20 cursor-pointer transition-colors">
          <img src="@/assets/image/pay/min.png" class="w-20px h-20px opacity-90" />
        </div>
        <div class="window-btn flex-center w-32px h-32px rounded-6px hover:bg-white hover:bg-opacity-20 cursor-pointer transition-colors mx-4px">
          <img src="@/assets/image/pay/max.png" class="w-20px h-20px opacity-90" />
        </div>
        <div class="window-btn flex-center w-32px h-32px rounded-6px hover:bg-red-600 cursor-pointer transition-colors">
          <img src="@/assets/image/pay/close.png" class="w-20px h-20px opacity-90" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.header-container {
  background: linear-gradient(135deg, #C94A4A 0%, #E87070 100%);
  box-shadow: 0 2px 8px rgba(201, 74, 74, 0.3);
}
</style>
