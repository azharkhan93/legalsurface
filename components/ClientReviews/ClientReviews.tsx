

import { Box, CenterBox, Text } from "@/components";
import Image from "next/image";
import { ReviewCard } from "../ReviewCard";
import { reviews } from "@/constants";

export const ClientReviews = () => {
  return (
    <>
    <CenterBox
      
      flexDirection={"row"}
      gap={50}
      alignItems={"start"}
    >
      <CenterBox
        flexDirection={"row"}
       
        gap={20}
      >
        <Box
          width="100px"
          height="100px"
          borderRadius="circle"
          overflow="hidden"
          bg={"primary"}
          style={{ border: "2px solid black" }}
        >
          <Image
            src="/path/to/your/image.jpg"
            alt="Testimonial Image"
            width={100}
            height={100}
            style={{ borderRadius: "50%" }} />
        </Box>
        <Text fontSize="xl" fontWeight="bold">
          Testimonials
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Testimonials jhjhjkl jjjjkjhhhi huhuhuiuhh
        </Text>
      </CenterBox>
    </CenterBox>
    <CenterBox
      flexDirection={"row"}
    >


        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </CenterBox>
      </>
    
  );
};

