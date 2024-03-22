import { Box, CenterBox, Row, Text } from "@/components/styled";
import React from "react";

import Image from "next/image";
import { RowData } from "@/components/CRUD";
import { BASE_COLORS } from "@/theme";

interface CrudTableHeadingProps {
  item: RowData[];
  columnWidth: string;
}

export const CRUDTableHeadingBar: React.FC<CrudTableHeadingProps> = ({
  item,
  columnWidth,
}) => {
  const keys = Object.keys(item[0]);

  const capitalizedKeys = keys.map((str) => {
    return str.charAt(0).toLocaleUpperCase() + str.slice(1);
  });

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
        <CenterBox width={"30px"} height={"30px"}>
          <Image
            src={"/assets/icons/checkbox.png"}
            alt={""}
            width={30}
            height={30}
          />
        </CenterBox>
        <Row width={"100%"} justifyContent={"center"} px={"l"}>
          {capitalizedKeys.map((key, index) => (
            <Box justifyContent={"center"} width={columnWidth} key={index}>
              <Text
                variant="subHeading"
                fontSize={15}
                py={"m"}
                px={"xl"}
                borderRadius={"circle"}
              >
                {key}
              </Text>
            </Box>
          ))}
        </Row>
        <CenterBox
          bg={"greyLight"}
          width={"25px"}
          height={"25px"}
          style={{ opacity: 0 }}
        ></CenterBox>
      </Row>
    </>
  );
};
