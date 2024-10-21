"use client";
import { Box, Column, Row, Text } from "../styled";
import { FaArrowRight, FaBriefcase, FaCheck } from "react-icons/fa";
import { ContentSection } from "./components/ContentSection/ContentSection";
import { internshipData } from "@/constants";

export const CareersSection = () => {
  return (
    <>
      <Column alignItems={"center"} gap={"xl"} px={"m"} py={"xxxxl"}>
        <Text
          variant={"heading"}
          color={"secondary"}
          width={["100%", "800px"]}
          textAlign={["start", "center"]}
        >
          {`Careers At Legal Surface – Advocates & Solictors`}
        </Text>
        <Box
          height={"3px"}
          bg={"secondary"}
          width={["40%", "15%"]}
          borderRadius={"circle"}
          ml={"header"}
        />
        <Text variant={"subHeading"} color={"secondary"}>
          Join Our Leading Legal Team
        </Text>
        <Text
          color={"secondary"}
          variant={"body"}
          width={["100%", "800px"]}
          px={["none", "xl"]}
          textAlign={["start", "center"]}
        >
          {`At LEGAL SURFACE – ADVOCATES & SOLICITORS, we are committed to excellence in legal representation and the pursuit of justice. Since our establishment in 2003, we have grown into a premier legal firm with over 50 highly skilled lawyers, each specializing in diverse branches of law. Our success is driven by a shared dedication to delivering outstanding legal services and achieving favorable outcomes for our clients`}
        </Text>
      </Column>

      <Row flexDirection={"row"} width={"100%"} alignItems={"center"}>

      <ContentSection
        heading={internshipData.heading}
        description={internshipData.description}
        subHeading={internshipData.subHeading}
        tasks={internshipData.tasks}
      />
      </Row>
    </>
  );
};
