"use client";
import { Box, CRUD, Text } from "@/components";
import { Test } from "@/components/TestComponent/Test";
import { RowData } from "@/constants";

export default function Page() {
  return (
    <Box height={"100%"} bg={"greyLight"} overflow={"auto"} p={"xxxl"}>
      <CRUD
        data={RowData}
        updateComponent={Test}
        modalWidth="40%"
        columnWidth={"20%"}
      />
    </Box>
  );
}
