import React from "react";
import { Box, CenterBox, Column, Row, Text } from "../styled";
import { FaqItem } from "../FaqItem";
import Lottie from "lottie-react";
import AboutAnimation from "@/animations/about.json";

interface FAQItemProps {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItemProps[];
}

export const Faq: React.FC<FAQProps> = ({ items }) => {
  return (
    <Column
      
      flexDirection={["column", "row"]}
      py={["xxl", "header"]}
    >
      <Box
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
        gap={"l"}
        px={"xl"}
      >
        <Column gap={["xl", "m"]}>
          <Text color={"secondary"} variant={"heading"} fontWeight={"bold"}>
          Frequently Asked Questions
          </Text>
          <Box
            height={"3px"}
            bg={"secondary"}
            width={"70%"}
            ml={"header"}
            borderRadius={"circle"}
          ></Box>
          <Text color={"secondary"} variant={"subHeading"}>
          Answers to Common Queries
          </Text>
        </Column>

        <CenterBox width={["100%", "450px"]}>
          <Text color={"secondary"} variant={"body"}>
          Find answers to the most frequently asked questions about our services.
        If you have any other queries, feel free to contact us.
          </Text>
        </CenterBox>
      </Box>
      <CenterBox
      py={["l","xl"]}
        
        
        flexDirection={["column-reverse", "row"]}
        gap={["none","header"]}
      >
        <Box
        
       
        >
          <Lottie
            animationData={AboutAnimation}
            loop={true}
            style={{ height: "420px", width: "500px", paddingLeft: "76px", paddingRight: "76px" }}
          />
        </Box>
        <Column width={["100%", "45%"]} py={["s","m"]} px={'xl'} >
          {items.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Column>
      </CenterBox>
    </Column>
  );
};
