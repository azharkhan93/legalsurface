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
        flexDirection={["column","column"]}
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
            Our Opertaional Approach
            </Text>
            <Box
              height={"3px"}
              bg={"secondary"}
              width={"70%"}
              ml={"header"}
              borderRadius={"circle"}
            ></Box>
            <Text color={"secondary"} variant={"subHeading"}>
            Our Opertaional Approach
            </Text>
          </Column>

          <CenterBox width={["100%", "450px"]}>
            <Text color={"secondary"} variant={"body"}>
            Our operational approach is designed to pamper you from head to toe.
            We understand the importance of self-care and strive to provide you
            with the ultimate beauty experience
            </Text>
          </CenterBox>
        </Box>
        {/* <Column
          textAlign={"left"}
       
          gap={20}
          py={"xxl"}
        >
          <Text
          width={"390px"}
           variant={"subHeading"}
            fontWeight={"Bold"}
            color={"secondary"}
            
          >
            Our Opertaional Approach
          </Text>
          <Box
              height={"3px"}
              bg={"secondary"}
              width={"70%"}
              ml={"header"}
              borderRadius={"circle"}
            ></Box>
          <Text fontWeight={"bold"} variant={"subHeading"} color={"secondary"}>
            {" "}
            How We Operate
          </Text>
          <Text variant="body" color={"secondary"}>
            Our operational approach is designed to pamper you from head to toe.
            We understand the importance of self-care and strive to provide you
            with the ultimate beauty experience
          </Text>
          <CenterBox>
            <Button variant={"primary"} bg={"secondary"} width={"50%"}>
              Explore Now
            </Button>
          </CenterBox>
        </Column> */}
        <Box
       flexDirection={["column", "row"]}
       gap={["xxl", "xl"]}
       py={["m", "header"]}
      //  py={"header"}
       px={["xxxl", "header"]}

        >

        <ServiceCard
          imageUrl={"/images/hom.jpg"}
          title={"Home Services"}
          description={
            "We're here to provide you with best makeup services at home. Don't hesitate to reach out, and we'll get back to you promptly. Thank you for considering us"
          }
        />
        <ServiceCard
          imageUrl={""}
          title={"Clean & Hygienic"}
          description={
            "We prioritize hygiene and cleanliness to ensure your safety. Experience the peace of mind that comes with our commitment to cleanliness"
          }
        />
        <ServiceCard
          imageUrl={""}
          title={"We're Coming to You!"}
          description={
            "Our dedicated team is committed to providing you with exceptional service tailored to your needs. Thank you for considering us!"
          }
        />
        </Box>
      </Column>
      
    </Box>
  );
};
