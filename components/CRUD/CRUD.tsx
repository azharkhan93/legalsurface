 "use client";
import { ActionBar } from "./components/ActionBar";
import { data } from "@/constants";
import { CRUDTable } from "./components/CRUDTable";
import { Box } from "../styled";
import { useState } from "react";
import { Modal } from "./components/Modal";



interface CRUDProps {
  updateComponent: React.FC;
  modalWidth: string;
  columnWidth: string;
   
}

export const CRUD: React.FC<CRUDProps> = ({
  updateComponent,
  modalWidth,
  columnWidth,
  
}) => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const handleAddNewClick = () => {
    setModalVisibility(true);
  };
  const handleCloseModal = () => {
    setModalVisibility(false);
  };
  return (
    <Box alignItems={"center"}>
      <ActionBar
        updateComponent={updateComponent}
        width={modalWidth}
        onAddNewClick={handleAddNewClick} 
        onCloseModal={handleCloseModal}
             />

             {isModalVisible && (
        <Modal onClose={handleCloseModal} content={updateComponent} width={modalWidth} />
      )}
    
      
      <CRUDTable data={data} columnWidth={columnWidth} openUpdateModal={handleAddNewClick} />
      
    </Box>
  );
};



