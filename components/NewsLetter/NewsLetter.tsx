import { Box, Button, CenterBox, Row, Text } from "@/components";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { borderBottom } from "styled-system";

export const NewsLetter = () => {
  return (
    <Box
      bg={"grey"}
      borderBottom={"1px solid #D4BDE8"}
      alignItems={"center"}
      flexDirection={["column-reverse", "row"]}
      justifyContent={"space-between"}
      py={["xxl", "xxxxl"]}
      mx={["none","xxxxl"]}
      borderRadius={"lg"}
    >
      <CenterBox gap={"xl"} width={"99%"} py={"m"}  >
        <Text variant={["subHeading","heading"]} color={"primary"}  textAlign={ "center"}>
        You dont have to fight alone.
        </Text>
        <Text variant={["body","subHeading"]} color={"primary"} px={["s","xl"]} textAlign={["start","center"]}>
        Book a consultation with one of our LegalSurface employment lawyers today.
        </Text>
        <Button
        variant="primary"
        py={"m"}
        px={"xl"}
       
        style={{background: "black", borderBottom: "3px solid White"}}
        >
          Book A Consulation

        </Button>
      </CenterBox>

      <CenterBox  width={"100%"}>
        <Image
          src="/images/bing.jpeg"
          alt="logo image"
          width={400}
          height={300}
          style={{borderRadius: "10px"}}
        />
      </CenterBox>
    </Box>
  );
};
