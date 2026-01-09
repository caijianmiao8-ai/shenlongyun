<template>
  <div class="w-screen">
    <div class="w-screen">
      <div class="bg-home"></div>
      <div v-if="isIos" class="h-200px flex items-center pl-90px bg-white" @click="back">
        <img src="https://reso.dalongyun.com/yun/dalongyun_page/webRtc/dlyphoneH5/icon-back.png" class="h-80px" />
      </div>
      <div class="h-350px flex items-center pl-90px bg-white">
        <img src="@/assets/image/home/logo.png" class="h-200px" />
      </div>
      <div class="w-screen flex items-center flex-col">
        <img src="@/assets/image/home/h5-content-img.png" alt="" />
        <img src="@/assets/image/home/h5-text.png" alt="" class="w-1500px -mt-175px" />
        <div class="mt-100px flex items-center" @click="download(4)">
          <p class="w-480px h-225px text-85px text-white mr-135px bg-btn flex-center">注册</p>
          <p class="w-480px h-225px text-85px text-white bg-btn flex-center">登录</p>
        </div>
        <div>
          <img src="@/assets/image/home/download-huawei.png" alt="" class="h-220px cursor-pointer mt-100px mb-100px" @click="download(5)" />
          <img src="@/assets/image/home/download-android.png" alt="" class="h-220px mb-100px" @click="download(2)" />
          <img src="@/assets/image/home/download-android-test.png" alt="" class="h-220px mb-100px" @click="download(6)" />
          <img src="@/assets/image/home/download-ios.png" alt="" class="h-220px cursor-pointer mt-100px mb-100px" @click="download(3)" />
          <img src="@/assets/image/home/download-pc.png" alt="" class="h-220px mb-100px" @click="download(1)" />
        </div>
      </div>
    </div>
    <img v-if="anocementEntry" src="@/assets/image/home/anocement.png" alt="" class="w-500px absolute top-1005px right-55px" @click="show = true" />
    <div v-show="show" class="w-screen h-screen bg-[rgba(0,0,0,0.2)] fixed top-0 left-0 z99">
      <div class="w-full rounded-top-50px absolute bottom-0 left-0 h-2/3 bg-white overflow-auto">
        <p class="title">关于充值系统升级的公告 <span @click="show = false">X</span></p>
        <div class="info">
          <p>尊敬的云电脑用户：</p>
          <p>为了向您提供更加优质便捷的服务，云电脑决定对充值系统进行升级优化调整，通告如下：</p>
          <p>一、计划于2024年3月31日23:59:59后不再提供云豆充值功能；</p>
          <p>二、账户中的云豆余额在2024年6月30日23:59:59前仍可以使用云游戏消耗；</p>
          <p>三、账户中2023年12月31日23:59:59之前获得的系统赠送云豆，有效期为365天，超出有效期后系统会自动失效；</p>
          <p>
            四、我们提供账户余额兑换为时长的功能，兑换规则如下：<br />
            1.系统赠送云豆余额，2024年6月30日23:59:59前，支持手动兑换，1云豆兑换15分钟等额兑换，可玩所有游戏，兑换后有效期每增加30小时增加30天有效期，最长不超过365天，例如：≤30小时，30天有效期；30~60小时，60天有效期；60~90小时，90天有效期；2024年6月30日23:59:59后，系统自动兑换；<br />
            2.账户中充值云豆余额，2024年6月30日23:59:59前，支持手动兑换，1云豆兑换15分钟*110%（不足1分钟按1分钟计算），可玩所有游戏，时长有效期365天；2024年6月30日23:59:59后，系统自动兑换，1云豆兑换15分钟等额兑换，时长有效期365天；<br />
            3.兑换功能于2024年1月16日12:00:00上线； <br />
            4.此次升级中兑换资产流程操作不可逆；<br />
            5.任何人不得使用插件、外挂等第三方工具恶意篡改数据，如存在违规操作行为，云电脑有权收回用户账户下不当得利，并追究法律责任。<br />
          </p>
          <p>五、以上调整最终解释权归达龙公司所有，任何疑问，随时咨询在线客服。</p>
        </div>
      </div>
    </div>
    <!-- <Toast :title="msg"></Toast> -->
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Toast from '@/components/Toast';
const show = ref(false);
const route = useRoute();
const anocementEntry = ref(false);
const isAndroid = /(Android)/i.test(navigator.userAgent);
const download = (type: number) => {
  let url = '';
  if (type === 1) {
    // url = 'https://apk.dalongyun.com/apk_dalongyun/CloudPhonePC.exe';
    Toast('请在电脑浏览器中打开');
  } else if (type === 2) {
    if (isAndroid) {
      url =
        route.query.channel === 'ydn'
          ? 'https://apk.dalongyun.com/apk_dalongyun/CloudPhone_android_ydn.apk'
          : 'https://apk.dalongyun.com/apk_dalongyun/CloudPhone.apk';
      window.location.href = url;
    } else {
      Toast('请在安卓手机浏览器中打开');
    }
  } else if (type === 3) {
    url = 'https://apps.apple.com/us/app/神龙云-手机租赁/id6639605182';
    window.location.href = url;
  } else if (type === 4) {
    url = `https://m.dlyphone.com/login?fromType=official&timestamp=${new Date().getTime()}`;
    window.location.href = url;
  } else if (type === 5) {
    if (isAndroid) {
      url = 'https://apk.dalongyun.com/apk_dalongyun/CloudPhone_huawei.apk';
      window.location.href = url;
    } else {
      Toast('请在安卓手机浏览器中打开');
    }
  } else if (type === 6) {
    if (isAndroid) {
      url = 'https://store.shenlongyun.com/apk_shenglongyun/gw-test/shenlongyun_beta.apk';
      window.location.href = url;
    } else {
      Toast('请在安卓手机浏览器中打开');
    }
  }
};
// const toQQ = () => {
//   window.location.href =
//     'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=lMg_71T6fhhgynRGd8NivEfynwy6uWBN&authKey=gjesiRNBqWPIhTJTMWrErOgvvx8a88nM72hTfOgmWB5lGjO5IjvB3uG1U9qy3O%2Fu&noverify=0&group_code=764494862';
// };
const u = navigator.userAgent;
const isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
const back = () => {
  history.back();
};
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
}
.title {
  width: 100%;
  height: 68px;
  font-size: 20px;
  color: #3d3d3d;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: #fff;
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
  padding: 0 24px 24px 24px;
  p {
    margin-bottom: 14px;
    line-height: 23px;
  }
}
.z99 {
  z-index: 999999999999;
}
.bg-btn {
  background: linear-gradient(90deg, #ff5b5a 0%, #ff2120 100%);
}
</style>
