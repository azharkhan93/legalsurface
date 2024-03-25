"use client";
import { ActionBar } from "./components/ActionBar";
import { RowData } from "@/constants";
import { CRUDTable } from "./components/CRUDTable";
import { Box } from "../styled";
import { useState } from "react";
import { Modal } from "./components/Modal";

export type RowData = {
  [key: string]: string | undefined;
};

export type CRUDProps = {
  updateComponent: React.FC;
  modalWidth: string;
  columnWidth: string;
  data: RowData[];
};

export const CRUD: React.FC<CRUDProps> = ({
  updateComponent,
  modalWidth,
  columnWidth,
  data,
}) => {
  const [isModalVisible, setModalVisibility] = useState(false);
  // const [modalInitialValues, setModalInitialValues] = useState({
  //   field1: "",
  //   field2: "",
  // });

  const handleAddNewClick = () => {
    setModalVisibility(true);
  };

  const handleEditRecordClick = () => {
    setModalVisibility(true);
  };

  const handleCloseModal = () => {
    setModalVisibility(false);
  };

  return (
    <Box alignItems={"center"}>
      {isModalVisible ? (
        <Modal
          onClose={handleCloseModal}
          content={updateComponent}
          width={modalWidth}
        />
      ) : null}
      <ActionBar
        updateComponent={updateComponent}
        width={modalWidth}
        onAddNewClick={handleAddNewClick}
        onCloseModal={handleCloseModal}
      />
      <CRUDTable
        data={data}
        columnWidth={columnWidth}
        openUpdateModal={handleEditRecordClick}
      />
    </Box>
  );
};
