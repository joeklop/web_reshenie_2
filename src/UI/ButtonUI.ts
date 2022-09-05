import { Button, styled } from "@mui/material";
import { MAIN_COLOR } from "lib/constants/constants";

export const ButtonUI = styled(Button)`
  color: #ffffff;
  border-radius: 4px;
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  background-color: ${MAIN_COLOR};
  text-transform: none;
  padding: 10px 22px;
  height: 35px;

  &:hover {
    background-color: rgba(43, 113, 217, 0.7);
  }
  &:disabled {
    color: white;
    cursor: not-allowed;
  }
`;
