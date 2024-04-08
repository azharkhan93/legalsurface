"use client";
import { Box, CRUD } from "@/components";
import { useGetDeals } from "./hooks/useGetDeals";
import { formatDate } from "@/utils";
import { DeleteEduInstitute } from "../edu-institutes/components/DeleteEduInstitute";
import { UpdateEduInstitute } from "../edu-institutes/components/UpdateEduInstitute";
import { UpdateDeal } from "./components";

export default function Page() {
  const { data, refetch, loading } = useGetDeals();

  const headingKeysWidth = {
    name: {
      alias: "Name",
      width: 20,
    },
    active: {
      alias: "DealActive",
      width: 20,
    },
    couponCode: {
      alias: "CouponCode",
      width: 20,
    },
    createdAt: {
      alias: "CreatedAt",
      width: 20,
    },
  };

  const formattedData = data?.deals.map((item: any) => {
    return {
      ...item,
      createdAt: formatDate(item.createdAt),
    };
  });

  return (
    <Box height={"100%"} bg={"greyLight"} overflow={"auto"} p={"xl"}>
      <CRUD
        updateComponent={UpdateDeal}
        modalWidth="60%"
        data={formattedData || []}
        headingKeysWidth={headingKeysWidth}
        refetch={refetch}
        loading={loading}
        deleteComponent={DeleteEduInstitute}
      />
    </Box>
  );
}
