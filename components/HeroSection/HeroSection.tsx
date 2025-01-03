"use client";
import { Box, Text, Column, Button } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { slidesData } from "@/constants";

export const HeroSection = () => {
  return (
    <>
      <Swiper
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Autoplay, Pagination]}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={["column", "row"]}
              height={["100vh", "100vh"]}
              position={"relative"}
              bg={"secondary"}
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <Box
                position={"absolute"}
                top={0}
                left={0}
                bottom={0}
                right={0}
                bg={"backgroundOverlay"}
                zIndex={50}
                height={"100vh"}
                width={"100%"}
              ></Box>
              <Column
                zIndex={999}
                px={"m"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"xxxl"}
                py={"s"}
                width={["100%", "690px"]}
              >
                <Text
                  textAlign={["start", "center"]}
                  variant={["subHeading", "heading"]}
                  color={"primary"}
                >
                  {slide.title}
                </Text>
                <Text
                  textAlign={["start", "center"]}
                  variant={["body", "body"]}
                  color={"primary"}
                  width={["100%", "590px"]}
                >
                  {slide.subtitle}
                </Text>
                <Box alignItems={["flex-start", "center"]} width={"100%"}>
                  <Button
                    variant={"primary"}
                    borderRadius={"circle"}
                    py={"m"}
                    bg={"white"}
                    px={"xxxl"}
                  >
                    Know More
                  </Button>
                </Box>
              </Column>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
// "use client";
// import { Box, Text, Column, Button } from "@/components";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { slidesData } from "@/constants";

// export const HeroSection = () => {
//   return (
//     <>
//       <Swiper
//         navigation
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         modules={[Autoplay, Pagination]}
//       >
//         {slidesData.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <Box
//               alignItems={"center"}
//               justifyContent={"center"}
//               flexDirection={["column", "row"]}
//               height={["100vh", "100vh"]}
//               position={"relative"}
//               bg={"secondary"}
              
//               style={{
//                 backgroundImage: `url('/images/n1.jpg')`,
//                 backgroundSize: "cover",
//                 backgroundRepeat: "no-repeat",
//                 backgroundPosition: "center",
//               }}
//             >
//               <Box
//               position={"absolute"}
//               top={0}
//               left={0}
//               bottom={0}
//               right={0}
//               bg={"backgroundOverlay"}
//               zIndex={50}
//               height={"100vh"}
//               width={"100%"}
//               >

//               </Box>
//               <Column
//               zIndex={999}
              
//                 px={"m"}
//                 alignItems={"center"}
//                 justifyContent={"center"}
//                 gap={"xxxl"}
//                 py={"s"}
//                 width={["100%", "690px"]}
//               >
//                 <Text
//                   textAlign={["start", "center"]}
//                   variant={["subHeading", "heading"]}
//                   // fontWeight={"bold"}
//                   color={"primary"}
//                 >
//                   {slide.title}
//                 </Text>
//                 <Text
//                   textAlign={["start", "center"]}
//                   variant={["body", "body"]}
//                   color={"primary"}
//                   width={["100%", "590px"]}
//                 >
//                   {slide.subtitle}
//                 </Text>

//                 <Box alignItems={["flex-start", "center"]} width={"100%"}>
//                   <Button
//                     variant={"primary"}
//                     borderRadius={"circle"}
//                     py={"m"}
//                     bg={"white"}
//                     px={"xxxl"}
//                   >
//                     Know More
//                   </Button>
//                 </Box>
//               </Column>
//             </Box>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// };

