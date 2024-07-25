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

const slideData = [
  {
    title: "Discover the Beauty Within You",
    subtitle: "Experience The Ultimate In Beauty Indulgence At Glam Squad",
    image: "/images/hom.jpg",
  },
  {
    title: "Unleash Your Inner Glow",
    subtitle: "Revitalize Your Look with Our Premium Services",
    image: "/images/home2.jpg",
  },
  {
    title: "Transform Your Style",
    subtitle: "Expert Care for a Stunning You",
    image: "/images/home3.jpg",
  },
];

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
        {slideData.map((slide, index) => (
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
                  alt="Description of the image"
                  width={250}
                  height={400}
                  style={{ borderRadius: "80px" }}
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

