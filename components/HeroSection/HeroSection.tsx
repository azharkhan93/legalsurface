"use client";
import {
  Box,
  Text,
  Column,
  CenterBox,
  Button,
} from "@/components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { slidesData } from "@/constants";


export const HeroSection = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Swiper
        navigation
        pagination={{ type: "bullets", clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        modules={[Autoplay, Pagination]}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <CenterBox
              justifyContent={"space-between"}
              flexDirection={["column","row"]}
              padding={"xl"}
              height={"90vh"}
              backgroundImage={slide.image}
              backgroundPosition={"center"}
              backgroundRepeat={"no-repeat"}
              backgroundSize={"cover"}
              backgroundColor={"primaryLight"}
            >
              <Column textAlign={"center"} maxWidth={"600px"} gap={"m"}>
                <Text
                  fontSize={"50px "}
                  textShadow={"-moz-initial"}
                  fontWeight={"bold"}
                  fontFamily={""}
                >
                  {slide.title}
                </Text>
                <Text fontSize={"30px"}>{slide.subtitle}</Text>
                <CenterBox mt={"l"}>
                  <Button variant={"primary"} borderRadius={"circle"} width={"200px"}>
                    hello
                  </Button>
                </CenterBox>
              </Column>
              <Box
              // display={["none", "block"]}
                borderRadius={"xl"}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDirection={"row"}
                gap={"xxl"}
              >
                <Image
                  src={slide.image}
                  alt="slider image"
                  width={190}
                  height={290}
                  style={{ borderRadius: "80px", marginTop: "90px" }}
                />
                <Box
                  px={"xxl"}
                  py={"xxl"}
                  borderRadius={"circle"}
                  border={"2px solid white"}
                >
                  <Image
                    src={slide.image}
                    alt="no image"
                    width={250}
                    height={400}
                    style={{ borderRadius: "80px" }}
                  />
                </Box>
              </Box>
            </CenterBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

