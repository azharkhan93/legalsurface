import { CenterBox, Column, Row, Text } from "@/components/styled";
import { BASE_COLORS } from "@/theme";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { RowData } from "../../CRUD";

type PaginationPropTypes = {
  nextPage?: Dispatch<SetStateAction<number>>;
  data: RowData[];
};

export const PaginationBar: React.FC<PaginationPropTypes> = ({
  nextPage,
  data,
}) => {
  const dataLength = data.length;

  const handleNextPage = () => {
    nextPage &&
      nextPage((prevState) => (data.length != 0 ? prevState + 10 : prevState));
  };

  const handlePreviousPage = () => {
    nextPage &&
      nextPage((prevState) => (prevState > 0 ? prevState - 10 : prevState));
  };
  return (
    <Row
      bg="white"
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderBottom={`2px solid ${BASE_COLORS.greyLight}`}
      px={"xl"}
      py={"m"}
    >
      <Column>
        <Text>Product Categories</Text>
        <Text>
          db:<Text color="primary">ProductCategory</Text>
        </Text>
      </Column>
      <Row gap={"m"}>
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
      </Row>
    </Row>
  );
};
