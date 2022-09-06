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
import { useAppContext } from "../../context/AppContextProvider";

const Header = () => {
  const { fileCode, isLoading, sort, handleChangeSort } = useAppContext();
  const { methods, handleSendFile, handleSaveFile, fetchGetDataTable } =
    useHeader();

  const handleClearSort = () => {
    handleChangeSort("");
    fetchGetDataTable({ page: 1, order_by: "", code: fileCode }, true);
  };

  return (
    <header>
      <form>
        <FormProvider {...methods}>
          <div className={styles.header}>
            <nav className={`${styles.innerHeader} ${styles.innerContainer}`}>
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
        </FormProvider>
      </form>
    </header>
  );
};

export default React.memo(Header);
