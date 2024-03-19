import React, { useEffect } from "react";
import { Column,  Text } from "@/components/styled";

import {CustomBox} from "../CustomBox"
import Image from "next/image";


interface ModalProps {
  onClose: () => void;
}

export const CRUDTableModal: React.FC<ModalProps> = ({ onClose }) => {
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
    // pt= {"xxl"}
      right={"0"}
      mr = {"xl"}
      overflow = {"hidden"}
      style ={{marginTop: '140px'}}
    >
      
  
      <CustomBox
      >
        <Image src={"/assets/icons/edit.png"} alt={"delete"} width= {24} height = {24} />
        <Text fontSize={15}>Edit</Text>
      </CustomBox> 
      <CustomBox
      
      >
      <Image src={"/assets/icons/delete.png"} alt={"delete"} width= {24} height = {24} />
        <Text fontSize={15}>Delete</Text>
      </CustomBox> 
    </Column>
  );
};

  
  