import React from "react";
import Lottie from "lottie-react";
import { Box, CenterBox, Text, Column } from "@/components";
import { stepsData } from "@/constants";

export const BookingSteps = () => {
  return (
    <Box
      borderBottom={"1px solid #D4BDE8"}
      width={"100%"}
      px={"header"}
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Text variant="heading" color="secondary" mb={"m"}>
        How to Book a Makeup Service
      </Text>
      <CenterBox flexDirection={"row"} gap={"xl"}>
        {stepsData.map((step, index) => (
          <Column
            key={index}
            gap={"xl"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            position={"relative"}
            border={"2px solid black"}
            py={"xxxl"}
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
              border={"2px solid green"}
              
            >
              {index + 1}
            </Text>
            <CenterBox
            mt={"m"}
            >
              <Lottie animationData={step.animation} loop={true} style={{ width: 200, height: 200,  }} />
            </CenterBox>
            <Text ml={"l"} variant="body" color="secondary">
              {step.text}
            </Text>
          </Column>
        ))}
      </CenterBox>
    </Box>
  );
};

