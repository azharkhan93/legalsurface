"use client";
import {
  Box,
  Column,
  FileInputBox,
  FileInputBoxProps,
  Text,
} from "@/components";
import { useField } from "formik";

type UpdateFormFileInputBox = FileInputBoxProps & {
  label: string;
};

export const UpdateFormFileInputBox: React.FC<UpdateFormFileInputBox> = ({
  name,
  label,
  ...rest
}) => {
  const [field, meta, helpers] = useField(name);
  const onChange = (files: FileList | null) => {
    helpers.setValue(files);
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
        <FileInputBox handleOnChange={onChange} name={name} {...rest} />
      </Box>
    </Column>
  );
};
