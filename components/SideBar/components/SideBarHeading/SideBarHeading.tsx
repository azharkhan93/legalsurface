import { Box, Text } from "@/components";

type SideBarHeading = {
  heading: string;
};

export const SideBarHeading: React.FC<SideBarHeading> = ({ heading }) => {
  return (
    <Box width={"90%"}>
      <Text ml={"xxxxl"}>{heading}</Text>
    </Box>
  );
};
