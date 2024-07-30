import { Box, CenterBox, Column, Row, SwiperSlides, Text } from "@/components";
import { SwiperSlide } from "swiper/react";

export const ClientReviews = () => {
  return (
    <Box py={"xl"} gap={"xxl"}>
      <Row
        py={"xxl"}
        px={"header"}
        justifyContent={"space-between"}
        alignItems={"start"}
      >
        <Column gap={"m"}>
          <Text color="secondary" variant="heading">Testimonial</Text>
          <Box
              height={"3px"}
              bg={"secondary"}
              width={"70%"}
              ml={"header"}
              borderRadius={"circle"}
            ></Box>
          <Text color="secondary" variant="subHeading">What Our Clients Say</Text>
        </Column>

        <CenterBox width={"450px"}>
          <Text color={"secondary"} variant={"body"} >
            Discover how our services have positively impacted our clients experiences. 
            Read their testimonials below to learn more.
          </Text>
        </CenterBox>
      </Row>

      <CenterBox py={"m"} flexDirection={"column"}>
        <SwiperSlides />
      </CenterBox>
    </Box>
  );
};

