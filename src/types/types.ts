import { ITableModel } from "lib/models/ITableModel";

export type StatusType = "waiting" | "ready";
export type MarketPlaceType = "yandex" | "ozon";
export type StockType = "rc" | "msks" | "msku" | "";
export interface IPostFileRequest {
  marketplace: MarketPlaceType;
  our_stock: StockType;
  stock_days: string;
  stock_table: File | null;
  products_table: File | null;
  orders_table: File | null;
}

export interface IDownloadRequest {
  code: string;
  marketplace: MarketPlaceType;
  our_stock: StockType;
  stock_days: string;
}

export interface ITextListData {
  value: string;
  label: string;
}

export interface IResponsePostFileSucces {
  code: string;
}

export interface IGetTableRequest {
  code: string;
  page: number;
  order_by?: string;
}

export interface IGetTableResponse {
  result: ITableModel;
}
