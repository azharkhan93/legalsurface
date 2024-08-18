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
        padding={"m"}
        alignItems={["flex-start","center"]}
        bg={"secondary"}
       
       
      >
        <NewsLetter />
        <Box
        py={"xxxxl"}
       
          justifyContent={"space-between"}
          // height={"40vh"}
          flexDirection={["column","row"]}
          
          width={"100%"}
          // p={["none","xl"]}
          gap={"xxxl"}
         
           alignItems={["flex-start", "center"]}
          
          

          
        >
      
            <Column
            color={"primary"}
            alignItems={["flex-start","center"]}
            gap = {"xl"}
            >
            <Text variant={"subHeading"}>About Company</Text>

           
              <Text variant="body" width={["100%","420px"]} textAlign={["start" ,"center"]}>
                We invite you to embark on a journey of self-discovery,
                self-love, and self-confidence with us. Come indulge your
                senses, pamper your soul, and let your inner radiance shine
                bright. Your beauty journey begins here. We believe in nurturing
                not only our clients but also the planet we call home
              </Text>
              </Column>
            
          <Column
            textAlign={["start","center"]}
            overflow={"hidden"}
            justifyContent={"center"}
            flex={"1"}
            gap={"l"}
            color={"primary"}
            py={["l","xl"]}
          >
            <Text variant="subHeading">Useful Links</Text>

            <Column
              alignItems={["flex-start","center"]}
             
              gap={"m"}
              color={"primary"}
            >
              <Text variant="body">Home</Text>
              <Text variant="body"> About Us</Text>
              <Text variant="body">Contact Us</Text>
              <Text variant="body">Services</Text>
            </Column>
          </Column>

          <Column
             textAlign={["start","center"]}
            overflow={"hidden"}
            gap={"l"}
            color={"primary"}
            py={["l","xl"]}
          >
            <Text variant="subHeading">Our Location</Text>

            <Row alignItems={"center"}  gap={"l"} >
              <FaMapMarkerAlt size={23} fill="#D4BDE8" />

              <Text variant="body">Address: Rajbagh Srinagar, India</Text>
            </Row>
            <Row alignItems={"center"} justifyContent={"center"} gap={"l"}>
              <FaPhone size={23} fill="#D4BDE8" />

              <Text variant={"body"}>Contact Detail: +91 8899355648</Text>
            </Row>

            <Row alignItems={"center"} justifyContent={"center"} gap={"l"}>
              <FaEnvelope size={23} fill="#D4BDE8" />
              <Text variant={"body"}>Email: glam90239@gmail.com</Text>
            </Row>
          </Column>
        </Box>
      </Box>
      <Box height={"1px"} bg={"primary"} width={"100%"}></Box>

      <CenterBox py={"m"}>
        <Text variant={"body"} color={"secondary"}>
          © 2024 Glam Squad. All Rights Reserved
        </Text>
      </CenterBox>
    </>
  );
};
