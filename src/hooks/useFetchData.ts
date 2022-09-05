import { IHeaderRequest, IResponsePostFileSucces } from "types/types";
import { projectAxios } from "lib/http/http";
import { useAppContext } from "../context/AppContextProvider";

export const useFetchData = () => {
  const { handleChangeLoading, handleChangeError } = useAppContext();

  const fetchGetDataTable = async (data: IHeaderRequest) => {
    try {
      projectAxios.get("/upload/");
    } catch (e) {
      throw new Error("error get data tabel");
    }
  };

  const fetchPostDataFile = async (data: IHeaderRequest) => {
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
      console.log(response.data);
    } catch (e) {
      handleChangeLoading(false);
      handleChangeError("Ошибка отправки файла");
      throw new Error("error get data tabel");
    }
  };

  return { fetchPostDataFile, fetchGetDataTable };
};
