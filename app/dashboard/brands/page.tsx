"use client";
import { Box, CRUD } from "@/components";
import { useGetBrands } from "./hooks/useGetBrands";
import { formatDate } from "@/utils";
import { DeleteBrand } from "./components/DeleteBrand";
import {UpdateBrand} from "./components/UpdateBrand"


export default function Page() {
  const { data, refetch, loading } = useGetBrands();

  const headingKeysWidth = {
    name: {
      alias: "Brand Name",
      width: 20,
    },
    active: {
      alias: "Show On App",
      width: 20,
    },
    couponCode: {
      alias: "Featured",
      width: 20,
    },
    createdAt: {
      alias: "Added",
      width: 20,
    },
  };

  const formattedData = data?.brands.map((item: any) => {
    return {
      ...item,
      createdAt: formatDate(item.createdAt),
    };
  });

  return (
    <Box height={"100%"} bg={"greyLight"} overflow={"auto"} p={"xl"}>
      <CRUD
        updateComponent={UpdateBrand}
        modalWidth="60%"
        data={formattedData || []}
        headingKeysWidth={headingKeysWidth}
        refetch={refetch}
        loading={loading}
        deleteComponent={DeleteBrand}
      />
    </Box>
  );
}