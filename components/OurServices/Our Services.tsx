"use client";

import { Box, Button, CenterBox, Column, Row, Text } from "../styled";
import { SERVICES_DATA } from "@/constants";
import { LawCards } from "./components/LawCards";

interface PracticeArea {
  subHeading: string;
  details: string[];
}

interface Service {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  practiceArea?: PracticeArea[];
}

export const OurServices = () => {
  return (
    <>
      <Column
        alignItems={"center"}
        gap={"xl"}
        px={"m"}
        py={"xxxxl"}
        bg={"grey"}
        color={"white"}
      >
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
        <Text variant={"subHeading"}>Our Criminal Law Practices Include</Text>
        <Text
          variant={"body"}
          width={["100%", "800px"]}
          px={["none", "xl"]}
          textAlign={["start", "center"]}
        >
          {`We are a leading law firm specializing in criminal law in Jammu & Kashmir. Our experienced team of advocates offers expert legal representation across a wide range of criminal cases, including those in the High Court and district courts. With over 50 specialized lawyers, we are dedicated to delivering exceptional legal support to protect your rights and achieve the best possible outcomes.`}
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
      >
        {SERVICES_DATA.map((service: Service) => (
          <Row
            key={service.id}
            alignItems={"center"}
            flexDirection={["column", "row"]}
            width={"100%"}
            gap={"xxxxl"}
            justifyContent={"center"}
          >
            <LawCards
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
            {service.practiceArea?.map((area, index) => (
              <Column
                key={index}
                borderBottom={"4px solid white"}
                borderRadius={"m"}
                p={"m"}
                mt={["none", "xxxl"]}
                gap={["xl","xxxl"]}
                width={["100%", "600px"]}
                alignItems={"flex-start"}
                color={"white"}
              >
                <Text variant={"subHeading"}>{area.subHeading}</Text>
                {area.details.map((detail, detailIndex) => (
                  <Text variant={"body"} key={detailIndex}>
                    {detail}
                  </Text>
                ))}
                <CenterBox width={"100%"}>
                  <Button
                    textAlign={"center"}
                    py={"m"}
                    px={"xxxl"}
                    variant={"primary"}
                    style={{ borderRadius: "10px", background: "black" }}
                  >
                    Start Exploring
                  </Button>
                </CenterBox>
              </Column>
            ))}
          </Row>
        ))}
      </Box>
    </>
  );
};
