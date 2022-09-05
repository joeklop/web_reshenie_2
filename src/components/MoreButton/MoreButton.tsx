import React from "react";
import { styled } from "@mui/material";
import { ButtonUI } from "UI/ButtonUI";
import { useAppContext } from "../../context/AppContextProvider";
import { useFetchData } from "../../hooks/useFetchData";

const MoreButton = () => {
  const { tableData, fileCode, page, sort, isEnd } = useAppContext();
  const { fetchGetDataTable } = useFetchData();

  const handleMoreData = () => {
    fetchGetDataTable(
      { code: fileCode, page: page + 1, order_by: sort },
      false,
    );
  };

  return tableData?.result.length ? (
    <ButtonMoreSC onClick={handleMoreData} disabled={isEnd}>
      {isEnd ? "Конец" : "Загрузкить еще"}
    </ButtonMoreSC>
  ) : null;
};

const ButtonMoreSC = styled(ButtonUI)`
  width: 100%;
`;

export default React.memo(MoreButton);
