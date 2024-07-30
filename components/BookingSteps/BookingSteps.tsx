import React from "react";
import Lottie from "lottie-react";
import { Box, CenterBox, Text, Column, Row } from "@/components";
import { stepsData } from "@/constants";

export const BookingSteps = () => {
  return (
    <Column
        bg={"secondary"}
        flexDirection={["column", "row"]}
        border={"2px solid green"}
        py={"header"}
      >
      <Box
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
        gap={"l"}
        px={"xl"}
      >
        <Column gap={["xl", "m"]}>
          <Text variant={"heading"} fontWeight={"bold"} color={"primary"}>
          How To Book 
          </Text>
          <Box
              height={"3px"}
              bg={"primary"}
              width={"70%"}
              ml={"header"}
              borderRadius={"circle"}
            ></Box>
          <Text variant={"subHeading"} fontWeight={"bold"} color={"primary"}>
          A Service
          </Text>
        </Column>
        <CenterBox  width={["100%", "450px"]}>
          <Text color={"primary"} variant={"body"}>
          We make it easy for you to book makeup services at your convenience.
            Just follow these steps, and you will be all set. From choosing your
            desired service to confirming your booking. Get ready to enjoy top-notch
            makeup services right at your doorstep!
          </Text>
        </CenterBox>
      </Box>
      <CenterBox flexDirection={["column","row"]} gap={["xxl","xl"]} py={"header"} px={["xxl","header"]}>
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
            <CenterBox mt={"m"}>
              <Lottie
                animationData={step.animation}
                loop={true}
                style={{ width: 200, height: 200 }}
              />
            </CenterBox>
            <Text ml={"l"} variant={"body"} color={"secondary"}>
              {step.text}
            </Text>
          </Column>
        ))}
      </CenterBox>
      </Column>
  );
};
