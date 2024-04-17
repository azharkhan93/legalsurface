import { Box, CenterBox, Row, Text } from "@/components/styled";
import Image from "next/image";
import { BASE_COLORS } from "@/theme";

type CrudTableHeadingProps = {
  headings: (string | undefined)[];
  widths: number[];
};

export const CRUDTableHeadingBar: React.FC<CrudTableHeadingProps> = ({
  headings,
  widths,
}) => {
  return (
    <>
      <Row
        py={"xl"}
        px={"xl"}
        bg={"white"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        borderBottom={BASE_COLORS.grey}
      >
        <CenterBox width={"30px"} height={"30px"}>
          <Image
            src={"/assets/icons/checkbox.png"}
            alt={""}
            width={30}
            height={30}
          />
        </CenterBox>
        <Row width={"100%"} justifyContent={"start"} px={"l"}>
          {headings.map((key, index) => (
            <Box
              justifyContent={"center"}
              width={`${widths[index]}%`}
              key={index}
            >
              <Text
                color="white"
                width={"fit-content"}
                variant="body"
                fontSize={15}
                py={"s"}
                px={"xl"}
                borderRadius={"circle"}
                bg="primary"
              >
                {key}
              </Text>
            </Box>
          ))}
        </Row>
        <CenterBox
          bg={"greyLight"}
          width={"25px"}
          height={"25px"}
          style={{ opacity: 0 }}
        ></CenterBox>
      </Row>
    </>
  );
};
