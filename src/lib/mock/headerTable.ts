import { IHeaderTable } from "lib/models/ITableModel";
import { getMountTable } from "lib/mock/monthTable";

export const headerTable: IHeaderTable[] = [
  {
    id: 1,
    keyName: "vendor_code",
    title: "Артикул",
  },
  {
    id: 2,
    keyName: "delivery_type",
    title: "Тип Доставки",
  },
  {
    id: 3,
    keyName: "product_type",
    title: "Тип товара",
  },
  {
    id: 4,
    keyName: "name",
    title: "Название",
  },
  {
    id: 5,
    keyName: "barcode",
    title: "Штрихкод",
  },
  ...getMountTable(),
  {
    id: 12,
    keyName: "sold_this_month",
    title: "Продажи в текущем месяце",
  },
  {
    id: 13,
    keyName: "fbo",
    title: "Текущие продажи(FBO)",
  },
  {
    id: 14,
    keyName: "fbs",
    title: "Текущие продажи(FBS)",
  },
  {
    id: 15,
    keyName: "stock",
    title: "Склад",
  },
  { id: 16, keyName: "msks", title: "Остаток МСКС (шт)" },
  {
    id: 17,
    keyName: "ads",
    title: "ADS",
  },
  {
    id: 18,
    keyName: "ids",
    title: "Текущий IDC (по складу в днях)",
  },
  {
    id: 19,
    keyName: "smart_order_auto",
    title: "Умный заказ, шт. (авто-чески)",
  },
  {
    id: 20,
    keyName: "smart_order_correct",
    title: "Умный заказ, шт. (Корректировка)",
  },
  {
    id: 21,
    keyName: "manual_delivery",
    title: "Ручная поставка",
  },
  {
    id: 22,
    keyName: "price",
    title: "Цена",
  },
  {
    id: 22,
    keyName: "comment",
    title: "Комментарии",
  },
  {
    id: 23,
    keyName: "delivery_cost",
    title: "Стоимость поставки",
  },
  {
    id: 24,
    keyName: "adjustment_cost",
    title: "Стоимость корректировки",
  },
  {
    id: 25,
    keyName: "manual_delivery_cost",
    title: "Стоимость ручной поставки",
  },
];
