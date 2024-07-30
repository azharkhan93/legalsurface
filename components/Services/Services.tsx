import {
  Box,
  Row,
  ServicesCard,
  Text,
  CenterBox,
  Column,
  Button,
} from "@/components";

import { services } from "@/constants";

export const Services: React.FC = () => {
  return (
    <>
      <Box py={"xxxxl"} bg={"secondary"}>
        <Row
          py={"xxl"}
          px={"header"}
          justifyContent={"space-between"}
          alignItems={"start"}
          bg={"secondary"}
        >
          <Column gap={"m"}>
            <Text color={"primary"} variant={"heading"}>
              Our Services
            </Text>
            <Box
              height={"3px"}
              bg={"primary"}
              width={"70%"}
              ml={"header"}
              borderRadius={"circle"}
            ></Box>
            <Text color="primary" variant={"subHeading"}>
              What Our Clients Say
            </Text>
          </Column>

          <CenterBox width={"450px"}>
            <Text color="primary" variant="body">
              Discover how our services have positively impacted our clients
              experiences. Read their testimonials below to learn more.
            </Text>
          </CenterBox>
        </Row>
        <CenterBox
          gap={"l"}
          flexDirection={"row"}
          bg={"secondary"}
          py={"header"}
          flexWrap={"wrap"}
          width={"100%"}
        >
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              image={service.image}
              text={service.text}
              text2={service.text2}
            />
          ))}
          <CenterBox width={"100%"} mt={"xxl"}>
            <Button
              variant="outline"
              border={"none"}
              height={"40px"}
              width={"230px"}
              borderRadius={"circle"}
            >
              <Text variant={"body"}>View More</Text>
            </Button>
          </CenterBox>
        </CenterBox>
      </Box>
    </>
  );
};
