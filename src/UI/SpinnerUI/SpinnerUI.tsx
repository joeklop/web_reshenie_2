import React from "react";
import { CircularProgress, styled } from "@mui/material";
import { useAppContext } from "../../context/AppContextProvider";

const SpinnerUI = () => {
  const { isLoading } = useAppContext();
  return isLoading ? (
    <ContainerSC>
      <CircularProgress style={{ width: "80px", height: "80px" }} />
    </ContainerSC>
  ) : null;
};

const ContainerSC = styled("div")`
  margin: 40px auto;
  width: 100%;
  max-width: 80px;
`;

export default React.memo(SpinnerUI);
