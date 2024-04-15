"use client"
import { Box, CenterBox, Column, FileInputBox, FileInputBoxProps, Row, Text } from "@/components";
import Image from "next/image";
import { useField } from "formik";

type UpdateFormFileInputBoxProps =  Omit <FileInputBoxProps, "handleOnChange">  & {
  label: string;
};

export const UpdateFormFileInputBox: React.FC<UpdateFormFileInputBoxProps> = ({
  name,
  label,

}) => {
  
  const [field, meta, helpers] = useField(name);
  
  const onChange = (url: string) => { 
    console.log("Uploaded URL:", url);

    helpers.setValue(url);
  };

  return (
    <Column gap={"s"} width={"100%"} justifyContent={"center"} alignItems={"center"}>
      <Box pl={"l"} width={"100%"}>
        <Text variant="body" font="body">
          {label}
        </Text>
      </Box>
      <Row width={"100%"}>
        <CenterBox 
        width = {"40%"}
        >
        <FileInputBox handleOnChange={onChange} name={name} />
        </CenterBox>
        <CenterBox
        width = {"10%"} 

        >
        {field.value && <Image src={field.value} alt={"productategoryImage"} width={50} height={50} />}
        </CenterBox>
      </Row>
    </Column>
  );
};









