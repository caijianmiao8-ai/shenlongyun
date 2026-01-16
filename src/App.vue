<script setup lang="ts">
import { useRouter } from 'vue-router';
import useUserStore from '@/store/model/useUserStore';
import { getQueryObject } from '@/utils/common';

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
  <div class="app-root">
    <router-view></router-view>
  </div>
</template>

<style>
/* 全局样式重置和基础设置 */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.5;
  color: #fff;
  background: #0F0F23;
}

/* 应用根容器 */
.app-root {
  min-height: 100vh;
  background: linear-gradient(180deg, #0F0F23 0%, #1A1A2E 100%);
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #6366F1 0%, #A855F7 100%);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #818CF8 0%, #C084FC 100%);
}

/* 选中文字样式 */
::selection {
  background: rgba(99, 102, 241, 0.3);
  color: #fff;
}

/* 链接基础样式 */
a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #A5B4FC;
}

/* 按钮重置 */
button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
}

/* 图片响应式 */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* 输入框基础样式 */
input,
textarea,
select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: transparent;
  border: none;
  outline: none;
}

/* 列表重置 */
ul,
ol {
  list-style: none;
}

/* 全局动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* 加载动画 */
.loading-shimmer {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.03) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

/* 淡入动画类 */
.fade-in {
  animation: fadeIn 0.5s ease forwards;
}

.slide-in {
  animation: slideIn 0.5s ease forwards;
}

/* 过渡效果 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* 禁用状态 */
.disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}

/* 隐藏滚动条但保留滚动功能 */
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* 毛玻璃效果 */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* 渐变文字 */
.gradient-text {
  background: linear-gradient(135deg, #667EEA 0%, #764BA2 50%, #A855F7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 发光效果 */
.glow {
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
}

.glow-hover:hover {
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
}
</style>
