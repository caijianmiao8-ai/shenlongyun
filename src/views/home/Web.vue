<template>
  <div class="app-container site-shell">
    <swiper :no-swiping="true" direction="vertical" :modules="modules" :mousewheel="{ mousewheel: true }" @swiper="onSwiper">
      <swiper-slide>
        <div class="item">
          <div class="bg-slide bg-slide-1"></div>
          <div class="h-screen mx-auto flex flex-col justify-between page-shell">
            <header class="top-bar">
              <img src="@/assets/image/home/logo.png" class="brand-logo" />
              <div class="brand-tag">高性能云端手机</div>
            </header>
            <section class="hero-grid">
              <div class="hero-copy">
                <p class="hero-eyebrow">SHENLONG CLOUD</p>
                <h1 class="hero-title">把另一台手机，放进云端</h1>
                <p class="hero-subtitle">极简上手 · 稳定多开 · 全平台覆盖</p>
                <div class="hero-actions">
                  <button class="primary-button" @click="download(3)">App Store</button>
                  <button class="secondary-button" @click="download(2)">安卓下载</button>
                  <button class="ghost-button" @click="download(1)">电脑版</button>
                </div>
                <div class="download-row">
                  <button class="download-chip" @click="download(5)">安卓测试版</button>
                  <button class="download-chip" @click="download(4)">华为专用</button>
                </div>
              </div>
              <div class="hero-visual">
                <div class="device-glow"></div>
                <img src="@/assets/image/home/slide-1-2.png" alt="" class="hero-device" />
              </div>
            </section>
            <div class="mt-24px flex flex-col items-center pb-28px scroll-hint">
              <p class="text-12px tracking-2px">向下滑动查看更多</p>
              <img src="@/assets/image/home/icon-down.png" alt="" class="w-32px mt-18px bouncy" />
            </div>
            <div v-if="anocementEntry" class="absolute top-202px right-0px">
              <img src="@/assets/image/home/anocement.png" alt="" class="w-110px h-140px cursor-pointer" @click="showAnocement" />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="bg-slide bg-slide-2"></div>
          <div class="max-w-1280px mx-auto h-screen flex section-grid">
            <div class="feature-stack">
              <p class="section-title">稳定托管 · 即刻体验</p>
              <p class="section-subtitle">轻松上手的云端设备管理</p>
              <div class="feature-list">
                <div class="feature-card">
                  <p class="feature-title">秒级启动</p>
                  <p class="feature-desc">一键开启云端手机，保持稳定在线。</p>
                </div>
                <div class="feature-card">
                  <p class="feature-title">多开托管</p>
                  <p class="feature-desc">多设备同步运行，效率与稳定兼顾。</p>
                </div>
                <div class="feature-card">
                  <p class="feature-title">跨端协作</p>
                  <p class="feature-desc">桌面与移动端协同操作，随时切换。</p>
                </div>
              </div>
            </div>
            <div class="feature-visual">
              <img src="@/assets/image/home/slide-2-2.png" alt="" class="feature-image" />
              <div class="floating-image">
                <img src="@/assets/image/home/slide-2-3.png" alt="" class="feature-image-small" />
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="bg-slide bg-slide-3"></div>
          <div class="max-w-1280px mx-auto h-screen flex flex-col justify-between section-footer">
            <div class="flex flex-col items-center mt-90px">
              <p class="section-title">专业团队 · 品质服务</p>
              <p class="section-subtitle">值得信赖的云端手机品牌</p>
            </div>
            <div class="service-grid">
              <div class="service-card">
                <img src="@/assets/image/home/slide-3-1.png" alt="" class="mb-24px" />
                <p class="service-title">官方社群</p>
                <p class="service-desc">第一时间获取产品资讯与更新。</p>
              </div>
              <div class="service-card">
                <img src="@/assets/image/home/slide-3-2.png" alt="" class="mb-24px" />
                <p class="service-title">合作伙伴</p>
                <p class="service-desc">开放合作通道，携手共赢。</p>
              </div>
              <div class="service-card">
                <img src="@/assets/image/home/slide-3-3.png" alt="" class="mb-24px" />
                <p class="service-title">在线客服</p>
                <p class="service-desc">工作日 9:00 - 21:00 在线支持。</p>
                <button class="primary-button" @click="toQQ">立即咨询</button>
              </div>
            </div>
            <div class="w-screen flex flex-col justify-center text-13px pb-30px">
              <p class="text-center mb-8px">
                <span class="mr-6px">沪公网安备31011502007990号</span>
                <span class="mr-6px">经营许可证 沪B2-20180327</span>
                <span class="mr-6px">工商电子营业执照</span>
                <a class="text-orange-500" href="https://beian.miit.gov.cn/">蜀ICP备20022843号-3A</a>
              </p>
              <!-- <p class="text-center">Copyright © 2020 - 2023 成都龙霆互娱信息科技有限公司 All Rights Reserved</p> -->
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <div v-show="show" class="w-screen h-screen bg-[rgba(0,0,0,0.2)] fixed top-0 left-0 z99">
    <div class="w-1/2 h-2/3 rounded-10px absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white overflow-auto">
      <p class="title">浙江1区机房维护公告 <span @click="show = false">X</span></p>
      <div class="info">
        <p>尊敬的云手机用户：</p>
        <p>您好！</p>
        <p>为了提供更加稳定和高效的服务，接机房通知，将对杭州机房的交换机进行必要的维护工作。此次维护将涉及以下安排：</p>
        <p>维护时间： 2024年9月12日（星期三）0点至3点。</p>
        <p>维护内容： 交换机维护。</p>
        <p>影响范围： 由于维护工作需要，在此期间，您可能会遇到网络中断，导致游戏离线等问题。</p>
        <p>我们深知此次维护可能会给您带来不便，因此，我们强烈建议您在上述时间段内避免进行任何关键操作，以减少对您业务的影响。</p>
        <p>
          维护完成后：
          所有设备将会重启，届时网络服务将恢复正常。我们预计维护工作将在预定时间内完成，但不排除可能会有延迟。我们将尽最大努力缩短维护时间，并确保服务尽快恢复。
        </p>
        <p>我们对此次维护可能给您带来的不便深表歉意，并感谢您的理解与支持。如有任何疑问或需要进一步的帮助，请随时联系我们的客户服务团队。</p>
        <p>感谢您对我们工作的支持与配合！</p>
        <p>祝您使用愉快！</p>
        <p>云手机团队</p>
        <p>发布日期：2024年9月9日</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
