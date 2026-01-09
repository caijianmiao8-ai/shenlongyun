<template>
  <div class="app-container site-shell">
    <swiper :no-swiping="true" direction="vertical" :modules="modules" :mousewheel="{ mousewheel: true }" @swiper="onSwiper">
      <swiper-slide>
        <div class="item">
          <div class="bg-slide bg-slide-1"></div>
          <div class="h-screen mx-auto flex flex-col justify-between">
            <div class="pt-24px flex items-center justify-between px-80px">
              <img src="@/assets/image/home/logo.png" class="w-220px drop-shadow-lg" />
              <div class="hero-pill">云端手机</div>
            </div>
            <div class="flex flex-col items-center text-black hero">
              <p class="hero-title">云端手机，像拥有另一台设备</p>
              <p class="hero-subtitle">轻量托管 · 多开稳定 · 秒级启动</p>
              <div class="flex-center mt-36px">
                <img src="@/assets/image/home/slide-1-1.png" alt="" class="w-188px hero-image" />
                <img src="@/assets/image/home/slide-1-2.png" alt="" class="w-750px mx-40px hero-image-main" />
                <img src="@/assets/image/home/slide-1-3.png" alt="" class="w-188px hero-image" />
              </div>
              <div class="flex mt-32px ml-30px hero-actions">
                <button class="download-card" @click="download(1)">
                  <img src="@/assets/image/home/icon-pc.png" alt="" class="w-24px mr-12px" />
                  <div>
                    <p class="text-16px mb-4px">电脑版下载</p>
                    <p class="text-12px opacity-80">Windows / macOS</p>
                  </div>
                </button>
                <button class="download-card mx-30px" @click="download(2)">
                  <img src="@/assets/image/home/icon-android.png" alt="" class="w-24px mr-12px" />
                  <div>
                    <p class="text-16px mb-4px">安卓下载</p>
                    <p class="text-12px opacity-80">官方版本</p>
                  </div>
                </button>
                <button class="download-card mr-30px" @click="download(5)">
                  <img src="@/assets/image/home/icon-android-test.png" alt="" class="w-24px mr-12px" />
                  <div>
                    <p class="text-16px mb-4px">安卓测试版</p>
                    <p class="text-12px opacity-80">尝鲜体验</p>
                  </div>
                </button>
                <button class="download-card" @click="download(3)">
                  <img src="@/assets/image/home/icon-ios.png" alt="" class="w-24px mr-12px" />
                  <div>
                    <p class="text-16px mb-4px">App Store</p>
                    <p class="text-12px opacity-80">iOS 版本</p>
                  </div>
                </button>
                <button class="download-card ml-30px" @click="download(4)">
                  <img src="@/assets/image/home/icon-hw.png" alt="" class="w-24px mr-12px" />
                  <div>
                    <p class="text-16px mb-4px">华为专用</p>
                    <p class="text-12px opacity-80">HarmonyOS</p>
                  </div>
                </button>
              </div>
            </div>
            <div class="mt-44px flex flex-col items-center pb-24px text-slate-600">
              <p class="text-14px tracking-1px">向下滑动查看更多</p>
              <img src="@/assets/image/home/icon-down.png" alt="" class="w-32px mt-24px bouncy" />
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
          <div class="max-w-1280px mx-auto h-screen flex">
            <img src="@/assets/image/home/slide-2-1.png" alt="" class="w-440px h-430px mt-260px hero-card" />
            <div class="flex flex-col justify-between">
              <img src="@/assets/image/home/slide-2-2.png" alt="" class="w-360px h-450px mt-64px ml-40px mr-120px hero-card" />
              <div class="flex flex-col items-center pb-24px text-slate-600">
                <p class="text-14px tracking-1px">向下滑动查看更多</p>
                <img src="@/assets/image/home/icon-down.png" alt="" class="w-32px mt-24px bouncy" />
              </div>
            </div>
            <img src="@/assets/image/home/slide-2-3.png" alt="" class="w-360px h-450px mt-260px hero-card" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="bg-slide bg-slide-3"></div>
          <div class="max-w-1280px mx-auto h-screen flex flex-col items-center justify-between">
            <div class="flex flex-col items-center">
              <p class="text-14px tracking-2px text-slate-500 mt-64px">品牌实力</p>
              <p class="text-40px font-semibold mt-32px mb-24px">云端托管，稳定多开</p>
              <p class="text-20px text-slate-600">为专业用户打造的可靠平台</p>
            </div>
            <div class="text-16px flex-center mt-100px">
              <div class="w-300px h-350px brand-card flex flex-col items-center justify-center">
                <img src="@/assets/image/home/slide-3-1.png" alt="" class="mb-40px" />
                <p>官方Q群</p>
              </div>
              <div class="w-300px h-350px brand-card mx-100px flex flex-col items-center justify-center">
                <img src="@/assets/image/home/slide-3-2.png" alt="" class="mb-40px" />
                <p>代理合作</p>
              </div>
              <div class="w-300px h-350px brand-card flex flex-col items-center justify-center">
                <img src="@/assets/image/home/slide-3-3.png" alt="" class="mb-40px" />
                <button class="ghost-button" @click="toQQ">QQ在线客服</button>
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
  background: url(@/assets/image/home/bg-slide-1.png) no-repeat;
  background-size: cover;
}
.bg-slide-2 {
  background: url(@/assets/image/home/bg-slide-2.png) no-repeat;
  background-size: cover;
}
.bg-slide-3 {
  background: url(@/assets/image/home/bg-slide-3.png) no-repeat;
  background-size: cover;
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
.hero {
  text-align: center;
}
.hero-pill {
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 12px;
  letter-spacing: 2px;
  color: #0f172a;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.6);
}
.hero-title {
  font-size: 44px;
  font-weight: 600;
  letter-spacing: 1px;
}
.hero-subtitle {
  font-size: 18px;
  color: #475569;
}
.hero-image {
  filter: drop-shadow(0 20px 50px rgba(15, 23, 42, 0.12));
}
.hero-image-main {
  filter: drop-shadow(0 30px 60px rgba(15, 23, 42, 0.18));
}
.hero-actions {
  flex-wrap: nowrap;
}
.download-card {
  width: 210px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px solid rgba(148, 163, 184, 0.25);
  background: rgba(15, 23, 42, 0.9);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.download-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.2);
}
.hero-card {
  border-radius: 20px;
  box-shadow: 0 30px 70px rgba(15, 23, 42, 0.18);
}
.brand-card {
  background: rgba(255, 255, 255, 0.86);
  border-radius: 24px;
  border: 1px solid rgba(226, 232, 240, 0.9);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(14px);
}
.ghost-button {
  width: 168px;
  height: 48px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.6);
  color: #0f172a;
  background: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.ghost-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
}
</style>
