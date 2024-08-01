"use client";
import { Box, Text, Column, CenterBox, Button, Row } from "@/components";
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
        autoplay={{ delay: 2000 }}
        loop={true}
        modules={[Autoplay, Pagination]}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <CenterBox
              mt={"header"}
              justifyContent={"space-between"}
              flexDirection={["column", "row"]}
              // padding={"xl"}
              height={["100vh", "90vh"]}
              // backgroundImage={slide.image}
              // backgroundPosition={"center"}
              // backgroundRepeat={"no-repeat"}
              // backgroundSize={"cover"}
              // backgroundColor={"primaryLight"}
              px={["none", "xl"]}
            >
              <Column
                textAlign={"center"}
                maxWidth={"600px"}
                gap={"l"}
                py={"xl"}
              >
                <Text
                  variant={["subHeading", "heading"]}
                  fontFamily={["Arial, sans-serif", "Arial, sans-serif"]}
                  textShadow={"-moz-initial"}
                  fontWeight={"bold"}
                  color={"secondary"}
                  px={["xl", "xxxl"]}
                  pt={"xxxl"}
                >
                  {slide.title}
                </Text>
                <Text
                  variant={["body", "body"]}
                  color={"secondary"}
                  px={["l", "header"]}
                >
                  {slide.subtitle}
                </Text>
                <CenterBox mt={"l"}>
                  <Button
                    variant={"primary"}
                    borderRadius={"circle"}
                    py={"m"}
                    background={"secondary"}
                    px={"xxxl"}
                    style={{ background: "#2A3277" }}
                  >
                    Explore More
                  </Button>
                </CenterBox>
              </Column>
              <Row
                borderRadius={"xl"}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDirection={"row"}
                gap={"xxl"}
                // mr={"header"}
                // border={"2px solid yellow"}
                // mb={"header"}

                // boxShadow={"modalOverlay"}
              >
                <Image
                  src={slide.image}
                  alt="slider image"
                  width={290}
                  height={300}
                  style={{ borderRadius: "80px" }}
                />
                <Box
                  // mb={"header"}
                  display={["none", "block"]}
                  // px={"xxl"}
                  py={"xxl"}
                  borderRadius={"circle"}
                  // border={"2px solid red"}
                >
                  <Image
                    src={slide.image}
                    alt="no image"
                    width={250}
                    height={400}
                    style={{ borderRadius: "80px" }}
                  />
                </Box>
              </Row>
            </CenterBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
