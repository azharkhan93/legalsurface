

// ReviewsSection.js
import { Box, CenterBox } from "@/components";
import Image from "next/image";
import { ReviewCard } from "../ReviewCard";
import { reviewsData } from "@/constants"; // Assuming you have reviewsData defined in constants

export const ClientReviews = () => {
  return (
    <CenterBox
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={"xl"}
      height={"100vh"}
    >
      <Box position={"relative"}>
        <Image
          src={"/path/to/your/image.jpg"}
          alt="Review section image"
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "20px" }}
        />
      </Box>
      <CenterBox
        flex={"0 1 60%"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"l"}
      >
        {reviewsData.slice(0, 3).map((review, index) => (
          <Box
            key={index}
            position={"absolute"}
            top={`${index * 50}px`} // Adjust the overlap by changing the increment
            left={`${index * 50}px`} // Adjust the horizontal position by changing the increment
            zIndex={index}
          >
            <ReviewCard review={review} />
          </Box>
        ))}
      </CenterBox>
    </CenterBox>
  );
};
