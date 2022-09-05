import React, { useMemo } from "react";
import TableHeader from "components/Table/TableHeader/TableHeader";
import { useAppContext } from "../../context/AppContextProvider";
import SpinnerUI from "UI/SpinnerUI/SpinnerUI";

const Table = () => {
  const { tableData } = useAppContext();
  const isData = useMemo(() => !!tableData.result.length, [tableData]);
  return (
    <>
      <table>
        <TableHeader />
        {/*{isData && tableData.result.map((tableItem) => <TableRow />)}*/}
      </table>
      <SpinnerUI />
    </>
  );
};

export default React.memo(Table);
