"use client";
import { Box, CRUD } from "@/components";
import { Test } from "@/components/TestComponent/Test";

export default function Page() {
  return (
    <Box height={"100%"} bg={"greyLight"} overflow={"auto"} p={"xxxl"}>
      <CRUD updateComponent={Test} modalWidth="40%" columnWidth={"20%"} />
    </Box>
  );
}
