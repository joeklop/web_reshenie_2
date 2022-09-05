import { styled, TextField } from "@mui/material";

export const InputUI = styled(TextField)`
  & > .MuiInputBase-root {
    background-color: #e8e8e8;
    border-radius: 4px;
    & > .MuiInputBase-input {
      font-size: 16px;
      line-height: 20px;
      font-family: inherit;
      color: #000000;
      padding: 8px 10px;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      &[type="number"] {
        -moz-appearance: textfield;
      }
    }
    &::after,
    &::before {
      border: 0 !important;
    }
  }
`;
