import React, { useState } from "react";
import { IHeaderTable } from "lib/models/ITableModel";
import { Button, Menu, MenuItem, styled } from "@mui/material";
import { HeaderItemCSS } from "lib/cssPattern/cssPattern";
import { useAppContext } from "../../../../context/AppContextProvider";

const TableHeaderMenu = ({
  title,
  keyName,
}: Pick<IHeaderTable, "keyName" | "title">) => {
  const { handleChangeSort } = useAppContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectSort = (isSort: boolean) => {
    return () => {
      handleClose();
      handleChangeSort(`${isSort ? "" : "-"}${keyName as string}`);
    };
  };

  return (
    <>
      <MyButton onClick={handleClick}>{title}</MyButton>
      <MenuSC
        open={open}
        id="basic-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <MenuItem onClick={handleSelectSort(true)}>По возрастанию</MenuItem>
        <MenuItem onClick={handleSelectSort(false)}>По убыванию</MenuItem>
      </MenuSC>
    </>
  );
};

const MenuSC = styled(Menu)`
  & > .MuiPaper-root {
    min-width: 100px;
    justify-content: center;
    align-items: center;
  }
`;

const MyButton = styled(Button)`
  ${HeaderItemCSS};
  padding: 0;
  text-transform: none;
  &:hover {
    background-color: inherit;
  }
`;

export default React.memo(TableHeaderMenu);
