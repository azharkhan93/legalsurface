"use client"
import { Column, Text } from "../styled";
import { IconType } from "react-icons";
import { AnimationBox } from "../styled/AnimationBox";
type CardProps = {
  Icon: IconType;
  heading: string;
  description: string;
};

export const ServicesCard = ({ Icon, heading, description }: CardProps) => {
  return (
    <AnimationBox alignItems={"center"} gap={"m"} px={"s"}>
      <Icon size={50} color={"secondary"} />
      <Text variant={"subHeading"} color="white">
        {heading}
      </Text>
      <Text variant={"body"} color="white" width={"355px"} px={"s"}>
        {description}
      </Text>
    </AnimationBox>
  );
};



