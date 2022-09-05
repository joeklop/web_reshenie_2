import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IHeaderRequest } from "types/types";
import TextChildrenUI from "UI/TextChildrenUI/TextChildrenUI";
import { styled } from "@mui/material";
import { InputUI } from "UI/InputUI";

const HeaderStockProduct = () => {
  const { control } = useFormContext<IHeaderRequest>();
  return (
    <Controller
      name="stock_days"
      control={control}
      rules={{ required: "Заполните запас товара" }}
      render={({ field: { value, onChange } }) => (
        <TextChildrenUI title="Запас товара">
          <StockInputSC
            variant="filled"
            type="number"
            value={value}
            onChange={onChange}
          />
        </TextChildrenUI>
      )}
    />
  );
};

const StockInputSC = styled(InputUI)`
  width: 86px;
  & > .MuiInputBase-root {
    & > .MuiInputBase-input {
      text-align: center;
    }
  }
`;

export default React.memo(HeaderStockProduct);
