"use client";
import { Box, CRUD } from "@/components";

import { UpdateOverView } from "./components/UpdateOverView";

export default function Page() {
  return (
    <Box height={"100%"} bg={"greyLight"} overflow={"auto"} p={"xxxl"}>
      <CRUD updateComponent={UpdateOverView} modalWidth="40%" columnWidth={"20%"} />
    </Box>
  );
}
