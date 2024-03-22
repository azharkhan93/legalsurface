"use client";
import { ActionBar } from "./components/ActionBar";
import { RowData } from "@/constants";
import { CRUDTable } from "./components/CRUDTable";
import { Box } from "../styled";

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
  return (
    <Box alignItems={"center"}>
      <ActionBar updateComponent={updateComponent} width={modalWidth} />
      <CRUDTable data={data} columnWidth={columnWidth} />
    </Box>
  );
};
