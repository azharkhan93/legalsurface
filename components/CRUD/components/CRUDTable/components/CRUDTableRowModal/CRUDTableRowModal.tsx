import React, { useEffect, useState } from "react";
import { Column, Text } from "@/components/styled";
import { CustomBox } from "../CustomBox";
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

export const CRUDTableRowModal: React.FC<CRUDTableModalProps> = ({ onClose, updateComponent, width, openUpdateModal}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleCloseModal= () => {
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
      id="modal"
      borderRadius={"s"}
      bg={"white"}
      height={"15vh"}
      width={"8vw"}
      alignItems={"center"}
      justifyContent={"center"}
      position="fixed"
      right={"0"}
      mr={"xl"}
      overflow={"hidden"}
      style={{ marginTop: "140px" }}
    >
      
        <CustomBox >
          <Image src={"/assets/icons/edit.png"} alt={"edit"} width={24} height={24} />
          <Text fontSize={15} onClick={openUpdateModal}>Edit</Text>
        </CustomBox>
        {isModalVisible && (
        <Modal onClose={handleCloseModal} content={updateComponent} width={width} />
      )}
     
        

      <CustomBox>
        <Image src={"/assets/icons/delete.png"} alt={"delete"} width={24} height={24} />
        <Text fontSize={15}>Delete</Text>

      </CustomBox>
      
    </Column>
  );
};



  
  