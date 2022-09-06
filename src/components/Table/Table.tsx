import React from "react";
import TableContent from "components/Table/TableContent/TableContent";
import { styled } from "@mui/material";

const Table = () => {
  return (
    <SectionContainerSC>
      <TableContent />
    </SectionContainerSC>
  );
};

const SectionContainerSC = styled("section")`
  height: 100%;
  position: relative;
`;

export default React.memo(Table);
