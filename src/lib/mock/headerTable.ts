import { IHeaderTable } from "lib/models/ITableModel";
import { getMountTable } from "lib/mock/monthTable";
import { useSearchParams } from "react-router-dom";

export const getHeaderTable = (): IHeaderTable[] => {
  const [searchParams] = useSearchParams();
  const isYandex = (searchParams.get("marketplace") || "yandex") === "yandex";

  return [
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
      title: `Текущие продажи(${isYandex ? "FBY" : "FBO"})`,
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
    {
      id: 16,
      keyName: "msks",
      title: `Остаток ${isYandex ? "МСКЮ" : "МСКС"} (шт)`,
    },
    {
      id: 17,
      keyName: "rc",
      title: "Остаток РЦ (шт)",
    },
    {
      id: 18,
      keyName: "ads",
      title: "ADS",
    },
    {
      id: 19,
      keyName: "ids",
      title: "Текущий IDC (по складу в днях)",
    },
    {
      id: 20,
      keyName: "smart_order_auto",
      title: "Умный заказ, шт. (авто-чески)",
    },
    {
      id: 21,
      keyName: "smart_order_correct",
      title: "Умный заказ, шт. (Корректировка)",
    },
    {
      id: 22,
      keyName: "manual_delivery",
      title: "Ручная поставка",
    },
    {
      id: 23,
      keyName: "price",
      title: "Цена",
    },
    {
      id: 24,
      keyName: "comment",
      title: "Комментарии",
    },
    {
      id: 25,
      keyName: "delivery_cost",
      title: "Стоимость поставки",
    },
    {
      id: 26,
      keyName: "adjustment_cost",
      title: "Стоимость корректировки",
    },
    {
      id: 27,
      keyName: "manual_delivery_cost",
      title: "Стоимость ручной поставки",
    },
  ];
};
