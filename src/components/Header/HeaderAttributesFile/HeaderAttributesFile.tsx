import React from "react";
import DownloadButtonUI from "UI/DownloadButtonUI/DownloadButtonUI";

const HeaderAttributesFile = () => {
  return (
    <DownloadButtonUI
      title="Артикулы.xls"
      contolerProps={{
        name: "products_table",
        rules: { required: `Выберите файл "Атрибуты"` },
      }}
    />
  );
};

export default React.memo(HeaderAttributesFile);
