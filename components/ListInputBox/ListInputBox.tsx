"use client"

import { BASE_COLORS } from "@/theme";
import { StyledInputBox } from "../styled";
import { ChangeEvent } from "react";

export type ListInputBoxProps = {
  name: string;
  handleOnChange?: (e: string) => void;
  placeholder: string;
  value: string | number;
  listOptions: string[];
};

export const ListInputBox: React.FC<ListInputBoxProps> = ({
  name,
  handleOnChange,
  placeholder,
  value,
}) => {

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (handleOnChange) handleOnChange(e.target.value);
  };

  
  

  return (
    <>
      <StyledInputBox
        border={`1px solid ${BASE_COLORS.primary}`}
        borderRadius={"xs"}
        width={"100%"}
        name={name}
        onChange={onChange} 
        height={"40px"}
        placeholder={placeholder}
        value={value}
      />
      
    </>
  );
};






