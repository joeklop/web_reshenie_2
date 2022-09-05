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
        tableRow["0"],
        tableRow["1"],
        tableRow["2"],
        tableRow["3"],
        tableRow["4"],
        tableRow["5"],
        tableRow.sold_this_month,
        tableRow.fbo,
        tableRow.fbs,
        tableRow.stock,
        tableRow.msks,
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
