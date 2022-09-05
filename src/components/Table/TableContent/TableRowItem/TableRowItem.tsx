import React from "react";
import { styled } from "@mui/material";
import { ITableBodyItemProps } from "components/Table/TableContent/TableRowItem/types";
import { useTableRowItem } from "components/Table/TableContent/TableRowItem/useTableRowItem";
import TableRowSubItem from "components/Table/TableContent/TableRowSubItem/TableRowSubItem";

const TableRowItem = (props: ITableBodyItemProps) => {
  const { familyIndex } = props;
  const { tableRowArr } = useTableRowItem(props);
  return (
    <ContainerSC>
      {tableRowArr.map((rowItem, index) => (
        <div key={`${rowItem}${index}${familyIndex}`}>
          <TableRowSubItem title={rowItem} />
        </div>
      ))}
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  display: flex;
  flex-wrap: nowrap;
`;
export default React.memo(TableRowItem);
