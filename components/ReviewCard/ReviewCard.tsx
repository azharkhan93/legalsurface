// ReviewCard.js
import { Box, Text, Column, CenterBox } from "@/components";
import Image from "next/image";

export const ReviewCard = ({ review }) => {
  return (
    <Box
      borderRadius={"lg"}
      padding={"m"}
    //   bg={"secondaryLight"}
      boxShadow={"xl"}
      textAlign={"left"}
      maxWidth={"300px"}
    >
      <Image
        src={review.image}
        alt={review.alt}
        width={60}
        height={60}
        style={{ borderRadius: "50%", marginBottom: "10px" }}
      />
      <Text fontSize={"l"} fontWeight={"bold"}>{review.name}</Text>
      <Text fontSize={"m"}>{review.content}</Text>
    </Box>
  );
};
