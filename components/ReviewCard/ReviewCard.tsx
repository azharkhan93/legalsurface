import { Box, Text } from "../styled";
import Image from "next/image";
import { MdFormatQuote } from "react-icons/md";

type Review = {
  title: string;
  text: string;
  image: string;
  alt: string;
  name: string;

};

type ReviewCardProps = {
  review: Review;
};

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Box
    border={"4px solid #454545"}
      bg={"secondary"}
      borderRadius={"lg"}
      py={'xxl'}
      boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
      width={"320px"}
      // flexDirection={"column"}
      gap={"xl"}
      position="relative"
      px={"s"}
    >
     
      <Box position="absolute" top="2px" left="10px"  bg={"white"} borderRadius={"circle"}>
        <MdFormatQuote size={35} fill="black" />
      </Box>

      <Text variant={"body"} color={"white"} mt={"xl"} >
        {review.text}
      </Text>

      <Box position="absolute" bottom="10px" right="10px" bg={"white"}  borderRadius={"circle"}>
        <MdFormatQuote size={40}  fill="black"/>
      </Box>

      <Box flexDirection={"row"} alignItems={"center"} gap={"m"}>
        <Box
          borderRadius={"circle"}
          overflow={"hidden"}
          width={"50px"}
          height={"50px"}
          border={"2px solid white"}
        >
          <Image src={review.image} alt={review.alt} width={55} height={55} />
        </Box>
        <Box flexDirection={"column"}>
          <Text variant={"body"} color={"white"}>
            {review.name}
          </Text>
          <Text variant={"body"} color={"white"}>
            {review.title}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

// import { Box, CenterBox, Column, Text } from "@/components";
// import Image from "next/image";
// import { FaStar, FaQuoteRight } from "react-icons/fa";

// type Review = {
//   image: string;
//   alt: string;
//   name: string;
//   position: string;
//   rating: number;
//   content: string;
// };

// type ReviewCardProps = {
//   review: Review;
// };

// export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
//   return (
//     <Box
//       borderRadius={"lg"}
//       boxShadow={"blackShadow"}
//       flexDirection={"column-reverse"}
//       alignItems={"start"}
//       bg={"secondary"}
//       borderTop="4px solid #454545"
//       borderBottom="4px solid #454545"
//       position={"relative"}
//       width={"350px"}
//       py={"xl"}
//       gap={"l"}
//     >
//       <Box
//         flexDirection="row"
//         justifyContent={"center"}
//         alignItems={"center"}
//         mb={"m"}
//         gap={"l"}
//       >
//         <CenterBox
//           width={"80px"}
//           height={"80px"}
//           borderRadius={"circle"}
//           overflow={"hidden"}
//           bg={"primary"}
//         >
//           <Image
//             src={review.image}
//             alt={review.alt}
//             width={70}
//             height={70}
//             style={{
//               borderRadius: "50%",
//               border: "1px solid green",
//               padding: "4px",
//             }}
//           />
//         </CenterBox>
//         <Column alignItems="center" gap={"s"}>
//           <Text fontSize={"l"} fontWeight="bold" color={"primary"}>
//             {review.name}
//           </Text>
//           <Text fontSize="s" color={"primary"}>
//             {review.position}
//           </Text>
//           <Box
//             display="flex"
//             alignItems={"center"}
//             flexDirection={"row"}
//             gap={"s"}
//           >
//             {[...Array(5)].map((_, i) => (
//               <FaStar
//                 key={i}
//                 color={i < review.rating ? "#FFD700" : "#e4e5e9"}
//                 size={20}
//               />
//             ))}
//             <Text fontSize={"s"} color={"primary"}>
//               {review.rating}
//             </Text>
//           </Box>
//         </Column>
//         <CenterBox
//           position={"absolute"}
//           right={10}
//           color="secondary"
//           height={"50px"}
//           width={"50px"}
//           py={"s"}
//           borderRadius={"circle"}
//           bg={"primary"}
//         >
//           <FaQuoteRight fill="primary" size={25} />
//         </CenterBox>
//       </Box>
//       <Text
//         fontSize="m"
//         marginBottom="m"
//         textAlign="center"
//         color="primary"
//         px={"l"}
//       >
//         {review.content}
//       </Text>
//     </Box>
//   );
// };
