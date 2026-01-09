<template>
  <div class="toast-wrap">
    <div class="toast">
      {{ title }}
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Toast',
  props: {
    title: {
      type: String,
      default: '我是toast',
    },
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.toast-wrap {
  z-index: 1000;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toast {
  color: #ffffff;
  font-size: 60px;
  text-align: center;
  border-radius: 25px;
  padding: 50px;
  background: rgba(0, 0, 0, 0.7);
}
</style>
