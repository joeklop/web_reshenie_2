import React from "react";
import TableContent from "components/Table/TableContent/TableContent";
import SpinnerUI from "UI/SpinnerUI/SpinnerUI";
import MoreButton from "components/MoreButton/MoreButton";

const Table = () => {
  return (
    <section>
      <TableContent />
      <SpinnerUI />
      <MoreButton />
    </section>
  );
};

export default React.memo(Table);
