import { ReactNode } from "react";
import { Box, Text } from "@/components";

type ApplySectionProps = {
  heading: string;
  description: string;
};

export const ApplySection: React.FC<ApplySectionProps> = ({
  heading,
  description,
}) => {
  return (
    <Box
      alignItems="flex-start"
      justifyContent="center"
      borderRadius={"m"}
      color="white"
      px={"m"}
      gap={"xl"}
      flexDirection={["column", "row"]}
      width={"100%"}
    >
      <Box
      gap={"xl"} 
      flexDirection={"column-reverse"}
      >
        <Text variant="subHeading" bg="grey" width={"200px"} borderRadius={"m"} textAlign={"center"} style={{cursor: "pointer"}}>{heading}</Text>
        <Text variant="body" width={["100%", "600px"]}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};
