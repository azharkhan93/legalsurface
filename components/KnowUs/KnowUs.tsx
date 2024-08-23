"use client";
import { Box, Text, Column, CenterBox, Button, Row } from "@/components";
import Image from "next/image";

export const KnowUs = () => {
  return (
    <>
      <CenterBox
        bg={"secondary"}
        justifyContent={"space-between"}
        flexDirection={["column", "row"]}
        px={["none", "xl"]}
        py={"xxxl"}
        // width={"400px"}
      >
        <Column  gap={"l"} py={"xl"}
        px={"l"}
        // px={"header"}
         >
          <Text
            variant={"heading"}
            fontWeight={"bold"}
            color={"primary"}
            
          >
            About Us - Legal Surface?
          </Text>
          <Text variant={"subHeading"} color={"primary"} textAlign={"center"}>
            We Believe In Transperency
          </Text>
          <Text
            textAlign={["start", "center"]}
            variant={"body"}
            color={"primary"}
            width={["350px","670px"]}
          >
            Welcome to Legal Surface Law Group, a family-owned law firm deeply
            rooted in the heart of Norman, OK, and extending its services to the
            wider Oklahoma area including Woodward and Oklahoma City. Since our
            inception, we have been dedicated to providing exceptional legal
            services, with a particular focus on family law. Our journey is one
            of commitment, expertise, and a deep understanding of the law, all
            driven by our passion for justice and client support.
          </Text>
          <CenterBox mt={"l"}>
            <Button
              variant={"primary"}
              borderRadius={"circle"}
              py={"m"}
              background={"secondary"}
              px={"xxxl"}
            >
              Explore More
            </Button>
          </CenterBox>
        </Column>
        <Row
          py={"xl"}
          px={"l"}
          border={"4px solid grey"}
          width={["100%", "35%"]}
          // borderRadius={"xl"}
          alignItems={"center"}
          justifyContent={"space-between"}
          // pr={["none","header"]}
          gap={"l"}
          bg={"white"}
        >
          <CenterBox gap={"xxl"} width={["", "300px"]}>
            <Image
              src="/images/banner.jpg"
              alt="slider image"
              width={500}
              height={390}
              style={{ borderRadius: "10px" }}
            />
          </CenterBox>
        </Row>
      </CenterBox>
    </>
  );
};
