import {
  Box,
  CenterBox,
  Column,
  NewsLetter,
  Row,
  StyledHr,
  Text,
} from "@/components";
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <Box
        // border={"4px solid yellow"}
        padding={"xl"}
        alignItems={"center"}
        bg={"secondary"}
        // height={"40vh"}
        // flexDirection={"column"}
      >
        <NewsLetter />
        <Box
          justifyContent={"space-between"}
          height={"40vh"}
          flexDirection={"row"}
          width={"100%"}
          p={"xl"}
          //   border={"4px solid black"}
        >
          <Column
            borderRight={"1px solid black"}
            borderLeft={"1px solid black"}
            textAlign={"center"}
            overflow={"hidden"}
            justifyContent={"center"}
            flex={"1"}
            color={"primary"}
            gap={"l"}
          >
            <Text variant={"subHeading"}>About Company</Text>
            

            <Row alignItems={"center"} justifyContent={"center"} gap={"m"}>
              <Text variant="body" width={"390px"}>We invite you to embark on a journey of self-discovery, self-love, and self-confidence with us. Come indulge your senses, pamper your soul, and let your inner radiance shine bright. Your beauty journey begins here. We believe in nurturing not only our clients but also the planet we call home</Text>
            </Row>
          </Column>
          <Column
            borderRight={"1px solid black"}
            textAlign={"center"}
            overflow={"hidden"}
            justifyContent={"center"}
            flex={"1"}
            gap={"l"}
            color={"primary"}
          >
            <Text variant="subHeading">Useful Links</Text>

            <Column
              alignItems={"center"}
              justifyContent={"center"}
              gap={"m"}
              color={"primary"}
            >
              <Text variant="body">Home</Text>

              <Text variant="body"> India</Text>
              <Text variant="body">India</Text>
              <Text variant="body">India</Text>
            </Column>
          </Column>

          <Column
            borderRight={"1px solid black"}
            // borderLeft={"3px solid green"}
            textAlign={"center"}
            overflow={"hidden"}
            justifyContent={"center"}
            flex={"1"}
            gap={"l"}
            color={"primary"}
          >
            <Text variant="subHeading">Our Location</Text>

            <Row alignItems={"center"} justifyContent={"space-between"}  border={"2px solid green"}  >
              <FaMapMarkerAlt size={23} fill="green" width={"20px"} style={{marginLeft: "100px"}}  />
              <Text variant="body">Address: Rajbagh Srinagar, India</Text>
            </Row>
            <Row alignItems={"center"} justifyContent={"center"} border={"2px solid green"} >
              <FaEnvelope size={23} fill="green" width={"20px"} style={{marginLeft: "120]px"}} />
              <Text variant="body"> Email: Malihashaikh24524@gmail.com</Text>
            </Row>
            <Row alignItems={"center"} justifyContent={"center"} gap={"header"} border={"2px solid green"}>
              <FaPhone size={23} fill="green" width={"20px"} style={{marginLeft: "100px"}} />
              <Text variant="body"> Phone: +91 8899355648</Text>
            </Row>
          </Column>
        </Box>
      </Box>
      <Box height={"1px"} bg={"secondary"} width={"100%"}></Box>

      <CenterBox py={"m"}>
        <Text variant={"subHeading"} color={"secondary"}>
          © 2024 Glam Squad. All Rights Reserved
        </Text>
      </CenterBox>
    </>
  );
};
