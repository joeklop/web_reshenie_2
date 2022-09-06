import { useMemo } from "react";
import { ITableBodyItemProps } from "components/Table/TableContent/TableRowItem/types";

export const useTableRowItem = ({
  tableRow,
  tableData,
  isFirst,
}: ITableBodyItemProps) => {
  const tableRowArr = useMemo(() => {
    if (typeof tableRow === "object") {
      let firstMoreArr: number[] = [];
      if (isFirst) {
        firstMoreArr = [
          tableData.delivery_cost,
          tableData.adjustment_cost,
          tableData.manual_delivery_cost,
        ];
      }
      return [
        tableRow.vendor_code,
        tableRow.delivery_type,
        tableRow.product_type,
        tableRow.name,
        tableRow.barcode,
        tableRow.month0,
        tableRow.month1,
        tableRow.month2,
        tableRow.month3,
        tableRow.month4,
        tableRow.month5,
        tableRow.sold_this_month,
        tableRow.fbo,
        tableRow.fbs,
        tableRow.stock,
        tableRow.msks,
        tableRow.rc,
        tableRow.ads,
        tableRow.ids,
        tableRow.smart_order_auto,
        tableRow.smart_order_correct,
        tableRow.manual_delivery,
        tableRow.price,
        tableRow.comment,
        ...firstMoreArr,
      ];
    }
    return [];
  }, [tableRow]);
  return {
    tableRowArr,
  };
};
