"use client";
import { Box, CRUD } from "@/components";
import { UpdateEduInstitute } from "./components/UpdateEduInstitute";
import { useGetEduInstitute } from "./hooks/useGetEduInstitutes";
import { DeleteEduInstitute } from "./components/DeleteEduInstitute";
import { formatDate } from "@/utils";

export default function Page() {
  const { data, refetch, loading } = useGetEduInstitute();

  const headingKeysWidth = {
    name: {
      alias: "Name",
      width: 20,
    },
    domain: {
      alias: "DomainName",
      width: 20,
    },
    address: {
      alias: "Address",
      width: 20,
    },
    createdAt: {
      alias: "CreatedAt",
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
