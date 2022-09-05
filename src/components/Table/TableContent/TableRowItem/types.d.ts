import { ITableItemModel, ITableModel } from "lib/models/ITableModel";

export interface ITableBodyItemProps {
  isFirst: boolean;
  familyIndex: number;
  tableRow: ITableItemModel;
  tableData: ITableModel;
}
