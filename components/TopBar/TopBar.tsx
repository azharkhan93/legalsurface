import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CenterBox, HoverBox, Row } from "../styled";
import { faBarsStaggered, faUser } from "@fortawesome/free-solid-svg-icons";
import { StyledTopBar } from "../styled/StyledTopBar";

type TopBar = {
  handleCollapse: () => void;
  isOpen: boolean;
};

export const TopBar: React.FC<TopBar> = ({ handleCollapse, isOpen }) => {
  const _opacity = isOpen ? 0 : 1;
  return (
    <Row
      width={"100%"}
      height={"70px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={"header"}
      bg={isOpen ? "greyLight" : "primary"}
    >
      <HoverBox
        width={"50px"}
        height={"50px"}
        p={"m"}
        onClick={handleCollapse}
        borderRadius={"circle"}
        bg={"white"}
        style={{
          opacity: `${_opacity}`,
        }}
      >
        <FontAwesomeIcon icon={faBarsStaggered} />
      </HoverBox>
      <HoverBox
        width={"50px"}
        height={"50px"}
        p={"m"}
        borderRadius={"circle"}
        bg={"white"}
      >
        <FontAwesomeIcon icon={faUser} />
      </HoverBox>
    </Row>
  );
};
