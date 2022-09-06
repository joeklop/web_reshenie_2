import React from "react";
import { styled } from "@mui/material";

interface ITableRowSubItemProps {
  title: string | number;
}

const TableRowSubItem = ({ title }: ITableRowSubItemProps) => {
  return (
    <ItemSC title={`${title}`}>
      <ParagraphSC>{title}</ParagraphSC>
    </ItemSC>
  );
};

const ItemSC = styled("div")`
  max-width: 164px;
  min-width: 164px;
  min-height: 35px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-right: 1.5px solid #e8e8e8;
  border-bottom: 1.5px solid #e8e8e8;
  display: flex;
  justify-content: left;
  word-break: break-word;
  padding: 8px 4px;
  position: relative;
`;

const ParagraphSC = styled("p")``;

export default React.memo(TableRowSubItem);
