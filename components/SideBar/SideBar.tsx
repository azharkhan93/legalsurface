import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CenterBox, Box, Row, Column, Text, HoverBox } from "../styled";
import { SideBarSection } from "./components";
import { SideBarData } from "@/constants";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { BASE_COLORS } from "@/theme";

type SideBar = {
  handleCollapse: () => void;
  isOpen: boolean;
};

export const SideBar: React.FC<SideBar> = ({ handleCollapse, isOpen }) => {
  return isOpen ? (
    <Column width={"100%"} gap={"xxxxl"}>
      <Row height={"100px"}>
        <CenterBox width={"75%"}>
          <Text>Logo</Text>
        </CenterBox>
        <CenterBox width={"25%"}>
          <HoverBox p={"m"} onClick={handleCollapse} borderRadius={"circle"}>
            <FontAwesomeIcon icon={faAnglesLeft} size={"lg"} />
          </HoverBox>
        </CenterBox>
      </Row>
      <Column width={"100%"} gap={"xxxl"}>
        {SideBarData.map((data, index) => (
          <SideBarSection
            heading={data.heading}
            navLinks={data.navLink}
            key={index}
          />
        ))}
      </Column>
    </Column>
  ) : null;
};
