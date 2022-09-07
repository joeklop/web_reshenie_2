import React from "react";
import styles from "./header.module.css";
import HeaderMarketplace from "components/Header/HeaderMarketplace/HeaderMarketplace";
import { FormProvider } from "react-hook-form";
import HeaderStock from "components/Header/HeaderStock/HeaderStock";
import HeaderStockProduct from "components/Header/HeaderStockProduct/HeaderStockProduct";
import HeaderRemainedFile from "components/Header/HeaderRemainedFile/HeaderRemainedFile";
import HeaderAttributesFile from "components/Header/HeaderAttributesFile/HeaderAttributesFile";
import HeaderYandexFile from "components/Header/HeaderYandexFile/HeaderYandexFile";
import { ButtonUI } from "UI/ButtonUI";
import SaveIcon from "assets/icon/SaveIcon/SaveIcon";
import { useHeader } from "components/Header/useHeader";
import HeaderError from "components/Header/HeaderError/HeaderError";
import { styled } from "@mui/material";
import HeaderDownloadLoading from "components/Header/HeaderDownloadLoading/HeaderDownloadLoading";

const Header = () => {
  const {
    sort,
    methods,
    fileCode,
    isLoading,
    isLoadingDownload,
    handleClearSort,
    handleSendFile,
    handleSaveFile,
  } = useHeader();

  return (
    <header>
      <form>
        <FormProvider {...methods}>
          <div className={styles.header}>
            <nav className={`${styles.innerHeader} ${styles.innerContainer}`}>
              {isLoading && <HeaderBlockSC />}
              <HeaderMarketplace />
              <HeaderStock />
              <HeaderStockProduct />
              <HeaderRemainedFile />
              <HeaderAttributesFile />
              <HeaderYandexFile />
              <div className={styles.buttonContainer}>
                <ButtonUI
                  onClick={handleSendFile}
                  type="button"
                  disabled={isLoading}>
                  Отправить
                </ButtonUI>
                <ButtonUI
                  type="button"
                  startIcon={<SaveIcon />}
                  onClick={handleSaveFile}
                  disabled={!fileCode}>
                  Сохранить
                </ButtonUI>
                {sort && (
                  <ButtonUI
                    type="button"
                    sx={{ marginLeft: "10px" }}
                    onClick={handleClearSort}>
                    Очистить сортировку
                  </ButtonUI>
                )}
              </div>
            </nav>
          </div>
          <div className={styles.innerContainer}>
            <HeaderError />
          </div>
          {isLoadingDownload && (
            <HeaderDownloadLoading isLoading={isLoadingDownload} />
          )}
        </FormProvider>
      </form>
    </header>
  );
};

const HeaderBlockSC = styled("div")`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: not-allowed;
  background-color: rgba(43, 113, 217, 0.4);
`;

export default React.memo(Header);
