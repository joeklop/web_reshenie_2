import React from "react";
import { IHeaderTable } from "lib/models/ITableModel";
import { styled } from "@mui/material";
import TableHeaderMenu from "components/Table/TableContent/TableHeaderMenu/TableHeaderMenu";
import { HeaderItemCSS } from "lib/cssPattern/cssPattern";

interface ITableHeaderItemProps extends IHeaderTable {
  isSort: boolean;
  sortName: string;
}

const TableHeaderItem = ({
  title,
  keyName,
  isSort,
  sortName,
}: ITableHeaderItemProps) => {
  return (
    <HeaderItemContainerSC>
      {isSort ? (
        <TableHeaderMenu title={title} keyName={keyName} sortName={sortName} />
      ) : (
        <HeaderItemSC>{title}</HeaderItemSC>
      )}
    </HeaderItemContainerSC>
  );
};

const HeaderItemContainerSC = styled("div")`
  background-color: #fafafa;
`;

export const HeaderItemSC = styled("div")`
  ${HeaderItemCSS}
`;

export default React.memo(TableHeaderItem);
