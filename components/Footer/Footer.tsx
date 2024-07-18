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
            gap={"l"}
          >
            <Text variant="subHeading">About Company</Text>

            <Row alignItems={"center"} justifyContent={"center"} gap={"m"}>
              <Text variant="body">Address: Rajbagh Srinagar India</Text>
            </Row>
          </Column>
          <Column
            borderRight={"1px solid black"}
            textAlign={"center"}
            overflow={"hidden"}
            justifyContent={"center"}
            flex={"1"}
            gap={"l"}
          >
            <Text variant="subHeading">Useful Links</Text>

            <Column alignItems={"center"} justifyContent={"center"} gap={"m"}>
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
          >
            <Text variant="subHeading">Our Location</Text>

            <Row alignItems={"center"} justifyContent={"center"} gap={"m"}>
              <FaMapMarkerAlt size={23} fill="green" width={"20px"} />
              <Text variant="body">Address: Rajbagh Srinagar India</Text>
            </Row>
            <Row alignItems={"center"} justifyContent={"center"} gap={"m"}>
              <FaEnvelope size={23} fill="green" width={"20px"} />
              <Text variant="body"> Email: jhkjhsddhjs@glamsquad.in</Text>
            </Row>
            <Row alignItems={"center"} justifyContent={"center"} gap={"m"}>
              <FaPhone size={23} fill="green" width={"20px"} />
              <Text variant="body"> Phone: +91444555599999998</Text>
            </Row>
          </Column>
        </Box>
      </Box>
      <Box height={"1px"} bg={"secondary"} width={"100%"}></Box>

      <CenterBox py={"m"}>
        <Text variant="heading" color="secondary">
          copyright sall rights reserved
        </Text>
      </CenterBox>
    </>
  );
};
