import React from "react";
import TextFieldUI from "UI/TextFieldUI/TextFieldUI";
import { useWatch } from "react-hook-form";
import { IPostFileRequest } from "types/types";

const dataYandex = [
  { value: "", label: "Склад отгрузки" },
  { value: "rc", label: "РЦ" },
  { value: "msku", label: "МСКЮ" },
];

const dataOzon = [
  { value: "", label: "Склад отгрузки" },
  { value: "rc", label: "РЦ" },
  { value: "msks", label: "МСКС" },
];

const HeaderStock = () => {
  const marketplace = useWatch<Pick<IPostFileRequest, "marketplace">>({
    name: "marketplace",
  });
  const marketplaceData = marketplace === "yandex" ? dataYandex : dataOzon;

  return (
    <TextFieldUI
      contollerProps={{
        name: "our_stock",
        rules: { required: "Выберите склад" },
      }}
      data={marketplaceData}
    />
  );
};

export default React.memo(HeaderStock);
