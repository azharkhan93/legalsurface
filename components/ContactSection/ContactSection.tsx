"use client";
import { Box, Row, Text, Column, CenterBox} from "@/components";

import { Test } from "../Test";

export const ContactSection = () => {
  return (
    <Box
    py={"xxxxl"}
    flexDirection={["column","row"]}
      // flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
      bg={"primary"}
      style={{
        backgroundImage: `url('/images/banner.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}

    >
      <Column
        
        width={["100%","50%"]}
        gap={20}
      >
        <Box
        py={["xxxl", "header"]}
          flexDirection={["column", "row"]}
          justifyContent={"space-between"}
          gap={"l"}
          px={"xl"}
          width={["100%","50%"]}
        >
          <Column gap={["xl", "m"]}>
            <Text color={"white"} variant={"heading"}>
              Contact Us
            </Text>
            <Box
              height={"3px"}
              bg={"secondary"}
              width={"70%"}
              ml={"header"}
              borderRadius={"circle"}
            ></Box>
            <Text color={"white"} variant={"subHeading"}>
              React Out To Us..
            </Text>

          <CenterBox width={["100%", "450px"]}>
            <Text color={"white"} variant={"body"}>
              Our operational approach is designed to pamper you from head to
              toe. We understand the importance of self-care and strive to
              provide you with the ultimate beauty experience
            </Text>
          </CenterBox>
          </Column>

        </Box>
      </Column>
    
      <CenterBox
        py={["xxxl","header"]}
        
        width={["100%","50%",]}
        justifyContent={"space-between"}
        flexDirection={["column-reverse","row"]}
        gap={"circle"}
       
      >
       
        <Test
          onActionComplete={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </CenterBox>
    </Box>
  );
};
