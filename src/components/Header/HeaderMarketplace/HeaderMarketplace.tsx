import React from "react";
import { NavigationButtonUI } from "UI/NavigationButtonUI";
import { styled } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { MAIN_COLOR } from "lib/constants/constants";
import { IPostFileRequest, MarketPlaceType } from "types/types";
import { useNavigate } from "react-router-dom";

const HeaderMarketplace = () => {
  const navigate = useNavigate();
  const { control } = useFormContext<IPostFileRequest>();
  const handleChangeMarketPlace = (
    onChange: (state: MarketPlaceType) => void,
    marketPlace: MarketPlaceType,
  ) => {
    return () => {
      navigate(`/?marketplace=${marketPlace}`);
      onChange(marketPlace);
    };
  };

  return (
    <Controller
      name="marketplace"
      defaultValue={"yandex"}
      control={control}
      rules={{ required: "Выберите маркетплейс" }}
      render={({ field: { value, onChange } }) => (
        <ButtonContainerSC>
          <ButtonSC
            isYandex={"yandex" == value}
            onClick={handleChangeMarketPlace(onChange, "yandex")}>
            Яндекс
          </ButtonSC>
          <ButtonSC
            isYandex={"ozon" == value}
            onClick={handleChangeMarketPlace(onChange, "ozon")}>
            OZON
          </ButtonSC>
          <ButtonNavigationSC marketPlace={value} />
        </ButtonContainerSC>
      )}
    />
  );
};

const ButtonContainerSC = styled("div")`
  position: relative;
  width: 190px;
`;

const ButtonSC = styled(NavigationButtonUI)<{ isYandex: boolean }>`
  color: ${({ isYandex }) => (isYandex ? MAIN_COLOR : "inherit")};
`;

const ButtonNavigationSC = styled("div")<{ marketPlace: MarketPlaceType }>`
  position: absolute;
  left: ${({ marketPlace }) => (marketPlace == "yandex" ? "0" : "97px")};
  bottom: 0;
  width: ${({ marketPlace }) => (marketPlace == "yandex" ? "97px" : "86px")};
  height: 3px;
  transition: 0.2s all linear;
  background-color: ${MAIN_COLOR};
`;

export default React.memo(HeaderMarketplace);
