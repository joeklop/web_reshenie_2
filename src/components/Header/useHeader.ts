import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IPostFileRequest, MarketPlaceType } from "types/types";
import { useEffect } from "react";
import { useFetchData } from "../../hooks/useFetchData";

export const useHeader = () => {
  const { fetchPostDataFile, fetchDownloadFile } = useFetchData();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const marketplace = searchParams.get("marketplace") as MarketPlaceType;
  const methods = useForm<IPostFileRequest>({
    defaultValues: {
      marketplace: marketplace || "yandex",
      our_stock: "",
      stock_days: "",
      orders_table: null,
      stock_table: null,
      products_table: null,
    },
  });
  const { handleSubmit, setValue, clearErrors } = methods;

  const onSendFile = (data: IPostFileRequest) => {
    fetchPostDataFile(data);
  };

  const handleSendFile = () => {
    handleSubmit(onSendFile)();
  };

  const onSaveFile = (data: IPostFileRequest) => {
    fetchDownloadFile(data);
  };

  const handleSaveFile = () => {
    handleSubmit(onSaveFile)();
  };

  useEffect(() => {
    if (!marketplace) {
      navigate("/?marketplace=yandex");
    }
    if (marketplace == "ozon") {
      setValue("orders_table", null);
      setValue("our_stock", "");
    }
    clearErrors();
  }, [marketplace]);

  return {
    methods,
    handleSendFile,
    handleSaveFile,
  };
};
