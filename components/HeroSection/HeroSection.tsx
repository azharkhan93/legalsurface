"use client";
import React from "react";
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
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Discover the Beauty Within You",
    tagline: "Experience The Ultimate In Beauty Indulgence At Glam Squad",
    // image: "/images/home1.jpg",
  },
  {
    id: 2,
    title: "Unleash Your Inner Glow",
    tagline: "Our Experts Are Here To Pamper You",
    // image: "/images/home2.jpg",
  },
  {
    id: 3,
    title: "Transform Your Look",
    tagline: "Top-notch Services For A New You",
    // image: "/images/home3.jpg",
  },
];

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
        {/* <Column textAlign={"center"} maxWidth={"600px"} gap={"m"}>
          <Text
            fontSize={"50px"}
            fontWeight={"bold"}
          >
            Discover the Beauty Within You
          </Text>
          <Text fontSize={"30px"}>Experience The Ultimate In Beauty Indulgence At Glam Squad</Text>
          <CenterBox mt={'l'}>
            <Button variant={"primary"} borderRadius={"circle"} width={"200px"}>
              hello
            </Button>
          </CenterBox>
        </Column> */}
        <Box
          borderRadius={"xl"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={"row"}
          gap={"xxl"}
        >
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={{ delay: 500 }}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {slides.map(({ id, tagline, title }) => (
              <SwiperSlide key={id}>
                <div
                  // className="h-full w-full"
                  // style={{
                  //   background: `url(${image}) center center / cover no-repeat`,
                  //   height: '400px',
                  //   borderRadius: '80px'
                  // }}
                >
                  {/* <div className="h-full w-full bg-black opacity-20 rounded-xl" style={{width: "100vh"}}></div> */}
                  <div className="relative z-10 h-full flex items-center justify-center rounded-xl">
                    <div className="text-center">
                      {tagline && (
                        <p className="text-md sm:text-xl lg:text-3xl font-semibold text-white">
                          {tagline}
                        </p>
                      )}
                      <p className="text-3xl sm:text-6xl lg:text-8xl font-bold text-white">
                        {title}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </CenterBox>
    </>
  );
};

