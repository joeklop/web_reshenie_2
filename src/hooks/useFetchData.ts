import {
  IDownloadRequest,
  IGetTableRequest,
  IGetTableResponse,
  IPostFileRequest,
  IResponsePostFileSucces,
} from "types/types";
import { projectAxios } from "lib/http/http";
import { useAppContext } from "../context/AppContextProvider";

export const useFetchData = () => {
  const {
    fileCode,
    handleChangeEnd,
    handleChangeSort,
    handleChangePage,
    handleChangeLoading,
    handleChangeError,
    handleUpdateTableData,
    handleChangeTableData,
    handleChangeFileCode,
  } = useAppContext();

  const setError = (message: string) => {
    handleChangeLoading(false);
    handleChangeError(message);
  };

  const fetchGetDataTable = async (
    data: IGetTableRequest,
    isReset: boolean,
  ) => {
    try {
      handleChangeLoading(true);
      const queryStr = new URLSearchParams({
        code: data.code,
        page: `${data.page}`,
        order_by: data?.order_by || "",
      });
      const response = await projectAxios.get<IGetTableResponse>(
        `/api/upload/?${queryStr}`,
      );

      switch (response.status) {
        case 200:
          if (response.data.result.status == "waiting") {
            setTimeout(() => {
              fetchGetDataTable(data, true);
            }, 30000);
          }
          if (response.data.result.status == "ready") {
            handleChangePage(data.page);
            handleChangeFileCode(data.code);
            handleChangeLoading(false);
            if (isReset) {
              handleChangeTableData(response.data.result);
            } else {
              handleUpdateTableData(response.data.result.result);
              if (response.data.result.result.length === 0) {
                handleChangeEnd(true);
              }
            }
            if (data.order_by) {
              handleChangeSort(data.order_by);
            }
          }
      }
    } catch (e) {
      setError("непредвиденная ошибка");
      throw new Error("error get data tabel");
    }
  };

  const fetchPostDataFile = async (data: IPostFileRequest) => {
    try {
      handleChangeLoading(true);
      const formData = new FormData();
      formData.append("marketplace", data.marketplace);
      formData.append("stock_days", data.stock_days);
      formData.append("our_stock", data.our_stock);
      if (data.stock_table) {
        formData.append("stock_table", data.stock_table);
      }
      if (data.products_table) {
        formData.append("products_table", data.products_table);
      }
      if (data.orders_table) {
        formData.append("orders_table", data.orders_table);
      }

      const response = await projectAxios.post<IResponsePostFileSucces>(
        "/api/upload/",
        formData,
      );

      switch (response.status) {
        case 200:
          fetchGetDataTable({ code: response.data.code, page: 1 }, true);
          break;
        case 400:
          setError("Ошибка запроса");
          break;
      }
    } catch (e) {
      setError("Ошибка отправки файла");
    }
  };

  const fetchDownloadFile = async (data: IPostFileRequest) => {
    const submitData = {
      code: fileCode,
      marketplace: data.marketplace,
      our_stock: data.our_stock,
      stock_days: data.stock_days,
    } as IDownloadRequest;
    const response = await projectAxios.post("/api/download/", submitData, {
      responseType: "blob",
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "file.pdf"); //or any other extension
    document.body.appendChild(link);
    link.click();
  };

  return { fetchPostDataFile, fetchGetDataTable, fetchDownloadFile };
};
