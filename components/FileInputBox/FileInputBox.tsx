import { BASE_COLORS } from "@/theme";
import { StyledInputBox } from "../styled";
import { ChangeEvent } from "react";

export type FileInputBoxProps = {
  name: string;
  handleOnChange?: (files: FileList | null) => void;
};

export const FileInputBox: React.FC<FileInputBoxProps> = ({
  name,
  handleOnChange,
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (handleOnChange) handleOnChange(e.target.files);
  };
  return (
    <StyledInputBox
      width={"100%"}
      name={name}
      onChange={onChange}
      type="file"
      style={{ cursor: "pointer" }}
    />
  );
};
