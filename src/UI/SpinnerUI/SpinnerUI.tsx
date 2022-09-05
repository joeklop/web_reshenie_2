import React from "react";
import { CircularProgress } from "@mui/material";
import { useAppContext } from "../../context/AppContextProvider";

const SpinnerUI = () => {
  const { isLoading } = useAppContext();
  console.log(isLoading);
  return isLoading ? <CircularProgress /> : null;
};

export default React.memo(SpinnerUI);
