import React from "react";
import Table from "components/Table/Table";
import { useAppContext } from "../../context/AppContextProvider";
import { Dialog, styled } from "@mui/material";

const Home = () => {
  const { hasError, handleChangeError } = useAppContext();
  return (
    <>
      <Table />
      <DialogSC open={!!hasError} onClose={() => handleChangeError("")}>
        <ErrorSC>{hasError}</ErrorSC>
      </DialogSC>
    </>
  );
};

const DialogSC = styled(Dialog)`
  & > .MuiDialog-container {
    & > .MuiPaper-root {
      padding: 50px;
    }
  }
`;

const ErrorSC = styled("h1")`
  color: red;
`;

export default React.memo(Home);
