<template>
  <header class="app-header">
    <div class="header-container">
      <!-- Logo -->
      <div class="logo-section">
        <div class="logo-icon">
          <svg viewBox="0 0 40 40" class="w-36px h-36px">
            <defs>
              <linearGradient id="headerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#6366F1"/>
                <stop offset="100%" style="stop-color:#A855F7"/>
              </linearGradient>
            </defs>
            <circle cx="20" cy="20" r="18" fill="url(#headerLogoGradient)" opacity="0.2"/>
            <path d="M20 8 L28 14 L28 26 L20 32 L12 26 L12 14 Z" fill="url(#headerLogoGradient)"/>
          </svg>
        </div>
        <div class="logo-text">
          <span class="brand-name">神龙云</span>
          <span class="brand-slogan">ShenlongCloud</span>
        </div>
      </div>

      <!-- 用户信息 -->
      <div class="user-section">
        <div class="user-info">
          <div class="user-avatar">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-20px h-20px">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <span class="user-phone">{{ userPhone }}</span>
        </div>

        <!-- 窗口控制按钮 -->
        <div class="window-controls">
          <button class="control-btn minimize" title="最小化">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-16px h-16px">
              <path d="M19 13H5v-2h14v2z"/>
            </svg>
          </button>
          <button class="control-btn maximize" title="最大化">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-16px h-16px">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
            </svg>
          </button>
          <button class="control-btn close" title="关闭">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-16px h-16px">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useUserStore } from '@/store/model/useUserStore';

const userStore = useUserStore();

const userPhone = computed(() => {
  const phone = userStore.phone || '13800138000';
  // 隐藏中间4位
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
});
</script>

<style lang="scss" scoped>
.app-header {
  width: 100%;
  height: 64px;
  background: linear-gradient(180deg, #0F0F23 0%, #1A1A2E 100%);
  border-bottom: 1px solid rgba(99, 102, 241, 0.15);
  position: relative;
  z-index: 100;

  // 添加微妙的光效
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(99, 102, 241, 0.3) 20%,
      rgba(168, 85, 247, 0.3) 50%,
      rgba(99, 102, 241, 0.3) 80%,
      transparent 100%
    );
  }
}

.header-container {
  max-width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.5px;
  line-height: 1.2;
}

.brand-slogan {
  font-size: 10px;
  color: rgba(165, 180, 252, 0.6);
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 24px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.15);
    border-color: rgba(99, 102, 241, 0.3);
  }
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: linear-gradient(135deg, #6366F1 0%, #A855F7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.user-phone {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.5px;
}

.window-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.control-btn {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: none;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  &.minimize:hover {
    background: rgba(245, 158, 11, 0.2);
    color: #F59E0B;
  }

  &.maximize:hover {
    background: rgba(16, 185, 129, 0.2);
    color: #10B981;
  }

  &.close:hover {
    background: rgba(239, 68, 68, 0.2);
    color: #EF4444;
  }
}
</style>
