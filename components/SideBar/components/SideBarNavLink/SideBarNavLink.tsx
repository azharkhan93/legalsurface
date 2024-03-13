import { Row, Box, Text, CenterBox } from "@/components";
import { StyledSideBarNavLink } from "@/components/styled/StyledSideBarNavLink";
import { SideBarData } from "@/constants";
import { BASE_COLORS } from "@/theme";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter } from "next/navigation";

type SideBarNavLink = {
  icon: IconProp;
  label: string;
  href: string;
};

export const SideBarNavLink: React.FC<SideBarNavLink> = ({
  icon,
  label,
  href,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <StyledSideBarNavLink
      width={"90%"}
      height={"35px"}
      gap={"l"}
      bg={pathname === href ? "primaryLight" : "transparent"}
      borderTopRightRadius={"circle"}
      borderBottomRightRadius={"circle"}
      justifyContent={"space-between"}
      onClick={() => router.push(href)}
    >
      {pathname === href ? (
        <Box width={"5px"} height={"100%"} bg="primary"></Box>
      ) : (
        <Box width={"5px"} height={"100%"}></Box>
      )}
      <Row
        width={"85%"}
        gap={"l"}
        alignItems={"center"}
        justifyContent={"start"}
      >
        <CenterBox>
          <FontAwesomeIcon
            icon={icon}
            color={pathname === href ? `${BASE_COLORS.primary}` : "black"}
          />
        </CenterBox>
        <Box>
          <Text
            font="body"
            size={14}
            color={pathname === href ? "primary" : "transparent"}
          >
            {label}
          </Text>
        </Box>
      </Row>
    </StyledSideBarNavLink>
  );
};
