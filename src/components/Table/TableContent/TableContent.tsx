import React, { useEffect, useState } from "react";
import TableHeader from "components/Table/TableContent/TableHeader/TableHeader";
import TableRow from "components/Table/TableContent/TableRow/TableRow";
import { styled } from "@mui/material";
import SpinnerUI from "UI/SpinnerUI/SpinnerUI";
import MoreButton from "components/MoreButton/MoreButton";

const TableContent = () => {
  const [height, setHeight] = useState<number>(0);

  const handleGetHeight = () => {
    const headerElement = document.querySelector("header");
    const headerHeight = headerElement?.offsetHeight;
    if (headerHeight) {
      setHeight(headerHeight + 15);
    }
  };

  useEffect(() => {
    handleGetHeight();
    window.addEventListener("resize", handleGetHeight);
  }, []);

  return (
    <SectionContainerSC headerHeight={height}>
      <StickyHeaderContainerSC>
        <TableHeader />
      </StickyHeaderContainerSC>
      <TableRow />
      <StickyFooterContainerSC>
        <SpinnerUI />
        <MoreButton />
      </StickyFooterContainerSC>
    </SectionContainerSC>
  );
};

const SectionContainerSC = styled("div")<{ headerHeight: number }>`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: calc(100vh - ${({ headerHeight }) => headerHeight}px);
  /* width */

  ::-webkit-scrollbar {
    width: 15px;
    height: 15px;
  }

  ::-webkit-scrollbar-track {
    background-color: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background: #b7b7b7;
    border-radius: 31px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #d2d2d2;
  }
`;

const StickyHeaderContainerSC = styled("div")`
  top: 0;
  position: sticky;
  z-index: 1;
`;

const StickyFooterContainerSC = styled("div")`
  position: sticky;
  left: 0;
`;

export default React.memo(TableContent);
