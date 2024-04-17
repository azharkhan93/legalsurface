"use client";
import { ActionBar } from "./components/ActionBar";
import { RowData } from "@/constants";
import { CRUDTable } from "./components/CRUDTable";
import { Box } from "../styled";
import { useState } from "react";
import { GenericUpdateComponentProps, Modal } from "./components/Modal";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export type RowData = {
  [key: string]: string | undefined;
};

export type HeadingKeysWidthType = {
  [key: string]: {
    alias: string | undefined;
    width: number;
  };
};

export type CRUDProps = {
  updateComponent: React.FC<GenericUpdateComponentProps>;
  deleteComponent: React.FC<GenericUpdateComponentProps>;
  modalWidth: string;
  data: RowData[];
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
  loading: boolean;
  headingKeysWidth: HeadingKeysWidthType;
};

export const CRUD: React.FC<CRUDProps> = ({
  updateComponent,
  deleteComponent,
  modalWidth,
  data,
  refetch,
  loading,
  headingKeysWidth,
}) => {
  const [isAddUpdateModalVisible, setAddUpdateModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [updateFormValues, setUpdateFormValues] = useState({});

  const keys = Object.keys(headingKeysWidth);
  const headings = keys.map((key) => headingKeysWidth[key].alias);
  console.log(headings);
  const widths = Object.values(headingKeysWidth).map((item) => item.width);

  const handleAddNewClick = () => {
    setAddUpdateModalVisible(true);
    setUpdateFormValues({});
  };

  const handleUpdateFormValues = (data: {}) => {
    setUpdateFormValues(data);
  };

  const handleEditRecordClick = () => {
    setAddUpdateModalVisible(true);
  };

  const handleDeleteRecordClick = () => {
    setDeleteModalVisible(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalVisible(false);
  };

  const handleCloseAddUpdateModal = () => {
    setAddUpdateModalVisible(false);
  };

  const handleOnActionComplete = () => {
    handleCloseAddUpdateModal();
    refetch();
  };

  const handleOnDeleteComplete = () => {
    handleCloseDeleteModal();
    refetch();
  };

  return (
    <Box alignItems={"center"}>
      {isAddUpdateModalVisible ? (
        <Modal
          onActionComplete={handleOnActionComplete}
          onClose={handleCloseAddUpdateModal}
          content={updateComponent}
          width={modalWidth}
          updateFormValues={updateFormValues}
        />
      ) : null}
      {isDeleteModalVisible ? (
        <Modal
          onActionComplete={handleOnDeleteComplete}
          onClose={handleCloseDeleteModal}
          content={deleteComponent}
          width={modalWidth}
          updateFormValues={updateFormValues}
        />
      ) : null}
      <ActionBar width={modalWidth} onAddNewClick={handleAddNewClick} />
      <CRUDTable
        keys={keys}
        headings={headings}
        data={data}
        loading={loading}
        openUpdateModal={handleEditRecordClick}
        openDeleteModal={handleDeleteRecordClick}
        handleUpdateFormValues={handleUpdateFormValues}
        widths={widths}
      />
    </Box>
  );
};
