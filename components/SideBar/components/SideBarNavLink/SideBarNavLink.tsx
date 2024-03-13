import { Row, Box, Text, CenterBox } from "@/components";
import { StyledSideBarNavLink } from "@/components/styled/StyledSideBarNavLink";
import { SideBarData } from "@/constants";
import Image from "next/image";

type SideBarNavLink = {
  icon: string;
  label: string;
};

export const SideBarNavLink: React.FC<SideBarNavLink> = ({ icon, label }) => {
  return (
    <StyledSideBarNavLink
      width={"90%"}
      height={"50px"}
      gap={"l"}
      // bg="secondary"
      borderTopRightRadius={"circle"}
      borderBottomRightRadius={"circle"}
      justifyContent={"space-between"}
      // border={"1px solid green"}
    >
      <Box width={"5px"} height={"100%"} bg="primary"></Box>
      <Row
        width={"85%"}
        gap={"xxxl"}
        alignItems={"center"}
        justifyContent={"start"}
      >
        <CenterBox>
          <Image src={icon} alt={"icon"} width={40} height={40} />
        </CenterBox>
        <Box>
          <Text>{label}</Text>
        </Box>
      </Row>
    </StyledSideBarNavLink>
  );
};
