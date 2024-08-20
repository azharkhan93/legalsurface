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
        autoplay={{ delay: 2000 }}
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
              bg={"secondary"}
            >
              <Column
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
                  fontWeight={"bold"}
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

