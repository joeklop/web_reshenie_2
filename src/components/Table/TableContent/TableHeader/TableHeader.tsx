import React from "react";
import { headerTable } from "lib/mock/headerTable";
import { styled } from "@mui/material";
import TableHeaderItem from "components/Table/TableContent/TableHeaderItem/TableHeaderItem";
import { useAppContext } from "../../../../context/AppContextProvider";

const TableHeader = () => {
  const { fileCode } = useAppContext();
  return (
    <HeaderContainerSC>
      {headerTable.map((headerItem) => (
        <TableHeaderItem
          key={headerItem.id}
          {...headerItem}
          isSort={!fileCode}
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
