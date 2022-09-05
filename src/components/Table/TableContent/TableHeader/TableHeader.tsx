import React from "react";
import { headerTable } from "lib/mock/headerTable";
import { styled } from "@mui/material";
import TableHeaderItem from "components/Table/TableContent/TableHeaderItem/TableHeaderItem";
import { useAppContext } from "../../../../context/AppContextProvider";
import { UnionTypeItemKey } from "lib/models/ITableModel";

const TableHeader = () => {
  const { fileCode, sort } = useAppContext();
  const sortElementKey = sort[0] === "-" ? sort.replace("-", "") : sort;
  const getSortName = (keyName: UnionTypeItemKey) =>
    sortElementKey === keyName ? sort : "";

  return (
    <HeaderContainerSC id="tableHeader">
      {headerTable.map((headerItem) => (
        <TableHeaderItem
          key={headerItem.id}
          isSort={!fileCode}
          {...headerItem}
          sortName={getSortName(headerItem.keyName)}
        />
      ))}
    </HeaderContainerSC>
  );
};

const HeaderContainerSC = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  position: sticky;
`;

export default React.memo(TableHeader);
