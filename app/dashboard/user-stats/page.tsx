"use client";
import { Box, CRUD } from "@/components";
import { UpdateUserStats } from "./components/UpdateUserStats";

export default function Page() {
  return (
    <Box height={"100%"} bg={"greyLight"} overflow={"auto"} p={"xxxl"}>
      <CRUD updateComponent={UpdateUserStats} modalWidth="40%" columnWidth={"20%"} />
    </Box>
  );
}
