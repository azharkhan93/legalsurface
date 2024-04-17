"use client";
import { Box, CRUD } from "@/components";
import { UpdateEduInstitute } from "./components/UpdateEduInstitute";
import { useGetEduInstitute } from "./hooks/useGetEduInstitutes";
import { DeleteEduInstitute } from "./components/DeleteEduInstitute";
import { formatDate } from "@/utils";
import { useState } from "react";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, refetch, loading } = useGetEduInstitute(searchTerm);

  const headingKeysWidth = {
    name: {
      alias: "Name",
      width: 20,
    },
    domain: {
      alias: "Domain Name",
      width: 20,
    },
    address: {
      alias: "Address",
      width: 20,
    },
    createdAt: {
      alias: "Created At",
      width: 20,
    },
  };

  const formattedData = data?.eduInstitutes.map((item: any) => {
    return {
      ...item,
      createdAt: formatDate(item.createdAt),
    };
  });

  return (
    <Box height={"100%"} bg={"greyLight"} overflow={"auto"} p={"xl"}>
      <CRUD
        searchTerm={setSearchTerm}
        updateComponent={UpdateEduInstitute}
        modalWidth="40%"
        data={formattedData || []}
        headingKeysWidth={headingKeysWidth}
        refetch={refetch}
        loading={loading}
        deleteComponent={DeleteEduInstitute}
      />
    </Box>
  );
}
