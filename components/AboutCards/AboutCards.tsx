
import React from "react";
import { Column, Text } from "@/components";
import { IconType } from "react-icons";

type AboutCardProps = {
  icon: IconType;
  title: string;
  description: string;
};

export const AboutCards: React.FC<AboutCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <Column
    alignItems={"start"}
    justifyContent={"start"}
    px={"l"}
    py={"l"}
    gap={"m"}
    width={"300px"}
  >
    <Icon size={65} color={"#2A3277"} />
    <Text variant={"subHeading"} color={"secondary"}>
      {title}
    </Text>
    <Text variant={"body"} width={"290px"} color={"secondary"}>
      {description}
    </Text>
  </Column>
);
