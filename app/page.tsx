import { Box, Text } from "@/components/styled";

export default function Home() {
  return (
    <Box
      height={["100px", "300px"]}
      flexDirection={["row", "column"]}
      gap={"header"}
    >
      <Box>
        <Text>this is a text element</Text>
      </Box>
      <Box>2</Box>
      <Box>3</Box>
    </Box>
  );
}
