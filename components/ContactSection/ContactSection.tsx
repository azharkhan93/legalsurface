"use client";
import { Box, Row, Text, Column, CenterBox, ContactCards } from "@/components";
import { contactCardData } from "@/constants";
import Lottie from "lottie-react";
import ContactAnimation from "../../animations/contact.json";
import { Test } from "../Test";

export const ContactSection = () => {
  return (
    <Box
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      bg={"primary"}
      // py={["xxl", "header"]}
    >
      <Column
        // border={"2px solid white"}
        flexDirection={["column", "column"]}
        width={"100%"}
        gap={20}
        // py={"header"}
      >
        <Box
          flexDirection={["column", "row"]}
          justifyContent={"space-between"}
          gap={"l"}
          px={"xl"}
          width={"100%"}
        >
          <Column gap={["xl", "m"]}>
            <Text color={"secondary"} variant={"heading"}>
              Contact Us
            </Text>
            <Box
              height={"3px"}
              bg={"secondary"}
              width={"70%"}
              ml={"header"}
              borderRadius={"circle"}
            ></Box>
            <Text color={"secondary"} variant={"subHeading"}>
              React Out To Us..
            </Text>
          </Column>

          <CenterBox width={["100%", "450px"]}>
            <Text color={"secondary"} variant={"body"}>
              Our operational approach is designed to pamper you from head to
              toe. We understand the importance of self-care and strive to
              provide you with the ultimate beauty experience
            </Text>
          </CenterBox>
        </Box>
      </Column>
      <Box
        width={"100%"}
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
        gap={"header"}
        py={"xl"}
        px={"header"}
      >
        {contactCardData.map((card, index) => (
          <ContactCards
            key={index}
            icon={card.icon}
            text1={card.text1}
            text2={card.text2}
          />
        ))}
      </Box>
      <CenterBox
        py={"header"}
        width={"85%"}
        justifyContent={"space-between"}
        flexDirection={"row"}
        gap={"circle"}
        // px={"header"}
      >
        <Box>
          <Lottie
            animationData={ContactAnimation}
            loop={true}
            style={{
              height: "500px",
              width: "500px",
            }}
          />
        </Box>
        <Test
          onActionComplete={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </CenterBox>
    </Box>
  );
};
