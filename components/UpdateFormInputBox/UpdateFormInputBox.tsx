"use client";
import { Box, Column, InputBox, InputBoxProps, Text } from "@/components";
import { useField } from "formik";
import { useCallback } from "react";
import { UpdateFormInputBoxErrorMessage } from "../LoginPage/components/UpdateFormInpuBoxErrorMessage";

type UpdateFormInputBoxProps = Omit<InputBoxProps, "value" | "onBlur"> & {
  label?: string;
  value?: string;
};

export const UpdateFormInputBox: React.FC<UpdateFormInputBoxProps> = ({
  label,
  name,
  ...rest
}) => {
 
  const [field, meta, helpers] = useField(name);
  const onChange = (newValue: string) => {
    helpers.setValue(newValue);
  };

  const handleBlur = useCallback(() => {
    helpers.setTouched(true);
  }, [helpers]);


 
  const error = meta.touched && meta.error ? `${meta.error} `  : undefined;


  return (
    <Column
      gap={"s"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box pl={"l"} width={"100%"}>
        <Text variant="body" font="body">
          {label}
        </Text>
      </Box>
      <Box width={"100%"}>
        <InputBox
          handleOnChange={onChange}
          name={name}
          value={field.value}
          onBlur={handleBlur}
      {...rest}
        />
        {error ? <UpdateFormInputBoxErrorMessage error={error} /> : null}
      </Box>
    </Column>
  );
};
