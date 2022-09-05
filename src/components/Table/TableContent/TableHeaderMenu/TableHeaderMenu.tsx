import React, { useState } from "react";
import { IHeaderTable } from "lib/models/ITableModel";
import { Button, Menu, MenuItem, styled } from "@mui/material";
import { HeaderItemCSS } from "lib/cssPattern/cssPattern";
import { useAppContext } from "../../../../context/AppContextProvider";
import { MAIN_COLOR } from "lib/constants/constants";
import { useFetchData } from "../../../../hooks/useFetchData";

interface ITableHeaderMenuProps
  extends Pick<IHeaderTable, "keyName" | "title"> {
  sortName: string;
}

const handleCheckSort = (sortName: string) =>
  sortName[0] === "-" ? "По убыванию" : sortName ? "По возрастанию" : "";

const TableHeaderMenu = ({
  title,
  keyName,
  sortName,
}: ITableHeaderMenuProps) => {
  const { fileCode } = useAppContext();
  const { fetchGetDataTable } = useFetchData();
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
      const sort = `${isSort ? "" : "-"}${keyName as string}`;
      fetchGetDataTable({ code: fileCode, page: 1, order_by: sort }, true);
    };
  };

  return (
    <>
      <MyButton onClick={handleClick}>
        <p>{title}</p>
        <SortNameSC>{handleCheckSort(sortName)}</SortNameSC>
      </MyButton>
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
  flex-direction: column;
  ${HeaderItemCSS};
  padding: 0;
  text-transform: none;
  &:hover {
    background-color: inherit;
  }
`;

const SortNameSC = styled("p")`
  padding-top: 5px;
  font-size: 11px;
  line-height: 12px;
  color: ${MAIN_COLOR};
`;

export default React.memo(TableHeaderMenu);
