"use client";
import { Box, CRUD } from "@/components";
import { UpdateProductCategories } from "./components";
import { useGetProductCategories } from "./hooks/useGetProductCategories";
import { formatDate } from "@/utils";
import { formatBoolean } from "@/utils/formatBoolean";

export default function Page() {
  const { data, refetch, loading } = useGetProductCategories();

  const headingKeysWidth = {
    name: {
      alias: "Category Name",
      width: 20,
    },
    preferredGender: {
      alias: "Gender",
      width: 20,
    },
    active: {
      alias: "Visibility",
      width: 20,
    },
    shippable: {
      alias: "Shippable",
      width: 20,
    },
    createdAt: {
      alias: "Created At",
      width: 20,
    },
  };

  const formattedData = data?.productCategories.map((item: any) => {
    return {
      ...item,
      active: formatBoolean(item.active),
      shippable: formatBoolean(item.active),
      createdAt: formatDate(item.createdAt),
    };
  });

  return (
    <Box height={"100%"} bg={"greyLight"} overflow={"auto"} p={"xxxl"}>
      <CRUD
        updateComponent={UpdateProductCategories}
        deleteComponent={UpdateProductCategories}
        modalWidth={"40%"}
        data={formattedData || []}
        refetch={refetch}
        loading={loading}
        headingKeysWidth={headingKeysWidth}
        disableAddNewButton={false}
      />
    </Box>
  );
}
