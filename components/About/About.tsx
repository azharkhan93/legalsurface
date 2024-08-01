import {
  AboutCards,
  Box,
  Button,
  CenterBox,
  Column,
  Row,
  Text,
} from "@/components";
import Image from "next/image";
import { columnCardData } from "@/constants";

export const About: React.FC = () => {
  return (
    <>
      <Column
        bg={"primary"}
        flexDirection={["column", "row"]}
        // border={"2px solid green"}
        py={["xxl", "header"]}
      >
        <Box
          flexDirection={["column", "row"]}
          justifyContent={"space-between"}
          gap={"l"}
          px={"xl"}
        >
          <Column gap={["xl", "m"]}>
            <Text variant={"heading"} fontWeight={"bold"} color={"secondary"}>
              About Us
            </Text>
            <Box
              height={"3px"}
              bg={"secondary"}
              width={"70%"}
              ml={"header"}
              borderRadius={"circle"}
            ></Box>
            <Text
              variant={"subHeading"}
              fontWeight={"bold"}
              color={"secondary"}
            >
              Why Choose Us
            </Text>
          </Column>

          <CenterBox width={["100%", "450px"]}>
            <Text color={"secondary"} variant={"body"}>
              We are here to provide you with best makeup services at home. Dont
              hesitate to reach out, and we will get back to you promptly.
            </Text>
          </CenterBox>
        </Box>
        <Box
          flexDirection={["column-reverse", "row"]}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          px={["none", "header"]}
        >
          <CenterBox borderRadius={"m"}>
            <Image
              src={"/images/home3.jpg"}
              alt="image error"
              width={400}
              height={500}
              style={{ borderRadius: "20px" }}
            ></Image>
          </CenterBox>
          <CenterBox
            flexWrap={"wrap"}
            flexDirection={"row"}
            gap={"xl"}
            py={["m", "header"]}
          >
            {columnCardData.map((card) => (
              <AboutCards
                key={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </CenterBox>
        </Box>
      </Column>
    </>
  );
};
