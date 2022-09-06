import React, { useMemo } from "react";
import { styled } from "@mui/material";
import { useFormContext } from "react-hook-form";

const HeaderError = () => {
  const { formState } = useFormContext();
  const hasErrorArr: string[] = useMemo(() => {
    const errorArr: string[] = [];
    for (const value of Object.values(formState.errors)) {
      errorArr.push(value?.message as string);
    }
    return errorArr;
  }, [formState]);
  return (
    <ErrorContainerSC>
      {!!hasErrorArr.length && (
        <>
          {hasErrorArr.map((errorItem, index) => (
            <ErrorItemSC key={errorItem + index}>
              {errorItem}
              {index !== hasErrorArr.length - 1 ? "," : ""}
            </ErrorItemSC>
          ))}
        </>
      )}
    </ErrorContainerSC>
  );
};

const ErrorContainerSC = styled("ul")`
  padding: 5px 0 0;
  display: flex;
  & > *:last-child {
    margin-right: 0;
  }
  min-height: 25px;
  overflow: hidden;
`;
const ErrorItemSC = styled("li")`
  margin-right: 10px;
  white-space: nowrap;
  color: red;
`;

export default React.memo(HeaderError);
