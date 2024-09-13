import { stats } from "@/constants";
import { Box, CenterBox, Column, Row, Text } from "../styled";
import { StatsCards } from "./components/StatsCards";

export const StatsSection = () => {
  return (
    <>
      <Column py={"xl"} width={"100%"} gap={"xxxl"} px={"s"}>
        <Column alignItems={"flex-start"} gap={"m"} px={"m"}>
          <Text variant={"heading"} fontWeight={"bold"} color={"secondary"}>
            Our Stats
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
        </Column>
        <Text
          color={"secondary"}
          variant={"body"}
          width={["100%", "800px"]}
          px={["none", "xl"]}
        >
          {`Legal Surface – Advocates & Solicitors is more than just a law firm; it is a testament to the
power of dedication, expertise, and an unwavering commitment to client advocacy. Our mission
is to uphold the principles of justice and provide our clients with the best possible legal solutions
in challenging times.`}
        </Text>
        <Row
          gap={"l"}
          flexDirection={["column", "row"]}
          py={"xl"}
          px={"xl"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {stats.map((stat, index) => (
            <StatsCards
              key={index}
              heading={stat.heading}
              subHeading={stat.subHeading}
            />
          ))}
        </Row>
      </Column>
    </>
  );
};
