import React, { useState } from "react";
import { Box, CenterBox, Row, Text } from "@/components/styled";
import { RowData } from "@/components/CRUD";
import Image from "next/image";
import { RowHoverBox } from "../RowHoverBox";
import { CRUDTableRowModal } from "../CRUDTableRowModal";
import { Test } from "@/components/TestComponent/Test";

interface CrudTableRowItemProps {
  rowItem: RowData;
  columnWidth: string;
  openUpdateModal: () => void;
}

export const CrudTableRowItem: React.FC<CrudTableRowItemProps> = ({
  rowItem,
  columnWidth,
  openUpdateModal,
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
        <CenterBox>
          <Box>
            <Image
              src={"/assets/icons/checkbox.png"}
              alt={""}
              width={28}
              height={28}
            />
          </Box>
        </CenterBox>

        <Row width={"100%"} justifyContent={"center"}>
          {keys.map((key, index) => (
            <Box key={index} width={columnWidth} justifyContent={"center"}>
              <Text fontSize={15} py={"m"} px={"xl"}>
                {rowItem[key as keyof RowData] || ""}
              </Text>
            </Box>
          ))}
        </Row>

        <Box
          borderRadius={"circle"}
          width={"25px"}
          height={"25px"}
          bg={"white"}
          onClick={handleIconClick}
        >
          <Image
            src={"/assets/icons/dots.png"}
            alt={""}
            width={20}
            height={20}
          />
        </Box>
      </RowHoverBox>
      {modalVisible && (
        <CRUDTableRowModal
          openUpdateModal={openUpdateModal}
          updateComponent={Test}
          modalWidth={""}
          width={""}
          onClose={() => setModalVisible(false)}
        />
      )}
    </>
  );
};
