import React from "react";
import TableHeader from "components/Table/TableContent/TableHeader/TableHeader";
import TableRow from "components/Table/TableContent/TableRow/TableRow";
import { styled } from "@mui/material";

const TableContent = () => {
  return (
    <SectionContainerSC>
      <StickyContainerSC>
        <TableHeader />
      </StickyContainerSC>
      <TableRow />
    </SectionContainerSC>
  );
};

const SectionContainerSC = styled("div")`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const StickyContainerSC = styled("div")`
  top: 0;
  position: sticky;
  z-index: 1;
`;

export default React.memo(TableContent);