// 导入swiper组件
import { Swiper, SwiperSlide } from 'swiper/vue';
// 引入swiper样式（按需导入）
import 'swiper/css';
import 'swiper/css/pagination'; // 轮播图底面的小圆点
// 引入swiper核心和所需模块
import { Mousewheel } from 'swiper/modules';

const modules = [Mousewheel];
// swiper实例
const homeSwiper = ref(null);

// 初始化
const onSwiper = (swiper: any) => {
  homeSwiper.value = swiper;
};
// swiper切换时触发
// const onSlideChange = (swiper) => {};
const download = (type: number) => {
  let url = '';
  if (type === 1) {
    url = 'https://www.ldmnq.com';
  } else if (type === 2) {
    url = 'https://res.ldmnq.com/xdyun/cph/store/XdCloudPhone-dalong-release-v3.22.0-c67.apk';
  } else if (type === 3) {
    url = 'https://apps.apple.com/us/app/神龙云-手机租赁/id6639605182';
  } else if (type === 4) {
    url = 'https://apk.dalongyun.com/apk_dalongyun/CloudPhone_huawei.apk';
  } else if (type === 5) {
    url = 'https://store.shenlongyun.com/apk_shenglongyun/gw-test/shenlongyun_beta.apk';
  }
  window.location.href = url;
};
const show = ref(false);
const anocementEntry = ref(true);
const toQQ = () => {
  window.open(
    'https://webpage.qidian.qq.com/qidian/chatv3/pc.html?kfuin=3009136856&kfext=3009136856&visitorId=126628530317749&visitorid=126628530317749&fid=17441&key=567f3986a56218e1163d3e26488e7f0e&cate=1&type=17&ftype=&tptype=1&tpForm=1&roleKey=roleQQ&roleValue=5&roleUin=0&pid=dsj1w2.7jc781.m25qosux&clickid=13qjsc.o0t3fs.m25qq0jb&qid=126628530317749&env=production&eptype=1&clickType=1&roleData=394&isKfuin=1&isLBS=0&isCustomEntry=0&callback=JSONP_CB_3_1728712389437_504&cb=JSONP_CB_3_1728712389437_504&rkey=7de451f86aa190a38aeb62fd6452251c&linkType=1&waitTime=10013&callImType=1&delayTime=10&translateSwitch=0&source=0&isSsc=0',
  );
};
const showAnocement = () => {
  window.open('https://mp.weixin.qq.com/s/aARnnjtJ604LwyjDTrWmaA');
};
</script>
<style lang="scss" scoped>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.bouncy {
  animation: bounce 1s infinite;
}
.app-container {
  width: 100%;
  height: 100vh;
}
.site-shell {
  font-family: 'SF Pro Display', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #0f172a;
  background: #f7f7f8;
}
.item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .name {
    font-size: 100px;
    color: #fff;
  }
}
.swiper {
  width: 100%;
  height: 100%;
}
.bg-slide {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
  filter: saturate(1.05);
}
.bg-slide-1 {
  background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.9), transparent 55%),
    linear-gradient(135deg, #f6f7fb 0%, #e7edf6 40%, #f9f9fb 100%);
}
.bg-slide-2 {
  background: radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.9), transparent 50%),
    linear-gradient(135deg, #f6f8fb 0%, #edf1f7 45%, #f8f9fb 100%);
}
.bg-slide-3 {
  background: radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.8), transparent 55%),
    linear-gradient(135deg, #f8f9fb 0%, #eef1f7 45%, #f6f7fb 100%);
}
.title {
  width: 100%;
  height: 68px;
  font-size: 24px;
  color: #3d3d3d;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  span {
    display: inline-block;
    display: inline-block;
    width: 20px;
    height: 20px;
    font-size: 16px;
    font-weight: normal;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
    transform: scaleX(1.2);
  }
}
.info {
  padding: 24px;
  p {
    margin-bottom: 14px;
    line-height: 23px;
  }
  span {
    width: 20px;
    display: inline-block;
  }
}
.z99 {
  z-index: 9999999999;
}
.page-shell {
  padding: 0 96px;
}
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
}
.brand-logo {
  width: 200px;
}
.brand-tag {
  font-size: 12px;
  letter-spacing: 3px;
  color: #64748b;
  text-transform: uppercase;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 80px;
  margin-top: 30px;
}
.hero-copy {
  max-width: 520px;
}
.hero-eyebrow {
  font-size: 12px;
  letter-spacing: 4px;
  color: #94a3b8;
  margin-bottom: 18px;
}
.hero-title {
  font-size: 54px;
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 24px;
}
.hero-subtitle {
  font-size: 18px;
  color: #64748b;
  margin-bottom: 32px;
}
.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 18px;
}
.primary-button {
  height: 52px;
  padding: 0 28px;
  border-radius: 999px;
  border: none;
  background: #0f172a;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.22);
}
.secondary-button {
  height: 52px;
  padding: 0 26px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: rgba(255, 255, 255, 0.85);
  color: #0f172a;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.secondary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.12);
}
.ghost-button {
  height: 52px;
  padding: 0 26px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: transparent;
  color: #334155;
  font-weight: 600;
  cursor: pointer;
}
.download-row {
  display: flex;
  gap: 14px;
}
.download-chip {
  height: 36px;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.3);
  background: rgba(255, 255, 255, 0.7);
  color: #475569;
  font-size: 12px;
  letter-spacing: 1px;
  cursor: pointer;
}
.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.device-glow {
  position: absolute;
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.18), transparent 70%);
  filter: blur(10px);
}
.hero-device {
  width: 520px;
  filter: drop-shadow(0 40px 80px rgba(15, 23, 42, 0.25));
}
.scroll-hint {
  color: #94a3b8;
}
.section-grid {
  align-items: center;
  gap: 80px;
}
.feature-stack {
  padding-left: 20px;
}
.section-title {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 12px;
}
.section-subtitle {
  font-size: 16px;
  color: #64748b;
  margin-bottom: 32px;
}
.feature-list {
  display: grid;
  gap: 18px;
}
.feature-card {
  padding: 22px 26px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(226, 232, 240, 0.9);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
}
.feature-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
}
.feature-desc {
  font-size: 13px;
  color: #64748b;
}
.feature-visual {
  position: relative;
  display: flex;
  justify-content: center;
}
.feature-image {
  width: 360px;
  border-radius: 26px;
  box-shadow: 0 30px 70px rgba(15, 23, 42, 0.18);
}
.floating-image {
  position: absolute;
  right: -40px;
  bottom: -30px;
  background: rgba(255, 255, 255, 0.8);
  padding: 14px;
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
}
.feature-image-small {
  width: 200px;
}
.section-footer {
  padding: 0 24px 40px;
}
.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 0 40px;
}
.service-card {
  padding: 28px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(226, 232, 240, 0.9);
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.1);
  text-align: left;
}
.service-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}
.service-desc {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 16px;
}
</style>
