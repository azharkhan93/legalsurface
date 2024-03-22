"use client";
import { Box, CRUD } from "@/components";
import { UpdateEduInstitute } from "./components/UpdateEduInstitute";

export default function Page() {
  return (
    <Box height={"100%"} bg={"greyLight"} overflow={"auto"} p={"xxxl"}>
      <CRUD updateComponent={UpdateEduInstitute} modalWidth="30%" columnWidth={"20%"}  />
    </Box>
  );
}
