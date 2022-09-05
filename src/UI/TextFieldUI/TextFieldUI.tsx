import React from "react";
import { Controller, ControllerProps, useFormContext } from "react-hook-form";
import { ITextListData, StockType } from "types/types";
import { styled, TextField } from "@mui/material";

interface ITextFieldUIProps {
  data: ITextListData[];
  contollerProps: Omit<ControllerProps, "render" | "control">;
}

const TextFieldUI = ({ data, contollerProps }: ITextFieldUIProps) => {
  const { control } = useFormContext();
  const handleChange = (onChange: (state: string) => void) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value as StockType);
    };
  };

  return (
    <Controller
      {...contollerProps}
      control={control}
      render={({ field: { value, onChange } }) => (
        <TextFieldSC
          id="filled-select-currency-native"
          select
          value={value}
          SelectProps={{
            native: true,
          }}
          onChange={handleChange(onChange)}
          variant="standard">
          {data.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextFieldSC>
      )}
    />
  );
};

const TextFieldSC = styled(TextField)`
  text-align: center;
  background-color: #ffffff !important;
  & > .MuiInputBase-root {
    background-color: #ffffff !important;
    & > .MuiNativeSelect-select {
      text-align: center;
      padding: 0;
    }
    &:before,
    &:after {
      border: 0 !important;
    }
  }
`;

export default React.memo(TextFieldUI);
