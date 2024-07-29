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
          <Text color="secondary" fontSize={"30px"}>Testimonial</Text>
          <Text color="secondary" variant="heading">What Our Clients Say</Text>
        </Column>

        <CenterBox width={"450px"}>
          <Text color="secondary" fontSize="xxlg">
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

