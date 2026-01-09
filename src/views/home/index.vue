<template>
  <component :is="!isWeb ? Web : Phone" />
</template>
<script lang="ts" setup>
import Web from './Web.vue';
import Phone from './Phone.vue';
const isWeb = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
</script>
<style lang="scss" scoped></style>
