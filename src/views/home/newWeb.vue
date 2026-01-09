<template>
  <div class="w-screen h-screen">
    <div class="bg-home"></div>
    <div class="h-100px w-screen text-20px flex-center bg-white">
      <div class="w-1100px pl-20px">
        <img src="@/assets/image/home/logo-new.png" class="w-263px" />
      </div>
    </div>
    <div class="flex justify-center items-center mt-60px h-[calc(100vh-160px)] <lg:flex-col">
      <img src="@/assets/image/home/content-img-new.png" alt="" class="w-[34%] mr-40px" />
      <div class="flex flex-col">
        <div class="flex flex-col items-end">
          <img src="@/assets/image/home/tips.png" alt="" class="w-400px" />
          <div class="text-right mt-40px mb-40px text-black text-20px leading-30px">
            <p>智能托管，离线运行，不费电不耗流量。</p>
            <p>断网、关机、没电，通通不怕！7x24小时长久在线。</p>
          </div>
          <div class="flex icons-div">
            <img src="@/assets/image/home/icon01.png" alt="" class="w-160px h-166px" />
            <img src="@/assets/image/home/icon02.png" alt="" class="w-160px h-166px" />
            <!-- <img src="@/assets/image/home/icon01-1.png" alt="" class="w-160px h-166px" />
          <img src="@/assets/image/home/icon02-1.png" alt="" class="w-160px h-166px" /> -->
            <img src="@/assets/image/home/icon03.png" alt="" class="w-160px h-166px" />
            <img src="@/assets/image/home/icon04.png" alt="" class="w-160px h-166px" />
          </div>
        </div>

        <div class="flex mt-70px ml-30px">
          <img src="@/assets/image/home/download-ios.png" alt="" class="w-180px h-52px cursor-pointer" @click="download()" />
          <!-- <img src="@/assets/image/home/download-pc.png" alt="" class="w-180px h-52px cursor-pointer" @click="download(1)" />
          <img src="@/assets/image/home/download-android.png" alt="" class="w-180px ml-30px h-52px cursor-pointer" @click="download(2)" />
          <img src="@/assets/image/home/download-huawei.png" alt="" class="w-180px ml-30px h-52px cursor-pointer" @click="download(4)" /> -->
        </div>
        <!-- <div class="flex mt-20px ml-30px">
          <img src="@/assets/image/home/download-ios.png" alt="" class="w-180px h-52px cursor-pointer" @click="download(3)" />
          <img src="@/assets/image/home/download-huawei.png" alt="" class="w-180px ml-30px h-52px cursor-pointer" @click="download(4)" />
        </div> -->
      </div>
    </div>
    <div class="fixed top-130px left-10px">
      <div class="w-216px h-260px bg-white rounded-6px flex-col flex-center">
        <p class="text-black333 text-16px mb-20px">官方Q群：764494862</p>
        <img src="@/assets/image/home/ewm.png" alt="" class="w-180px h-180px" />
      </div>
      <div class="w-216px h-260px bg-white rounded-6px flex-col flex-center mt-10px">
        <p class="text-black333 text-16px mb-20px">商务合作：87531715</p>
        <img src="@/assets/image/home/business.png" alt="" class="w-180px h-180px" />
      </div>
      <p class="text-center mt-20px">联系电话：13647185975</p>
    </div>
    <div v-if="anocementEntry" class="fixed top-202px right-10px">
      <img src="@/assets/image/home/anocement.png" alt="" class="w-100px h-110px" @click="show = true" />
    </div>

    <div class="w-screen flex flex-col justify-center text-13px absolute bottom-20px">
      <p class="text-center mb-8px">
        <!-- <span class="mr-6px">沪公网安备31011502007990号</span>
        <span class="mr-6px">经营许可证 沪B2-20180327</span>
        <span class="mr-6px">工商电子营业执照</span> -->
        <a class="text-orange-500 mr-6px" href="https://beian.miit.gov.cn/">沪ICP备2023003352号-2</a>
        <span>上海晓浮信息科技有限公司</span>
      </p>
      <!-- <p class="text-center">Copyright © 2020 - 2023 成都龙霆互娱信息科技有限公司 All Rights Reserved</p> -->
    </div>
    <div v-show="show" class="w-screen h-screen bg-[rgba(0,0,0,0.2)] fixed top-0 left-0 z99">
      <div class="w-1/2 h-2/3 rounded-10px absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white overflow-auto">
        <p class="title">关于系统升级的公告 <span @click="show = false">X</span></p>
        <div class="info">
          <p>尊敬的云手机用户：</p>
          <p>您好！</p>
          <p>根据我们的服务升级计划，云手机系统将于7月9日早上9点进行维护升级。以下是本次升级的主要内容和相关安排：</p>
          <p>一、维护范围：</p>
          <p>全区维护，滚动式更新。</p>
          <p>
            二、升级内容：<br />
            系统核心升级：提升安卓内核稳定性与运行效率。<br />
            显示优化：增强屏幕显示清晰度与流畅性。<br />
            文件传输功能：新增文件上传功能，实现跨大区文件传输与管理。 <br />
            进程保活机制：优化后台进程管理，防止应用意外关闭。<br />
            机型修改功能：用户可根据需求选择不同机型。<br />
            权限支持：<br />
            <span></span>全局root与部分root支持。<br />
            <span></span>S5/HTTP/HTTPS代理支持，增强网络连接的灵活性与安全性。<br />
            <span></span>虚拟定位功能，满足特定应用需求。<br />
            框架与服务支持（部分大区）：<br />
            <span></span>XP框架支持。<br />
            <span></span>GMS服务支持<br />
            <span></span>王牌战争一键支持<br />
            应用商店更新：解决下载问题，提升用户体验。<br />
          </p>
          <p>三、维护时间：</p>
          <p>7月9日早上9点开始，预计持续1小时。</p>
          <p>四、注意事项：</p>
          <p>用户需在维护前备份重要数据，以避免数据丢失。</p>
          <p>维护完成后，云手机将自动重启，请用户重新登录并检查数据与设置。</p>
          <p>感谢您的理解与合作。如有任何问题，请及时联系客服。</p>
          <p>此致</p>
          <p>敬礼</p>
          <p>云手机团队</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Toast from '@/components/Toast';

const download = () => {
  Toast('IOS下载敬请期待');
  // let url = '';
  // if (type === 1) {
  //   url = 'https://apk.dalongyun.com/apk_dalongyun/CloudPhonePC.exe';
  // } else if (type === 2) {
  //   url = 'https://apk.dalongyun.com/apk_dalongyun/CloudPhone.apk';
  // } else if (type === 3) {
  //   url = 'https://apps.apple.com/cn/app/掌上网咖-七彩云游/id1572937555';
  // } else {
  //   url = 'https://apk.dalongyun.com/apk_dalongyun/CloudPhone_huawei.apk';
  // }
  // window.location.href = url;
};
const show = ref(false);
const anocementEntry = ref(false);
</script>
<style lang="scss" scoped>
.bg-home {
  width: 100vw;
  height: 100vh;
  background: url(@/assets/image/home/bg.png) no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: fixed;
  z-index: -1;

  .icons-div {
    img {
      margin-right: -28px;
    }
  }
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
</style>
