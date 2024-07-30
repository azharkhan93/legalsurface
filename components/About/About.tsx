import { AboutCards, Box, Button, CenterBox, Column, Row, Text } from "@/components";
import Image from "next/image";
import { columnCardData } from "@/constants";


export const About: React.FC = () => {
  return (
    <>
      <Row
        alignItems={"center"}
        justifyContent={"space-between"}
        px={"header"}
        py={"header"}
      >
        <Column gap={"l"}>
          <Text variant={"heading"} fontWeight={"bold"} color={"secondary"}>
            About Us
          </Text>
          <Text variant={"subHeading"} fontWeight={"bold"} color={"secondary"}>
            Why Choose Us
          </Text>
        </Column>
        <CenterBox width={"450px"}>
          <Text color={"secondary"} variant={"body"}>
            We are here to provide you with best makeup services at home. Dont
            hesitate to reach out, and we will get back to you promptly.
          </Text>
        </CenterBox>
      </Row>
      <Row
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
        px={"header"}
        gap={"header"}
      >
        <CenterBox borderRadius={"m"}>
          <Image
            src={"/images/home3.jpg"}
            alt="image error"
            width={400}
            height={500}
            style={{ borderRadius: "20px" }}
          ></Image>
        </CenterBox>
        <CenterBox flexWrap={"wrap"} flexDirection={"row"} gap={"xl"}>
          {columnCardData.map((card) => (
            <AboutCards
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </CenterBox>
      </Row>
     
    </>
  );
};


