"use client";
import { Box, CRUD } from "@/components";
// import { UpdateProductCategories } from "./components";
import { BlankPage } from "./components/BlankPage/BlankPage";
// import { useGetProductCategories } from "./hooks/useGetProductCategories";
import { formatDate } from "@/utils";
import { formatBoolean } from "@/utils/formatBoolean";
import { useUsers } from "./hooks/useUsers";
import { shortenEmail } from "@/utils/shortenEmail";

export default function Page() {
  const { data, refetch, loading } = useUsers();

  const headingKeysWidth = {
    firstName: {
      alias: "First Name",
      width: 20,
    },
    lastName: {
      alias: "Last Name",
      width: 20,
    },
    email: {
      alias: "Email",
      width: 20,
    },
    phoneNumberVerified: {
      alias: "Phone no. verified ",
      width: 20,
    },

    createdAt: {
      alias: "Member Since",
      width: 20,
    },
  };

  const formattedData = data?.users.map((item: any) => {
    return {
      ...item,
      email: shortenEmail(item.email),
      phoneNumberVerified: formatBoolean(item.phoneNumberVerified),
      createdAt: formatDate(item.createdAt),
    };
  });

  console.log(formattedData);

  return (
    <Box height={"100%"} bg={"greyLight"} overflow={"auto"} p={"xxxl"}>
      <CRUD
        updateComponent={BlankPage}
        deleteComponent={BlankPage}
        modalWidth={"40%"}
        data={formattedData || []}
        refetch={refetch}
        loading={loading}
        headingKeysWidth={headingKeysWidth}
        disableActionButton={false}
      />
    </Box>
  );
}
