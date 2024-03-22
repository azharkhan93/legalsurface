"use client";
import { Box, CRUD } from "@/components";
import { UpdateGeneralSettings } from "./components/UpdateGeneralSettings";

export default function Page() {
  return (
    <Box height={"100%"} bg={"greyLight"} overflow={"auto"} p={"xxxl"}>
      <CRUD updateComponent={UpdateGeneralSettings} modalWidth="40%" columnWidth={"20%"} />
    </Box>
  );
}
