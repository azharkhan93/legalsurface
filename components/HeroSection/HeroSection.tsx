"use client";
import {
  Box,
  Text,
  Column,
  CenterBox,
  Button,
} from "@/components";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <>
      {/* <Navbar /> */}
      <CenterBox
        // style={{backgroundImage: "url(/images/hom.jpg)"}}
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
          // border={"2px solid green"}
          borderRadius={"xl"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={"row"}
          gap={"xxl"}
        >
          <Image
            src="/images/hom.jpg"
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
              src="/images/home3.jpg"
              alt="Description of the image"
              width={250}
              height={400}
              style={{ borderRadius: "80px" }}
            />
          </Box>
        </Box>
      </CenterBox>
    </>
  );
};
