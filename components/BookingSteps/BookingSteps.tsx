import React from "react";
import Lottie from "lottie-react";
import { Box, CenterBox, Text, Column, Row } from "@/components";
import { stepsData } from "@/constants";

export const BookingSteps = () => {
  return (
    <CenterBox
      bg={"secondary"}
      width={"100%"}
      px={"header"}
     
      flexDirection={"column"}
     
    >
      <Row
        alignItems={"center"}
        justifyContent={"space-between"}
       
        py={"header"}
        width={"100%"}
      >
        <Column gap={"l"}>
          <Text variant={"heading"} fontWeight={"bold"} color={"primary"}>
            About Us
          </Text>
          <Text variant="subHeading" fontWeight={"bold"} color={"primary"}>
            Why Choose Us
          </Text>
        </Column>
        <CenterBox width={"450px"}>
          <Text color={"primary"} fontSize={"xxlg"}>
            We are here to provide you with best makeup services at home. Dont
            hesitate to reach out, and we will get back to you promptly.
          </Text>
        </CenterBox>
      </Row>
      <CenterBox flexDirection={"row"} gap={"xl"} py={"xxxl"}>
        {stepsData.map((step, index) => (
          <Column
            key={index}
            gap={"xl"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            position={"relative"}
            border={"1px solid white"}
            py={"xxxl"}
            bg={"primary"}
            
            borderTopRightRadius={"xl"}
            borderBottomLeftRadius={"xl"}
          >
            <Text
              variant={"heading"}
              color={"primary"}
              position={"absolute"}
              left={2}
              top={6}
              bg={"secondary"}
              width={"50px"}
              textAlign={"center"}
              borderRadius={"circle"}
              border={"2px solid white"}
              
            >
              {index + 1}
            </Text>
            <CenterBox
            mt={"m"}
            >
              <Lottie animationData={step.animation} loop={true} style={{ width: 200, height: 200,  }} />
            </CenterBox>
            <Text ml={"l"} variant={"body"} color={"secondary"}>
              {step.text}
            </Text>
          </Column>
        ))}
      </CenterBox>
    </CenterBox>
  );
};

