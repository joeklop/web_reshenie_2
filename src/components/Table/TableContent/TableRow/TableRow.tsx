import React from "react";
import { styled } from "@mui/material";
import { useAppContext } from "../../../../context/AppContextProvider";
import TableRowItem from "components/Table/TableContent/TableRowItem/TableRowItem";
import TableEmpty from "components/Table/TableContent/TableEmpty/TableEmpty";

const TableRow = () => {
  const { tableData, isLoading } = useAppContext();
  const isTableData = !!tableData?.result;
  return (
    <RowContainerSC>
      {isTableData ? (
        tableData.result.map((tableItem, index) => (
          <TableRowItem
            key={index + 1}
            familyIndex={index}
            tableRow={tableItem}
            tableData={tableData}
            isFirst={index === 0}
          />
        ))
      ) : !isLoading ? (
        <TableEmpty />
      ) : null}
      {!isTableData && !isLoading && (
        <EmptyContainerSC>Данные ещё не загружены.</EmptyContainerSC>
      )}
    </RowContainerSC>
  );
};

const RowContainerSC = styled("div")``;

const EmptyContainerSC = styled("div")`
  position: fixed;
  bottom: 15px;
  right: 15px;
  padding: 7px 8px;
  font-size: 18px;
  background-color: white;
  box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.1);
`;

export default React.memo(TableRow);
