import { Box, CenterBox, Column, Text } from "@/components";
import Image from "next/image";
import { FaStar, FaQuoteRight } from "react-icons/fa";

interface Review {
  image: string;
  alt: string;
  name: string;
  position: string;
  rating: number;
  content: string;
}

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Box
      borderRadius="lg"
      boxShadow="xl"
      flexDirection={"column"}
      alignItems="start"
      bg="white"
      border="1px solid #e5e7eb"
      position={"relative"}
      width={"350px"}
      py={"l"}
      gap={"l"}
    >
      <Box
        flexDirection="row"
        justifyContent={"center"}
        alignItems={"center"}
        mb={"m"}
        gap={"l"}
      >
        <Box
          width="100px"
          height="70px"
          borderRadius="circle"
          overflow="hidden"
          bg={"primary"}
          style={{ border: "2px solid black" }}
        >
          <Image
            src={review.image}
            alt={review.alt}
            width={70}
            height={70}
            style={{ borderRadius: "50%" }}
          />
        </Box>
        <Column alignItems="center" gap={"s"}>
          <Text fontSize="l" fontWeight="bold">
            {review.name}
          </Text>
          <Text fontSize="s" color="secondary">
            {review.position}
          </Text>
          <Box display="flex" alignItems="center" flexDirection={"row"}>
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                color={i < review.rating ? "#FFD700" : "#e4e5e9"}
                size={20}
              />
            ))}
            <Text fontSize="s">{review.rating}.5</Text>
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
          // style={{ border: "1px solid black" }}
          bg={"primary"}
        >
          <FaQuoteRight fill="primary" size={25} />
        </CenterBox>
      </Box>
      <Text fontSize="m" marginBottom="m" textAlign="center">
        {review.content}
      </Text>
    </Box>
  );
};
