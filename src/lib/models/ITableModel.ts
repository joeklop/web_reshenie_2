import { StatusType } from "types/types";

export interface ITableItemModel {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  vendor_code: string;
  delivery_type: string;
  product_type: string;
  name: string;
  barcode: string;
  abc_segment: string;
  fbo: number;
  fbs: number;
  sold_this_month: number;
  stock: number;
  msks: number;
  rc: number;
  ads: number;
  ids: number;
  smart_order_auto: number;
  smart_order_correct: number;
  manual_delivery: number;
  price: number;
  comment: string;
}

export interface ITableModel {
  status: StatusType;
  delivery_cost: number;
  adjustment_cost: number;
  manual_delivery_cost: number;
  months: [4, 5, 6, 7, 8, 9];
  result: ITableItemModel[];
}

export type IUnionTableItemKey = keyof ITableItemModel;

export type MonthType =
  | "month1"
  | "month2"
  | "month3"
  | "month4"
  | "month5"
  | "month6";

export type UnionTypeItemKey =
  | keyof ITableItemModel
  | keyof Pick<
      ITableModel,
      "delivery_cost" | "adjustment_cost" | "manual_delivery_cost"
    >
  | MonthType;

export interface IHeaderTable {
  id: number;
  title: string;
  keyName: UnionTypeItemKey;
}
