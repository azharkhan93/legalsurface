"use client";
import { ActionBar } from "./components/ActionBar";
import { Test } from "../TestComponent/Test";
import { data } from "@/constants";
import { CRUDTable } from "./components/CRUDTable";
import { Box } from "../styled";

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
  return (
    <Box alignItems={"center"}>
      <ActionBar updateComponent={updateComponent} width={modalWidth} />
      <CRUDTable data={data} columnWidth={columnWidth} />
    </Box>
  );
};
