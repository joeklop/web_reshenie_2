import React, { createContext, ReactNode, useContext, useState } from "react";
import { ITableModel } from "lib/models/ITableModel";
import { mock } from "lib/mock/mock";

type TableDataType = ITableModel;
type IsLoadingType = boolean;
type HasErrorType = string | null;

interface IAppContext {
  tableData: TableDataType;
  isLoading: IsLoadingType;
  hasError: HasErrorType;
  handleChangeTableData: (tableData: TableDataType) => void;
  handleChangeLoading: (loadingData: IsLoadingType) => void;
  handleChangeError: (errorData: HasErrorType) => void;
}

const AppContext = createContext<IAppContext>({
  tableData: mock,
  isLoading: false,
  hasError: null,
  handleChangeTableData: () => {
    console.log("...loading handleChangeTableData");
  },
  handleChangeLoading: () => {
    console.log("...loading handleChangeLoading");
  },
  handleChangeError: () => {
    console.log("...loading handleChangeError");
  },
});
export const useAppContext = () => useContext(AppContext);

interface IAppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [tableData, setTableData] = useState<TableDataType>(mock);
  const [isLoading, setIsLoading] = useState<IsLoadingType>(false);
  const [hasError, setHasError] = useState<HasErrorType>(null);

  const handleChangeTableData = (tableData: TableDataType) => {
    console.log(tableData);
  };

  const handleChangeLoading = (loadingData: IsLoadingType) => {
    setHasError(null);
    setIsLoading(loadingData);
  };

  const handleChangeError = (errorData: HasErrorType) => {
    setIsLoading(false);
    setHasError(errorData);
  };

  const contextValue = {
    tableData,
    isLoading,
    hasError,
    handleChangeTableData,
    handleChangeLoading,
    handleChangeError,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default React.memo(AppContextProvider);
