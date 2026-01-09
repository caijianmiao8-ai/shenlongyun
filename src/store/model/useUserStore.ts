import { defineStore } from 'pinia';
import { IUserParams } from '@/api/model/userModel.ts';
// 1. 创建store
// 参数1：store的唯一表示
// 参数2：对象，可以提供state actions getters
const useUserStore = defineStore('userParams', {
  state: () => {
    return {
      phone: '',
      token: '',
      appkey: '',
      channel_code: '',
    };
  },
  actions: {
    setUserParams(data: IUserParams) {
      this.phone = data.phone;
      this.token = data.token;
      this.appkey = data.appkey;
      this.channel_code = data.channel_code;
    },
  },
  persist: true,
});

export default useUserStore;
