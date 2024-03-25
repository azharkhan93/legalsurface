import React, { useEffect, useState } from "react";
import { Column, HoverBox, Text } from "@/components/styled";
import Image from "next/image";
import { Modal } from "../../../Modal";

interface ModalProps {
  onClose: () => void;
}

interface CRUDTableModalProps extends ModalProps {
  updateComponent: React.FC;
  modalWidth: string;
  width: string;
  openUpdateModal: () => void;
}

export const CRUDTableRowModal: React.FC<CRUDTableModalProps> = ({
  onClose,
  updateComponent,
  width,
  openUpdateModal,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.getElementById("modal");
      if (modal && !modal.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <Column
      zIndex={20}
      id="modal"
      borderRadius={"s"}
      bg={"white"}
      alignItems={"center"}
      justifyContent={"center"}
      position="absolute"
      right={"0"}
      bottom={"-65px"}
      overflow={"hidden"}
    >
      <HoverBox
        justifyContent={"start"}
        flexDirection={"row"}
        gap={"xl"}
        width={"100%"}
        bg={"white"}
        py={"m"}
        px={"xl"}
        onClick={openUpdateModal}
      >
        <Image
          src={"/assets/icons/edit.png"}
          alt={"edit"}
          width={24}
          height={24}
        />
        <Text fontSize={15}>Edit</Text>
      </HoverBox>
      {isModalVisible && (
        <Modal
          onClose={handleCloseModal}
          content={updateComponent}
          width={width}
        />
      )}
      <HoverBox
        justifyContent={"start"}
        flexDirection={"row"}
        gap={"xl"}
        width={"100%"}
        bg={"white"}
        py={"m"}
        px={"xl"}
      >
        <Image
          src={"/assets/icons/delete.png"}
          alt={"delete"}
          width={24}
          height={24}
        />
        <Text fontSize={15}>Delete</Text>
      </HoverBox>
    </Column>
  );
};
