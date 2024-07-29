import { Box, CenterBox, Column, Text } from "@/components";
import Image from "next/image";
import { FaStar, FaQuoteRight } from "react-icons/fa";



type Review = {
  image: string;
  alt: string;
  name: string;
  position: string;
  rating: number;
  content: string;
}

type ReviewCardProps = {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Box
      borderRadius={"lg"}
      boxShadow={"xl"}
      flexDirection={"column"}
      alignItems={"start"}
      bg={"secondary"}
      // border="1px solid #e5e7eb"
      position={"relative"}
      width={"350px"}
      py={"xl"}
      gap={"l"}
    >
      <Box
        flexDirection="row"
        justifyContent={"center"}
        alignItems={"center"}
        mb={"m"}
        gap={"l"}
      >
        <CenterBox
          width={"80px"}
          height={"80px"}
          borderRadius={"circle"}
          overflow={"hidden"}
          bg={"primary"}
          
        >
          <Image
            src={review.image}
            alt={review.alt}
            width={70}
            height={70}
            style={{ borderRadius: "50%", border: "1px solid green", padding:"4px" }}
          />
        </CenterBox>
        <Column alignItems="center" gap={"s"}>
          <Text fontSize={"l"} fontWeight="bold" color = {"primary"}>
            {review.name}
          </Text>
          <Text fontSize="s"  color = {"primary"} >
            {review.position}
          </Text>
          <Box display="flex" alignItems={"center"} flexDirection={"row"} gap={"s"}>
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                color={i < review.rating ? "#FFD700" : "#e4e5e9"}
                size={20}
              />
            ))}
            <Text fontSize={"s"} color={"primary"}>{review.rating}</Text>
          </Box>
        </Column>
        <CenterBox
          position={"absolute"}
          right={10}
          color="secondary"
        
          height={"50px"}
          width={"50px"}
          py={"s"}
          borderRadius={"circle"}
          bg={"primary"}
        >
          <FaQuoteRight fill="primary" size={25} />
        </CenterBox>
      </Box>
      <Text fontSize="m" marginBottom="m" textAlign="center" color="primary">
        {review.content}
      </Text>
    </Box>
  );
};
