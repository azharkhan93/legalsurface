
import { Box, Column, Text } from "@/components";
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
      padding="m"
      boxShadow="xl"
      textAlign="left"
     
      flexDirection={"column"}
      alignItems="center"
      bg="white"
      border="1px solid #e5e7eb"
      m="m"
      position={"relative"}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent={"space-between"}
        alignItems="center"
        mb={"m"}
      >
        <Box
          width="80px"
          height="80px"
          borderRadius="circle"
          overflow="hidden"
          mb="l"
          bg={"primary"}
        >
          <Image
            src={review.image}
            alt={review.alt}
            width={80}
            height={80}
            style={{ borderRadius: "50%" }}
          />
        </Box>
        <Column >
        
        <Text fontSize="l" fontWeight="bold">
          {review.name}
        </Text>
        <Text fontSize="s" color="primary">
          {review.position}
        </Text>
        <Box display="flex" alignItems="center" flexDirection={"row"} >
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              color={i < review.rating ? "#FFD700" : "#e4e5e9"}
              size={20}
            />
          ))}
          <Text fontSize="s" >
            {review.rating}.5
          </Text>
        </Box>
        <Box
        position={"absolute"}
        right={0}
    
        color="secondary"
        fontSize="2em"
      >
        <FaQuoteRight fill="green" />
      </Box>
        </Column>
      </Box>
      <Text fontSize="m" marginBottom="15px">
        {review.content}
      </Text>
      
    </Box>
  );
};

