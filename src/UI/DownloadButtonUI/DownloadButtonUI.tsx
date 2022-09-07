import React, { ChangeEvent, useRef, MouseEvent } from "react";
import TextChildrenUI from "UI/TextChildrenUI/TextChildrenUI";
import DownloadIcon from "assets/icon/DownloadIcon/DownloadIcon";
import { Button, styled } from "@mui/material";
import { MAIN_COLOR } from "lib/constants/constants";
import { Controller, ControllerProps, useFormContext } from "react-hook-form";
import RemoveIcon from "assets/icon/RemoveIcon/RemoveIcon";

interface IDownloadButtonUIProps {
  title: string;
  isDisabled?: boolean;
  contolerProps: Omit<ControllerProps, "render" | "control">;
}

const DownloadButtonUI = ({
  title,
  isDisabled = false,
  contolerProps,
}: IDownloadButtonUIProps) => {
  const { control } = useFormContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleAddFile = (onChange: (state: File) => void) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const fileList = Array.from(e.target.files as FileList);
      if (Array.isArray(fileList)) {
        const file = fileList[0];
        onChange(file);
        setTimeout(() => {
          e.target.value = "";
        }, 1000);
      }
    };
  };

  const handleRemoveFile = (onChange: (state: undefined) => void) => {
    return (e: MouseEvent<HTMLAnchorElement>) => {
      e.stopPropagation();
      onChange(undefined);
    };
  };

  return (
    <Controller
      {...contolerProps}
      control={control}
      render={({ field: { value, onChange } }) => (
        <ButtonSC onClick={handleClick} disabled={isDisabled}>
          <TextChildrenUI title={value?.name || title}>
            {value?.name && (
              <RemoveButtonSC
                type="button"
                onClick={handleRemoveFile(onChange)}>
                <RemoveIcon />
              </RemoveButtonSC>
            )}
            <IconContainerSC>
              <DownloadIcon />
            </IconContainerSC>
            <InputContainerSC>
              <input
                type="file"
                value={undefined}
                onChange={handleAddFile(onChange)}
                ref={inputRef}
                multiple={false}
                accept=".xls, .xlsx"
              />
            </InputContainerSC>
          </TextChildrenUI>
        </ButtonSC>
      )}
    />
  );
};

const ButtonSC = styled(Button)`
  background-color: #ffffff;
  text-transform: none;
  height: 100%;
  color: ${MAIN_COLOR};
  padding: 11.5px 10px;
`;

const RemoveButtonSC = styled("a")`
  margin-right: 5px;
  padding: 5px 10px;
  background-color: transparent;
`;

const IconContainerSC = styled("div")`
  background-color: ${MAIN_COLOR};
  width: 36px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const InputContainerSC = styled("div")`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export default React.memo(DownloadButtonUI);
