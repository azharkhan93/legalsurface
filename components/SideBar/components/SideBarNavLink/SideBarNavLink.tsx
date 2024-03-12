import { Row, Box } from "@/components";

type SideBarNavLink = {
  icon: string;
  label: string;
};

export const SideBarNavLink: React.FC<SideBarNavLink> = ({ icon, label }) => {
  return (
    <Row width={"95%"} height={"50px"} flexDirection={"row"}>
      <Box width={"5px"} height={"100%"} bg="primary"></Box>
      <Box width={"5px"} height={"100%"} bg="primary"></Box>
      <Box width={"5px"} height={"100%"} bg="primary"></Box>
    </Row>
  );
};
