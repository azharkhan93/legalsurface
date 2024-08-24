"use client";
import React, { useState } from "react";
import { Box, Column, Row, Text } from "../styled";
import { FaPlus, FaMinus } from "react-icons/fa";

type FAQItemProps = {
  question: string;
  answer: string;
};

export const FaqItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Column width={"100%"} gap={"m"} py={"l"} borderBottom={"1px solid black"}>
      <Row
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={["row"]}
      >
        <Text variant={"body"} fontWeight={"bold"} color={"secondary"}>
          {question}
        </Text>
        <Box onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
          {isOpen ? (
            <FaMinus fill="black" size={20} />
          ) : (
            <FaPlus fill="black" size={20} />
          )}
        </Box>
      </Row>
      {isOpen ? (
        <Box mt={"m"}>
          <Text variant={"body"} color={"secondary"}>
            {answer}
          </Text>
        </Box>
      ) : null}
    </Column>
  );
};
