import { CenterBox, Column, Row, Text } from "@/components/styled";
import Image from "next/image";

export const PaginationBar: React.FC = () => {
  const handleNextPage = () => {
    console.log(" next page ");
  };

  const handlePreviousPage = () => {
    console.log(" previous page");
  };
  return (
    <Row
      bg={"greyLight"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={"xl"}
      py={"m"}
    >
      <Column>
        <Text>Product Categories</Text>
        <Text>
          db:<span style={{ color: "#5809A3" }}>ProductCategory</span>
        </Text>
      </Column>
      <CenterBox flexDirection={"row"} gap={"m"}>
        <Image
          src={"/assets/svgs/chevronleft.png"}
          alt={""}
          height={20}
          width={20}
          onClick={handlePreviousPage}
          style={{ cursor: "pointer" }}
        />
        <Image
          src={"/assets/svgs/chevronright.png"}
          alt={""}
          height={20}
          width={20}
          onClick={handleNextPage}
          style={{ cursor: "pointer" }}
        />
      </CenterBox>
    </Row>
  );
};
