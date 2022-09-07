import React, { ReactNode } from "react";
import { styled } from "@mui/material";

export interface ITextChildrenUIProps {
  title: string;
  children: ReactNode;
}

const TextChildrenUI = ({ title, children }: ITextChildrenUIProps) => {
  return (
    <ContainerSC>
      <TextSC>{title}</TextSC>
      {children}
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  display: flex;
  align-items: center;
`;
const TextSC = styled("p")`
  font-weight: 500;
  font-size: 16px;
  max-height: 36px;
  line-height: 18px;
  color: #aaaaaa;
  margin-right: 10px;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

export default React.memo(TextChildrenUI);
