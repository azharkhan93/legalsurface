"use client";
import { Box, CRUD } from "@/components";

import { BlankPage } from "./components/BlankPage/BlankPage";

import { formatDate } from "@/utils";
import { formatBoolean } from "@/utils/formatBoolean";

import { shortenEmail } from "@/utils/shortenEmail";
import { useEffect, useState } from "react";
import { useGetProducts } from "./hooks/useGetProducts";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [skipPagination, setSkipPagination] = useState(0);
  const { data, refetch, loading } = useGetProducts(searchTerm, skipPagination);
  useEffect(() => {
    setSkipPagination(0);
  }, [searchTerm]);

  const headingKeysWidth = {
    title: {
      alias: "Title",
      width: 20,
    },
    type: {
      alias: "Type",
      width: 20,
    },
    price: {
      alias: "price",
      width: 20,
    },
    createdAt: {
      alias: "Member Since",
      width: 20,
    },
  };

  const formattedData = data?.products.map((item: any) => {
    return {
      ...item,
      createdAt: formatDate(item.createdAt),
    };
  });

  return (
    <Box height={"100%"} bg={"greyLight"} overflow={"auto"} p={"xxxl"}>
      <CRUD
        nextPage={setSkipPagination}
        searchTerm={setSearchTerm}
        updateComponent={BlankPage}
        deleteComponent={BlankPage}
        modalWidth={"40%"}
        data={formattedData || []}
        refetch={refetch}
        loading={loading}
        headingKeysWidth={headingKeysWidth}
        disableAddNewButton
      />
    </Box>
  );
}
