import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { IPostFileRequest, MarketPlaceType } from "types/types";
import { useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { useAppContext } from "../../context/AppContextProvider";

export const useHeader = () => {
  //other hook and context
  const {
    fetchPostDataFile,
    fetchDownloadFile,
    fetchGetDataTable,
    handleInitialState,
  } = useFetchData();
  const { fileCode, isLoading, tableData, sort, handleChangeSort } =
    useAppContext();

  // route
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const marketplace = searchParams.get("marketplace") as MarketPlaceType;

  //form
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
  const { handleSubmit, control, setValue, clearErrors } = methods;
  const formValue = useWatch({ control });

  //state
  const [isLoadingDownload, setIsLoadingDownload] = useState<boolean>(false);

  const onSendFile = (data: IPostFileRequest) => {
    fetchPostDataFile(data).then();
  };

  const handleSendFile = () => {
    handleSubmit(onSendFile)();
  };

  const handleChangeDownloadLoading = (state: boolean) => {
    setIsLoadingDownload(state);
  };

  const onSaveFile = (data: IPostFileRequest) => {
    handleChangeDownloadLoading(true);
    fetchDownloadFile(data, handleChangeDownloadLoading).then();
  };

  const handleSaveFile = () => {
    handleSubmit(onSaveFile)();
  };

  const handleClearSort = () => {
    handleChangeSort("");
    fetchGetDataTable({ page: 1, order_by: "", code: fileCode }, true);
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

  useEffect(() => {
    if (isLoading || tableData) {
      handleInitialState().then();
    }
  }, [formValue]);

  return {
    sort,
    fileCode,
    methods,
    isLoading,
    handleSendFile,
    handleSaveFile,
    handleClearSort,
    isLoadingDownload,
  };
};
