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
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export const HeroSection = () => {
  return (
    <>
      {/* <Navbar /> */}
      <CenterBox
        justifyContent={"space-between"}
        flexDirection={"row"}
        padding={"xl"}
        height={"90vh"}
        backgroundImage={"/images/hom.jpg"}
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
            Discover the Beauty Within You
          </Text>
          <Text fontSize={"30px"}>Experience The Ultimate In Beauty Indulgence At Glam Squad</Text>
          <CenterBox mt={'l'}>
            <Button variant={"primary"} borderRadius={"circle"} width={"200px"}>
              hello
            </Button>
          </CenterBox>
        </Column>
        <Box
          borderRadius={"xl"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={"row"}
          gap={"xxl"}
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Box
                px={"xxl"}
                py={"xxl"}
                borderRadius={"circle"}
                border={"2px solid white"}
              >
                <Image
                  src="/images/home3.jpg"
                  alt="Slide 1"
                  width={250}
                  height={400}
                  style={{ borderRadius: "80px" }}
                />
                <Text fontSize={"20px"} textAlign={"center"}>Slide 1 Description</Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                px={"xxl"}
                py={"xxl"}
                borderRadius={"circle"}
                border={"2px solid white"}
              >
                <Image
                  src="/images/home2.jpg"
                  alt="Slide 2"
                  width={250}
                  height={400}
                  style={{ borderRadius: "80px" }}
                />
                <Text fontSize={"20px"} textAlign={"center"}>Slide 2 Description</Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                px={"xxl"}
                py={"xxl"}
                borderRadius={"circle"}
                border={"2px solid white"}
              >
                <Image
                  src="/images/home1.jpg"
                  alt="Slide 3"
                  width={250}
                  height={400}
                  style={{ borderRadius: "80px" }}
                />
                <Text fontSize={"20px"} textAlign={"center"}>Slide 3 Description</Text>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </CenterBox>
    </>
  );
};

