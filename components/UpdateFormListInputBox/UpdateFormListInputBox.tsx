"use client";
import { Box, Column, ListInputBox, InputBoxProps, Text } from "@/components";
import { useField } from "formik";

type LoginFormInputBoxProps = Omit<InputBoxProps, "value"> & {
  label: string;
  listOptions: string[];
};

export const UpdateFormListInputBox: React.FC<LoginFormInputBoxProps> = ({
  label,
  name,
  listOptions,
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
        <ListInputBox
          listOptions={listOptions}
          handleOnChange={onChange}
          name={name}
          value={field.value}
          {...rest}
        />
      </Box>
    </Column>
  );
};
