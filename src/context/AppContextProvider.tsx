import React, { createContext, ReactNode, useContext, useState } from "react";
import { ITableItemModel, ITableModel } from "lib/models/ITableModel";
import { mock } from "lib/mock/mock";

type TableDataType = ITableModel | null;
type IsLoadingType = boolean;
type HasErrorType = string | null;

interface IAppContext {
  sort: string;
  page: number;
  fileCode: string;
  tableData: TableDataType;
  isEnd: boolean;
  isLoading: IsLoadingType;
  hasError: HasErrorType;
  handleChangePage: (page: number) => void;
  handleChangeSort: (sort: string) => void;
  handleChangeFileCode: (fileCode: string) => void;
  handleChangeTableData: (tableData: TableDataType) => void;
  handleUpdateTableData: (resultData: ITableItemModel[]) => void;
  handleChangeLoading: (loadingData: IsLoadingType) => void;
  handleChangeEnd: (endData: boolean) => void;
  handleChangeError: (errorData: HasErrorType) => void;
}

const AppContext = createContext<IAppContext>({
  page: 1,
  sort: "",
  fileCode: "",
  isEnd: false,
  tableData: mock,
  isLoading: false,
  hasError: null,
  handleChangeSort: () => {
    console.log("...loading sort");
  },
  handleChangePage: () => {
    console.log("...loading page");
  },
  handleChangeFileCode: () => {
    console.log("...loading fileCode");
  },
  handleChangeTableData: () => {
    console.log("...loading handleChangeTableData");
  },
  handleUpdateTableData: () => {
    console.log("...loading handleUpdateTableData");
  },
  handleChangeLoading: () => {
    console.log("...loading handleChangeLoading");
  },
  handleChangeEnd: () => {
    console.log("...loading handleChangeEnd");
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
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<string>("");
  const [fileCode, setFileCode] = useState<string>("");
  const [tableData, setTableData] = useState<TableDataType>({
    ...mock,
    result: [...mock.result, ...mock.result],
  });
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<IsLoadingType>(false);
  const [hasError, setHasError] = useState<HasErrorType>(null);

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  const handleChangeSort = (sort: string) => {
    setSort(sort);
  };

  const handleChangeFileCode = (fileCode: string) => {
    setFileCode(fileCode);
  };

  const handleChangeTableData = (tableData: TableDataType) => {
    setTableData(tableData);
  };

  const handleUpdateTableData = (tableDataItems: ITableItemModel[]) => {
    setTableData((prevState) => {
      if (prevState) {
        return {
          ...prevState,
          result: [...prevState.result, ...tableDataItems],
        };
      }
      return null;
    });
  };

  const handleChangeLoading = (loadingData: IsLoadingType) => {
    setHasError(null);
    setIsLoading(loadingData);
  };

  const handleChangeEnd = (endData: boolean) => {
    setIsEnd(endData);
  };

  const handleChangeError = (errorData: HasErrorType) => {
    setIsLoading(false);
    setHasError(errorData);
  };

  const contextValue = {
    page,
    sort,
    fileCode,
    tableData,
    isLoading,
    isEnd,
    hasError,
    handleChangeEnd,
    handleChangeSort,
    handleChangePage,
    handleUpdateTableData,
    handleChangeFileCode,
    handleChangeTableData,
    handleChangeLoading,
    handleChangeError,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default React.memo(AppContextProvider);
