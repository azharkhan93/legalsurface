"use client";
import { Box, Text, Column, CenterBox, Button, Row } from "@/components";
import Image from "next/image";

export const KnowUs = () => {
  return (
    <>
      <CenterBox
        // mt={"header"}
        justifyContent={"space-between"}
        flexDirection={["column", "row"]}
        px={["none", "xl"]}
        py={"xxxl"}
      >
        <Column textAlign={"center"} maxWidth={"600px"} gap={"l"} py={"xl"}>
          <Text
            variant={["subHeading", "heading"]}
            fontFamily={["Arial, sans-serif", "Arial, sans-serif"]}
            textShadow={"-moz-initial"}
            fontWeight={"bold"}
            color={"secondary"}
            px={["xl", "xxxl"]}
            // pt={"xxxl"}
          >
            Why Glam Squad?
          </Text>
          <Text
            variant={["subHeading", "subHeading"]}
            color={"secondary"}
            px={["l", "header"]}
          >
            Every Treatment Tells a Story
          </Text>
          <Text
          textAlign={["start", "center"]}
            variant={"body"}
            // variant={["subHeading", "subHeading"]}
            color={"secondary"}
            px={["l", "xl"]}
          >
            Beauty is not just a service its an experience. We invite you to
            embark on a journey of self-discovery, self-love, and
            self-confidence with us. Come indulge your senses, pamper your soul,
            and let your inner radiance shine bright. Your beauty journey begins
            here. We believe in nurturing not only our clients but also the
            planet we call home
            self-confidence with us. Come indulge your senses, pamper your soul,
            and let your inner radiance shine bright. Your beauty journey begins
            here. We believe in nurturing not only our clients but also the
            planet we call home
          </Text>
          <CenterBox mt={"l"}>
            <Button
              variant={"primary"}
              borderRadius={"circle"}
              py={"m"}
              background={"secondary"}
              px={"xxxl"}
              style={{ background: "#2A3277" }}
            >
              Explore More
            </Button>
          </CenterBox>
        </Column>
        <Row
         
          width={"40%"}
          borderRadius={"xl"}
          alignItems={"center"}
          justifyContent={"space-between"}
          pr={"header"}

          //   gap={"xxl"}
          // mr={"header"}
          // border={"2px solid yellow"}
          // mb={"header"}

          // boxShadow={"modalOverlay"}
        >
          <Column gap={"xxl"} width={"300px"}>
            <Image
              src="/images/home3.jpg"
              alt="slider image"
              width={200}
              height={250}
              style={{ borderRadius: "80px" }}
            />
            <Image
              src="/images/home3.jpg"
              alt="slider image"
              width={200}
              height={250}
              style={{ borderRadius: "80px" }}
            />
          </Column>

          <Column
            gap={"xxl"}
            // mb={"header"}
            display={["none", "block"]}
            // px={"xxl"}

            borderRadius={"circle"}
            // border={"2px solid red"}
          >
            <Image
              src="/images/hom.jpg"
              alt="no image"
              width={200}
              height={250}
              style={{ borderRadius: "20px" }}
            />
            <Image
              src="/images/home1.jpg"
              alt="slider image"
              width={200}
              height={250}
              style={{ borderRadius: "20px" }}
            />
          </Column>
        </Row>
      </CenterBox>
    </>
  );
};
