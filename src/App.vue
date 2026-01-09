<script setup lang="ts">
import { useRouter } from 'vue-router';
import useUserStore from '@/store/model/useUserStore';
import { getQueryObject } from '@/utils/common';
// const route = useRoute();
const router = useRouter();
router.isReady().then(() => {
  const { phone, token, appkey, channel_code } = getQueryObject();
  const userParams = {
    phone,
    token,
    appkey,
    channel_code,
  };
  const store = useUserStore();
  store.setUserParams(userParams);
});
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
