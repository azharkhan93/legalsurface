"use client";

import { Box, Button, CenterBox, Column, Row, Text } from "../styled";
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

interface OurServicesProps {
  mainHeading: string;
  subHeading: string;
  description: string;
  servicesData: Service[];
}

export const OurServices = ({
  mainHeading,
  subHeading,
  description,
  servicesData,
}: OurServicesProps) => {
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
          {mainHeading}
        </Text>
        <Box
          height={"3px"}
          bg={"secondary"}
          width={["40%", "15%"]}
          borderRadius={"circle"}
          ml={"header"}
        />
        <Text variant={"subHeading"}>{subHeading}</Text>
        <Text
          variant={"body"}
          width={["100%", "800px"]}
          px={["none", "xl"]}
          textAlign={["start", "center"]}
        >
          {description}
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
        {servicesData.map((service) => (
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

