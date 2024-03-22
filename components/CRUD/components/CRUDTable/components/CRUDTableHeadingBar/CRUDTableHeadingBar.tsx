import { Box, CenterBox, Row, Text } from "@/components/styled";
import React from "react";

import Image from "next/image";
import { DataItem } from "../../CRUDTable";

interface CrudTableHeadingProps {
  item: DataItem[];
  columnWidth: string;
}

export const CRUDTableHeadingBar: React.FC<CrudTableHeadingProps> = ({
  item,
  columnWidth,
}) => {
  const keys = Object.keys(item[0]);

  return (
    <>
      <Row
        py={"xl"}
        px={"xl"}
        bg={"primaryLight"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <CenterBox>
          <Image
            src={"/assets/icons/checkbox.png"}
            alt={""}
            width={28}
            height={28}
          />
        </CenterBox>

        <Row width={"100%"} justifyContent={"center"}>
          {keys.map((key, index) => (
            <Box key={index}  justifyContent={"center"} width={columnWidth}>
              <Text
  
                fontSize={15}
                py={"s"}
                px={"xl"}
                borderRadius={"circle"}
              >
                {key}
              </Text>
            </Box>
          ))}
        </Row>

        <CenterBox bg={"greyLight"} width={"25px"} height={"25px"}></CenterBox>
      </Row>
    </>
  );
};
