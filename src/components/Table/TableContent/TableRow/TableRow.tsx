import React from "react";
import { styled } from "@mui/material";
import { useAppContext } from "../../../../context/AppContextProvider";
import TableRowItem from "components/Table/TableContent/TableRowItem/TableRowItem";

const TableRow = () => {
  const { tableData } = useAppContext();
  return (
    <RowContainerSC>
      {!!tableData?.result &&
        tableData.result.map((tableItem, index) => (
          <TableRowItem
            key={index + 1}
            familyIndex={index}
            tableRow={tableItem}
            tableData={tableData}
            isFirst={index === 0}
          />
        ))}
    </RowContainerSC>
  );
};

const RowContainerSC = styled("div")``;

export default React.memo(TableRow);
