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
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;

export default React.memo(SpinnerUI);
