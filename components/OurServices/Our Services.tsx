"use client";
import { Box, Column, Text } from "../styled";

import { SERVICES_DATA } from "@/constants";
import { LawCards } from "./components/LawCards";

export const OurServices = () => {
  return (
    <>
      <Column alignItems={"flex-start"} gap={"m"} px={"m"} py={"l"}>
        <Text variant={"heading"} fontWeight={"bold"} color={"secondary"}>
          Criminal Law Practices
        </Text>
        <Box
          height={"3px"}
          bg={"secondary"}
          width={["40%", "20%"]}
          borderRadius={"circle"}
          ml={"header"}
        />
        <Text variant={"subHeading"} fontWeight={"bold"} color={"secondary"}>
          Our Criminal Law Practices Include
        </Text>
        <Text
          color={"secondary"}
          variant={"body"}
          width={["100%", "700px"]}
          px={["none", "xl"]}
          textAlign={["start", "center"]}
        >
          {`Legal Surface – Advocates & Solicitors is a leading law firm specializing in criminal law in
Jammu &amp; Kashmir. Our experienced team of advocates offers expert legal representation
across a wide range of criminal cases, including those in the High Court and district courts. With
over 50 specialized lawyers, we are dedicated to delivering exceptional legal support to protect
your rights and achieve the best possible outcomes.`}
        </Text>
      </Column>

      <Box
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={["none", "xxxxl"]}
        py={["xxxl", "header"]}
        flexDirection={["column", "row"]}
        // width={"100%"}
        bg={"primary"}
      >
        {SERVICES_DATA.map((service) => (
          <Column
            key={service.id}
            alignItems={"center"}
            justifyContent={"space-between"}
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
