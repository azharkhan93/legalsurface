"use client";
import { Box, Column, InputBox, InputBoxProps, Text } from "@/components";
import { useField } from "formik";

type UpdateFormInputBoxProps = Omit<InputBoxProps, "value"> & {
  label: string;
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
          {...rest}
        />
      </Box>
    </Column>
  );
};
