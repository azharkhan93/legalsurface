"use client";
import {
  Box,
  Row,
  Text,
  Column,
  CenterBox,
  Button,
  ServiceCard,
} from "@/components";
import {
  FaGavel,
  FaBriefcase,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link"

export const ServiceSection = () => {
  return (
    <Box
      flexDirection={"column"}
      // flexDirection={["column","row"]}
      alignItems={"center"}
      justifyContent={"center"}
      bg={"primary"}
      py={["xxl", "header"]}

      // height={"100vh"}
    >
      <Column
        // border={"2px solid white"}
        flexDirection={["column", "column"]}
        width={"100%"}
        gap={20}
        // py={"header"}
      >
        <Box
          flexDirection={["column", "row"]}
          justifyContent={"space-between"}
          gap={"l"}
          px={"xl"}
          width={"100%"}
        >
          <Column gap={["xl", "m"]}>
            <Text color={"secondary"} variant={"heading"}>
              Our Services
            </Text>
            <Box
              height={"3px"}
              bg={"secondary"}
              width={"70%"}
              ml={"header"}
              borderRadius={"circle"}
            ></Box>
            <Text color={"secondary"} variant={"subHeading"}>
              Explore Our Services
            </Text>
          </Column>

          <CenterBox width={["100%", "450px"]} textAlign={["start", "start"]}>
            <Text color={"secondary"} variant={"body"}>
              As noted by one of our senior lawyers, At Legal Surface we dont
              just represent clients we champion their causes with integrity and
              dedication. Our approach is grounded in meticulous preparation and
              a relentless commitment to achieving justice.
            </Text>
          </CenterBox>
        </Box>

        <Box
          flexDirection={["column", "row"]}
          gap={["xxl", "xl"]}
          py={["m", "header"]}
          px={["xxxl", "header"]}
        >
          <ServiceCard
            icon={FaGavel}
            title="Family Law"
            description="Get expert legal advice and consultation from our experienced attorneys."
            image="/images/family.jpg"
            link="/contact"
          />
          <ServiceCard
            icon={FaBriefcase}
            title="Corporate Law"
            description="We handle all aspects of corporate law, including mergers and acquisitions."
            link="/services/corporate-law"
            image="/images/corporate.jpg"
          />
          <ServiceCard
            icon={FaShieldAlt}
            title="Criminal Law"
            description="Receive compensation for injuries caused by accidents or negligence."
            link="/services"
            image="/images/criminal.jpg"
            
          />
        </Box>
      </Column>
      <CenterBox position="relative" mt={["l", "none"]}>
  <Link href="/services" passHref style={{ textDecoration: "none" }}>
    <Button
      borderTopLeftRadius={"xl"}
      py={"m"}
      px={"header"}
      variant="primary"
    >
      Explore More
      <Box position={"absolute"} right="20px">
        <FaArrowRight size={20} />
      </Box>
    </Button>
  </Link>
</CenterBox>
    </Box>
  );
};
