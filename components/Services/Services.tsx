import { Box, Row, ServicesCard, Text, CenterBox, Column } from "@/components";

import { services } from "@/constants";

export const Services: React.FC = () => {
  return (
    <>
      <Row
        py={"xxl"}
        px={"header"}
        justifyContent={"space-between"}
        alignItems={"start"}
        bg={"secondary"}
      >
        <Column gap={"m"}>
          <Text color="primary" fontSize={"30px"}>
            Testimonial
          </Text>
          <Text color="primary" variant="heading">
            What Our Clients Say
          </Text>
        </Column>

        <CenterBox width={"450px"}>
          <Text color="primary" fontSize="xxlg">
            Discover how our services have positively impacted our clients
            experiences. Read their testimonials below to learn more.
          </Text>
        </CenterBox>
      </Row>
      <Row
        gap="l"
        alignItems={"center"}
        justifyContent={"center"}
        bg={"secondary"}
        py={"xxl"}
      >
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            image={service.image}
            text={service.text}
            text2={service.text2}
          />
        ))}
      </Row>
    </>
  );
};
