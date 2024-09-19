"use client";
import { TopBar } from "../TopBar";
import { Box, CenterBox, Column, Text } from "../styled";

import { SERVICES_DATA } from "@/constants";
import { LawCards } from "./components/LawCards";

export const OurServices = () => {
  return (
    <>
      <Column alignItems={"flex-start"} gap={"m"} px={"m"} py={"l"}>
        <Text variant={"heading"} fontWeight={"bold"} color={"secondary"}>
          Our Services
        </Text>
        <Box
          height={"3px"}
          bg={"secondary"}
          width={["40%", "20%"]}
          borderRadius={"circle"}
          ml={"header"}
        />
        <Text variant={"subHeading"} fontWeight={"bold"} color={"secondary"}>
          Explore Now
        </Text>
        <Text
          color={"secondary"}
          variant={"body"}
          width={["100%", "800px"]}
          px={["none", "xl"]}
        >
          {`At Legal Surface – Advocates & Solicitors, we offer a broad spectrum of legal services tailored to meet your needs. Our team of experienced professionals is equipped to handle a variety of cases, ensuring that every legal challenge you face is met with dedication and expertise. Our key service areas include`}
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
