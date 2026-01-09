type TTradeType = 'wap' | 'native'; //wap：H5支付；native：二维码支付

export type TPayType = 1 | 2; // 1支付宝 2微信

export interface IPayType {
  type: TPayType; // 1支付宝 2微信
  name: string;
  icon: string;
}

export interface IPayParam {
  goods_id: number;
  num: number;
  pay_type: TPayType;
  return_url: string;
  device: string;
  trade_type: TTradeType;
  server_list?: string;
}
export interface IPayItem {
  goods_id?: number;
  goods_name?: string;
  num?: number;
  price?: number;
  pay_type?: TPayType;
  goods_title?: string;
  limit_num?: number;
  goods_limit?: number;
}

export interface IOrder {
  orderSn: string;
  payCode: string;
}
