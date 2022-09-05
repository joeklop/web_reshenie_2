import React from "react";
import DownloadButtonUI from "UI/DownloadButtonUI/DownloadButtonUI";

const HeaderRemainedFile = () => {
  return (
    <DownloadButtonUI
      title="Остатки.xls"
      contolerProps={{
        name: "stock_table",
        rules: { required: `Выберите файл "Остатки"` },
      }}
    />
  );
};

export default React.memo(HeaderRemainedFile);
