import React, { useState } from "react";
import { Box, CenterBox, HoverBox, Row, Text } from "@/components/styled";
import { RowData } from "@/components/CRUD";
import Image from "next/image";
import { RowItemActions } from "./components/RowItemActions";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CrudTableRowItemProps = {
  rowItem: RowData;
  openUpdateModal: () => void;
  openDeleteModal: () => void;
  handleUpdateFormValues: (data: {}) => void;
  headings: string[];
  widths: number[];
};

export const CrudTableRowItem: React.FC<CrudTableRowItemProps> = ({
  rowItem,
  openUpdateModal,
  openDeleteModal,
  handleUpdateFormValues,
  headings,
  widths,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const keys = headings;
  const handleIconClick = () => {
    setModalVisible(true);
    handleUpdateFormValues(rowItem);
  };
  if (!rowItem) {
    return null;
  }
  return (
    <HoverBox
      overflowY={"visible"}
      position={"relative"}
      flexDirection={"row"}
      py={"xl"}
      px={"xl"}
      bg={"white"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderBottom={"1px solid rgb(222, 226, 230)"}
    >
      <CenterBox width={"30px"} height={"30px"}>
        <Box>
          <Image
            src={"/assets/icons/checkbox.png"}
            alt={""}
            width={30}
            height={30}
          />
        </Box>
      </CenterBox>
      <Row width={"100%"} justifyContent={"start"} px={"l"}>
        {keys.map((key, index) => (
          <Box
            key={index}
            width={`${widths[index]}%`}
            justifyContent={"center"}
          >
            <Text variant="body" py={"m"} px={"xl"}>
              {rowItem[key] || ""}
              {/* {key === "createdAt" ? "N/A" : rowItem[key]} */}
            </Text>
          </Box>
        ))}
      </Row>
      <CenterBox
        borderRadius={"circle"}
        width={"25px"}
        height={"25px"}
        bg={"white"}
        onClick={handleIconClick}
      >
        <FontAwesomeIcon icon={faEllipsis} size="1x" />
      </CenterBox>
      {modalVisible && (
        <RowItemActions
          openUpdateModal={openUpdateModal}
          openDeleteModal={openDeleteModal}
          onClose={() => setModalVisible(false)}
        />
      )}
    </HoverBox>
  );
};
