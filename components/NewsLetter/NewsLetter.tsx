import { Box, CenterBox, Row, Text } from "@/components";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export const NewsLetter = () => {
  return (
    <Box
      borderBottom={"1px solid #D4BDE8"}
      width={"100%"}
      p={"xl"}
      alignItems={"center"}
      flexDirection={["column-reverse", "row"]}
      justifyContent={"space-between"}
      // border={"2px solid green"}
      py={["xxl", "header"]}
    >
      <Row
        gap={20}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
       
        height={"10vh"}
      >
        <FaFacebook size={30} fill="#D4BDE8" />

        <FaInstagram size={30} fill="#D4BDE8" />
        <FaYoutube size={30} fill="#D4BDE8" />
        <FaLinkedin size={30} fill="#D4BDE8" />
      </Row>

      <CenterBox gap={10} width={"100%"}>
        <Image
          src="/images/logo.png"
          alt="logo image"
          width={130}
          height={130}
        />
      </CenterBox>
      <CenterBox gap={10} width={"100%"}>
        <Text variant={"subHeading"} color={"primary"}>
          Opening Hours:
        </Text>
        <Text variant={"subHeading"} color={"primary"}>
          9am - 10pm
        </Text>
      </CenterBox>
    </Box>
  );
};
