import { Box, CenterBox, Column, Row, Text } from "@/components";
import { ContentSection } from "./components/ContentSection/ContentSection";
import {
  ApplySectionData1,
 
  internshipData,
  internshipData2,
  internshipData3,
  internshipData4,
} from "@/constants";
import { ApplySection } from "./components/ApplySection";

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
          {`Careers At Legal Surface – Advocates & Solicitors`}
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
          {`We are committed to excellence in legal representation and the pursuit of justice. Since our establishment in 2003, we have grown into a premier legal firm with over 50 highly skilled lawyers, each specializing in diverse branches of law. Our success is driven by a shared dedication to delivering outstanding legal services and achieving favorable outcomes for our clients.`}
        </Text>
      </Column>

      <Row flexDirection={"column"} width={"100%"} alignItems={"center"}>
        <ContentSection
          heading={internshipData.heading}
          description={internshipData.description}
          subHeading={internshipData.subHeading}
          tasks={internshipData.tasks}
          qualifications={internshipData2.qualifications}
          label={"1"}
          backgroundImage={"/images/banner.jpg"}
        />
       <Row
          m={"l"}
          py={"xl"}
          flexDirection={["column", "row"]}
          width={"98%"}
          bg={"secondary"}
          justifyContent={"space-between"}
          alignItems={"center"}
          px={["s", "m"]}
          borderRadius={"m"}
        >
          <ApplySection
            heading={ApplySectionData1.heading}
            description={ApplySectionData1.description}
            
          />
          <CenterBox>
            <iframe
              src="https://lottie.host/embed/d11bd612-2169-4a1e-bed7-ad75ecbf7fa5/JtCPghDIUo.json"
              style={{ width: "500px", height: "340px", border: "none" }}
              title="Lottie Animation"
            ></iframe>
          </CenterBox>
        </Row>

        <ContentSection
          heading={internshipData3.heading}
          description={internshipData3.description}
          subHeading={internshipData3.subHeading}
          tasks={internshipData3.tasks}
          qualifications={internshipData4.qualifications}
          label={"2"}
          backgroundImage={"/images/nik.png"}
        />
        <Row
          m={"l"}
          py={"xl"}
          flexDirection={["column", "row"]}
          width={"98%"}
          bg={"secondary"}
          justifyContent={"space-between"}
          alignItems={"center"}
          px={["s", "m"]}
          borderRadius={"m"}
        >
          <ApplySection
            heading={ApplySectionData1.heading}
            description={ApplySectionData1.description}
            
          />
          <CenterBox>
            <iframe
              src="https://lottie.host/embed/d11bd612-2169-4a1e-bed7-ad75ecbf7fa5/JtCPghDIUo.json"
              style={{ width: "500px", height: "340px", border: "none" }}
              title="Lottie Animation"
            ></iframe>
          </CenterBox>
        </Row>
        
      </Row>
    </>
  );
};
