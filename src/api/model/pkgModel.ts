type TProductNameType = 1 | 2; // 1文字 2图片
export interface IPkgItem {
  id: number;
  product_name_type: TProductNameType;
  product_name_txt: string;
  product_name_url: string;
  product_desc: string;
  image_url: string;
  corner_url: string;
  title: string;
  width: number;
}

type TGoodsPay = 1 | 2; // 商品性质 1:付费，2:免费
type TGoodsType = 1 | 2; // 商品类型 1:一次性商品；2:订阅商品
type TGoodsUnit = 1 | 2 | 3 | 4 | 5 | 6; // 商品时间单位(1:小时;2:天;3:月;4:季;5:半年;6:一年)
type TLimit = 1 | 2; // 是否限购（1：限购；2:不限购
export interface IGoodsItem {
  goods_id: number;
  goods_name: string;
  goods_desc: string;
  icon_url: string;
  corner_url: string;
  original_price: number;
  price: number;
  unit: string;
  price_desc: string;
  goods_pay: TGoodsPay;
  goods_type: TGoodsType;
  goods_time: number;
  goods_unit: TGoodsUnit;
  goods_limit: TLimit;
  limit_type: number;
  limit_num: number;
}
