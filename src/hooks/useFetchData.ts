import {
  IGetTableRequest,
  IGetTableResponse,
  IPostFileRequest,
  IResponsePostFileSucces,
} from "types/types";
import { projectAxios } from "lib/http/http";
import { useAppContext } from "../context/AppContextProvider";

export const useFetchData = () => {
  const {
    sort,
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

  const handleInitialState = async () => {
    await handleChangeLoading(true);
    await handleChangeTableData(null);
    await handleChangeEnd(false);
    await handleChangeSort("");
    await handleChangeError("");
    await handleChangePage(1);
  };

  const fetchGetDataTable = async (
    data: IGetTableRequest,
    isReset: boolean,
  ) => {
    try {
      await handleChangeLoading(true);
      if (isReset) {
        await handleChangeTableData(null);
        await handleChangeEnd(false);
      }
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
            await handleChangePage(data.page);
            await handleChangeFileCode(data.code);
            await handleChangeLoading(false);
            if (isReset) {
              await handleChangeTableData(response.data.result);
            } else {
              await handleUpdateTableData(response.data.result.result);
              if (response.data.result.result.length === 0) {
                await handleChangeEnd(true);
              }
            }
            if (data.order_by) {
              await handleChangeSort(data.order_by);
            }
          }
      }
    } catch (e) {
      setError("Ошибка получения информации");
    }
  };

  const fetchPostDataFile = async (data: IPostFileRequest) => {
    try {
      await handleInitialState();
      await handleChangeLoading(true);
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
      }
    } catch (e) {
      setError("Ошибка отправки файла");
    }
  };

  const fetchDownloadFile = async (data: IPostFileRequest) => {
    try {
      const response = await projectAxios.get(
        `/api/download/?${new URLSearchParams({
          code: fileCode,
          marketplace: data.marketplace,
          our_stock: data.our_stock,
          stock_days: data.stock_days,
          order_by: sort || "",
        })}`,
        {
          responseType: "blob",
        },
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "file.pdf"); //or any other extension
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      setError("Ошибка скачивания файла");
    }
  };

  return { fetchPostDataFile, fetchGetDataTable, fetchDownloadFile };
};
