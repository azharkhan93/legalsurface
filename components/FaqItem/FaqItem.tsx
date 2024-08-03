import React, { useState } from "react";
import { Box, Column, Row, Text } from "../styled";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FaqItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Column width={"100%"} gap={"m"} py={"l"} borderBottom={"1px solid #ddd"}>
      <Row justifyContent={"space-between"} alignItems={"center"}>
        <Text variant={"body"} fontWeight={"bold"} color={"secondary"}>
          {question}
        </Text>
        <Box onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaMinus fill="#2A3277" size={20} />
          ) : (
            <FaPlus fill="#2A3277" size={20} />
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
