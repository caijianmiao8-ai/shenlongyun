import { defineStore } from 'pinia';
import { IPayItem, TPayType } from '@/api/model/payModel';
// 1. 创建store
// 参数1：store的唯一表示
// 参数2：对象，可以提供state actions getters
const usePayStore = defineStore('payParams', {
  state: () => {
    return {
      goods_id: 0,
      goods_name: '',
      goods_title: '',
      price: 0,
      num: 1,
      pay_type: <TPayType>1,
      limit_num: 0,
      goods_limit: 2,
    };
  },
  actions: {
    setPayParams(data: IPayItem) {
      if (data.goods_id) this.goods_id = data.goods_id;
      if (data.goods_name) this.goods_name = data.goods_name;
      if (data.price) this.price = data.price;
      if (data.num) this.num = data.num;
      if (data.pay_type) this.pay_type = data.pay_type;
      if (data.goods_title) this.goods_title = data.goods_title;
      if (data.limit_num) this.limit_num = data.limit_num;
      if (data.goods_limit) this.goods_limit = data.goods_limit;
    },
  },
  // persist: true,
  persist: {
    // 修改存储中使用的键名称，默认为当前 Store的 id
    key: 'payParams',
    // 修改为 sessionStorage，默认为 localStorage
    storage: window.sessionStorage,
    // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
    // paths: ['nested.data'],
  },
});

export default usePayStore;
