"use client";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { Box, CenterBox, Column, Row, Text } from "../styled";
import { FaqItem } from "../FaqItem";
import FaqAnimation from "@/animations/faq.json";

interface FAQItemProps {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItemProps[];
}

export const Faq: React.FC<FAQProps> = ({ items }) => {
  return (
    <Column flexDirection={["column", "row"]} py={["xxl", "header"]}>
      <Box
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
        gap={"l"}
        px={"xl"}
      >
        <Column gap={["xl", "m"]}>
          <Text color={"secondary"} variant={"heading"} fontWeight={"bold"}>
            Commonly Asked Questions
          </Text>
          <Box
            height={"3px"}
            bg={"secondary"}
            width={"70%"}
            ml={"header"}
            borderRadius={"circle"}
          ></Box>
          <Text color={"secondary"} variant={"subHeading"}>
            Responses to Popular Questions
          </Text>
        </Column>

        <CenterBox width={["100%", "450px"]}>
          <Text color={"secondary"} variant={"body"}>
            {`Discover responses to our most common service inquiries. For any
            additional questions, don't hesitate to reach out to us.`}
          </Text>
        </CenterBox>
      </Box>
      <CenterBox
        py={["l", "xl"]}
        flexDirection={["column-reverse", "row"]}
        gap={["none", "header"]}
      >
        <Box>
          <Lottie
            animationData={FaqAnimation}
            loop={true}
            style={{
              height: "420px",
              width: "500px",
              paddingLeft: "76px",
              paddingRight: "76px",
            }}
          />
        </Box>
        <Column width={["100%", "45%"]} py={["s", "m"]} px={"xl"}>
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
