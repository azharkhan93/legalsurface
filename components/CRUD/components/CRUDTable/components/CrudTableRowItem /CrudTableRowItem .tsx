import React, { useState } from "react";
import { Box, CenterBox, Row, Text, RowData } from "@/components";
import { CRUDTableModal } from "../CRUDTableModal";
import Image from "next/image";
import { RowHoverBox } from "../RowHoverBox";

type CrudTableRowItemProps = {
  rowItem: RowData;
  columnWidth: string;
};

export const CrudTableRowItem: React.FC<CrudTableRowItemProps> = ({
  rowItem,
  columnWidth,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const keys = Object.keys(rowItem);

  const handleIconClick = () => {
    setModalVisible(true);
  };

  if (!rowItem) {
    return null;
  }

  return (
    <>
      <RowHoverBox>
        <CenterBox width={"30px"} height={"30px"}>
          <Image
            src={"/assets/icons/checkbox.png"}
            alt={""}
            width={30}
            height={30}
          />
        </CenterBox>
        <Row width={"100%"} justifyContent={"center"} px={"l"}>
          {keys.map((key, index) => (
            <Box key={index} width={columnWidth} justifyContent={"center"}>
              <Text fontSize={15} py={"m"} px={"xl"} variant="body">
                {rowItem[key as keyof RowData] || ""}
              </Text>
            </Box>
          ))}
        </Row>
        <CenterBox
          borderRadius={"circle"}
          width={"30px"}
          height={"30px"}
          bg={"white"}
          onClick={handleIconClick}
        >
          <Image
            src={"/assets/icons/dots.png"}
            alt={""}
            width={25}
            height={25}
          />
        </CenterBox>
      </RowHoverBox>
      {modalVisible && (
        <CRUDTableModal onClose={() => setModalVisible(false)} />
      )}
    </>
  );
};
