import React from "react";
import { Dialog, styled } from "@mui/material";
import SpinnerUI from "UI/SpinnerUI/SpinnerUI";

interface IHeaderDownloadLoadingProps {
  isLoading: boolean;
}

const HeaderDownloadLoading = ({ isLoading }: IHeaderDownloadLoadingProps) => {
  return (
    <Dialog open={isLoading}>
      <ContainerSC>
        <SpinnerUI />
      </ContainerSC>
    </Dialog>
  );
};

const ContainerSC = styled("div")`
  padding: 100px 150px;
`;

export default React.memo(HeaderDownloadLoading);
