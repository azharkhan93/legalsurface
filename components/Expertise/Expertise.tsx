import { expertiseData, } from "@/constants";
import { Box, CenterBox, Column, Text } from "../styled";
import { ServicesCard } from "../ServicesCard";


export const Expertise = () => {
  return (
    <CenterBox
      width={"100%"}
      bg={"grey"}
      flexDirection={"column"}
      gap={"xxxxl"}
      py={"header"}
      px={["m", "none"]}
    >
      <Text variant={"heading"} textAlign={"center"} color="white"
     
      >
        What Makes Us Unique
      </Text>
      <Box
     
        flexDirection={["column","row"]}
        width={"100%"}
        justifyContent={"center"}
        gap={["xl","header"]}
      >
        

        {expertiseData.map(({ Icon, heading, description }) => (
          <ServicesCard
            key={heading}
            Icon={Icon}
            heading={heading}
            description={description}
          />
        ))}
      </Box>
    </CenterBox>
  );
};
