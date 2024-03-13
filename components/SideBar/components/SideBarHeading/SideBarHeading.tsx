import { Box, Text } from "@/components";

type SideBarHeading = {
  heading: string;
};

export const SideBarHeading: React.FC<SideBarHeading> = ({ heading }) => {
  return (
    <Box width={"90%"}>
      <Text color="grey" ml={"xxxl"} size={11}>
        {heading}
      </Text>
    </Box>
  );
};
