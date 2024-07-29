import { Box, Text } from "@/components";
import Image from "next/image";
import React from "react";

type ServicesCardProps = {
  image: string;
  text: string;
  text2: string;
};

export const ServicesCard: React.FC<ServicesCardProps> = ({ image, text, text2 }) => {
  return (
    <Box
      borderRadius="lg"
      boxShadow="xl"
      flexDirection={"column"}
      alignItems={"center"}
      bg={"primary"}
      border="1px solid #e5e7eb"
      position={"relative"}
      width={"200px"}
      py={"l"}
      gap={"l"}
      
    >
      <Box
        width="100px"
        height="100px"
        borderRadius="circle"
        overflow={"hidden"}
        bg={"primary"}
        style={{ border: "2px solid black" }}
      >
        <Image
          src={image}
          alt="Service Image"
          width={100}
          height={100}
        />
      </Box>
      <Text fontSize={"l"} fontWeight={"bold"} textAlign={"center"} color={"secondary"}>
        {text}
      </Text>
      <Text fontSize={"l"} fontWeight={"bold"} textAlign={"center"} color={"secondary"}>
        {text2}
      </Text>
    </Box>
  );
};
