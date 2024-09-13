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
      <Column
        
        bg={"secondary"}
        flexDirection={["column", "row"]}
        // border={"2px solid green"}
        py={["xxl", "header"]}
    
      >
        <Box
          flexDirection={["column", "row"]}
          justifyContent={"space-between"}
          gap={"l"}
          px={"xl"}
          
        >
          <Column gap={["xl", "m"]}>
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
            <Text color={"primary"} variant={"subHeading"}>
              Explore Our Services
            </Text>
          </Column>

          <Box width={["100%", "450px"]} alignItems={"flex-start"}
          justifyContent={"center"}
          border={"4px solid black"}
          >
            <Text color="primary" variant="body" >
            As noted by one of our senior lawyers, At Legal Surface, we dont just represent clients we
champion their causes with integrity and dedication. Our approach is grounded in meticulous
preparation and a relentless commitment to achieving justice.”
            </Text>
          </Box>
        </Box>
        <CenterBox
          gap={"l"}
          flexDirection={"row"}
          bg={"secondary"}
          py={["m", "header"]}
          // py={"header"}
          flexWrap={"wrap"}
          width={"100%"}
          mt={["xxxl", "none"]}
        >
          {/* {services.map((service, index) => (
            <ServicesCard
              key={index}
              image={service.image}
              text={service.text}
              text2={service.text2}
            />
          ))} */}
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
      </Column>
    </>
  );
};
