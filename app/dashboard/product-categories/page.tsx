"use client";
import { Box, CRUD } from "@/components";
import { UpdateProductCategories } from "./components";
import { RowDataProductCategories } from "@/constants";

export default function Page() {
  const dataKeys = Object.keys(RowDataProductCategories[0]);
  const dataKeysLength = dataKeys.length;
  const columnWidth = 100 / dataKeysLength;

  return (
    <Box height={"100%"} bg={"greyLight"} overflow={"auto"} p={"xxxl"}>
      <CRUD
        updateComponent={UpdateProductCategories}
        modalWidth="40%"
        columnWidth={`${columnWidth}%`}
        data={RowDataProductCategories}
      />
    </Box>
  );
}
