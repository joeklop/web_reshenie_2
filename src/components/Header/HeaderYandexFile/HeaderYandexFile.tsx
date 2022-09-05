import React from "react";
import DownloadButtonUI from "UI/DownloadButtonUI/DownloadButtonUI";
import { useWatch } from "react-hook-form";
import { IPostFileRequest } from "types/types";

const HeaderYandexFile = () => {
  const marketplace = useWatch<Pick<IPostFileRequest, "marketplace">>({
    name: "marketplace",
  });
  const isYandex = marketplace == "yandex" ? `Выберите файл "Яндекс"` : false;

  return (
    <DownloadButtonUI
      title="Заказы"
      isDisabled={!isYandex}
      contolerProps={{ name: "orders_table", rules: { required: isYandex } }}
    />
  );
};

export default React.memo(HeaderYandexFile);
