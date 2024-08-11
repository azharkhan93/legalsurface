import { Box, Column } from "@/components";
import { Loader } from "../Loader";
export const LoadingCard = () => (
  <Column
    width={{ xs: "100%", sm: "48%", md: "30%" }}
     border="2px solid #e0e0e0"
   overflow="hidden"
    bg="primaryLight"
    borderRadius={"lg"}
  >
    <Box 
    width={"100%"}
     height={"190px"}
    >
      <Loader />
    </Box>
    <Column alignItems="center"  justifyContent = "center " gap="l"  height="170px">
      <Loader />
      <Loader />
    </Column>
  </Column>
);
