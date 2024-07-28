

import { Box, CenterBox, Text } from "@/components";
import Image from "next/image";
import { ReviewCard } from "../ReviewCard";
import { reviews} from "@/constants";

export const ClientReviews = () => {
  return (
    <CenterBox
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={"xl"}
      height={"100vh"}
    >
     <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
    </CenterBox>
  );
};
