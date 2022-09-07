import React from "react";
import TableRowSubItem from "components/Table/TableContent/TableRowSubItem/TableRowSubItem";
import { styled } from "@mui/material";

const getEmptyTableRow = (): number[] => {
  const arr = [];
  for (let i = 1; i <= 500; i++) {
    arr.push(i);
  }
  return arr;
};

const TableEmpty = () => {
  const emptyRow = getEmptyTableRow();
  return (
    <section>
      {emptyRow.map((item) => (
        <ContainerSC key={item}>
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
          <TableRowSubItem title="" />
        </ContainerSC>
      ))}
    </section>
  );
};

const ContainerSC = styled("div")`
  display: flex;
`;

export default React.memo(TableEmpty);
