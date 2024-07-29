import { Box, Row, CenterBox, Text, Column } from "@/components";
import React from "react";

export const BookingSteps = () => {
  const steps = [
    "Choose your desired makeup service.",
    "Select a convenient date and time address.",
    "Enter your contact details and address.",
    "Review your booking and confirm address."
  ];

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
      <CenterBox 
      flexDirection={"row"}
      gap={'l'}
      >
      {steps.map((step, index) => (
        <Column
          key={index}
          gap={"xl"}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"flex-start"}
         
          position={"relative"}
          px={"xl"}
          border={"4px solid black"}
          py={"header"}
        >
          <Text
            variant="subHeading"
            color="primary"
            position="absolute"
            left={4}
            top={0}
            bg="white"
            width={"50px"}
            textAlign={"center"}
            
            // height={"200px"}
            
            borderRadius="circle"
            border="1px solid #D4BDE8"
          >
            {index + 1}
          </Text>
          <Text ml={"l"} variant="body" color="secondary" mt={"xl"}>
            {step}
          </Text>
        </Column>
      ))}
      </CenterBox>
    </Box>
  );
};
