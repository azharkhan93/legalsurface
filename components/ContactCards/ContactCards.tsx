import React from "react";
import { Box, CenterBox, Column, Row, Text } from "../styled";
import { IconType } from "react-icons";

interface ContactCardProps {
  icon: IconType;
  text1: string;
  text2: string;
}

export const ContactCards: React.FC<ContactCardProps> = ({ icon: Icon, text1, text2 }) => {
  return (
    <Column
    maxWidth={"350px"}
    px={"xl"}
    //   px={"header"}
      py={"xl"}
      gap={"l"}
      alignItems={"center"}
      justifyContent={"center"}
      bg={"secondary"}
      borderTopLeftRadius={"xl"}
    >
      <Box><Icon fill="#D4BDE8" size={30} /></Box>
      <Text variant={"body"} color="primary">{text1}</Text>
      <Text variant={"body"} color="primary" textAlign={"start"}>{text2}</Text>
    </Column>
  );
};



