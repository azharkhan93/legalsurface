"use client";
import { Box, Column, Text } from "../styled";

import { SERVICES_DATA } from "@/constants";
import { LawCards } from "./components/LawCards";

export const OurServices = () => {
  return (
    <>
    <Column alignItems={"center"} gap={"xl"} px={"m"} py={"xxxxl"} bg={"grey"} color={"white"}>
        <Text
          variant={"heading"}
          width={["100%", "800px"]}
          textAlign={["start", "center"]}
        >
          Criminal Law Practices
        </Text>
        <Box
          height={"3px"}
          bg={"secondary"}
          width={["40%", "15%"]}
          borderRadius={"circle"}
          ml={"header"}
        />
        <Text variant={"subHeading"} >
        Our Criminal Law Practices Include
        </Text>
        <Text
          
          variant={"body"}
          width={["100%", "800px"]}
          px={["none", "xl"]}
          textAlign={["start", "center"]}
        >
          {`We are a leading law firm specializing in criminal law in
Jammu & Kashmir. Our experienced team of advocates offers expert legal representation
across a wide range of criminal cases, including those in the High Court and district courts. With
over 50 specialized lawyers, we are dedicated to delivering exceptional legal support to protect
your rights and achieve the best possible outcomes.`}
        </Text>
      </Column>
     

      <Box
      bg={"grey"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={["none", "header"]}
        py={["xxxl", "xxxxl"]}
        flexDirection={["column", "row"]}
         width={"100%"}
        // bg={"primary"}
      >
        {SERVICES_DATA.map((service) => (
          <Column
            key={service.id}
            alignItems={"center"}
            // justifyContent={"space-between"}
          >
            <LawCards
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          </Column>
        ))}
      </Box>
    </>
  );
};
