"use client";
import { Box, CRUD } from "@/components";
import { UpdateEduInstitute } from "./components/UpdateEduInstitute";
import { RowDataEduInstitute } from "@/constants";

export default function Page() {
  const dataKeys = Object.keys(RowDataEduInstitute[0]);
  const dataKeysLength = dataKeys.length;
  const columnWidth = 100 / dataKeysLength;

  return (
    <Box height={"100%"} bg={"greyLight"} overflow={"auto"} p={"xxxl"}>
      <CRUD
        updateComponent={UpdateEduInstitute}
        modalWidth="40%"
        columnWidth={`${columnWidth}%`}
        data={RowDataEduInstitute}
      />
    </Box>
  );
}
