"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CenterBox, Box, Row, Column, Text, HoverBox } from "../styled";
import { SideBarSection } from "./components";
import { SideBarData } from "@/constants";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { BASE_COLORS } from "@/theme";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";
import ProfileAnimation from "@/public/assets/lottie-animations/profile.json";

type SideBar = {
  handleCollapse: () => void;
  isOpen: boolean;
};

export const SideBar: React.FC<SideBar> = ({ handleCollapse, isOpen }) => {
  return isOpen ? (
    <Column width={"100%"} gap={"xl"}>
      <Row height={"100px"}>
        <CenterBox width={"100%"}>
          <Image
            src={"/assets/svgs/logo-transparent.svg"}
            alt={"Logo"}
            width={140}
            height={140}
          />
        </CenterBox>
        {/*   <CenterBox width={"25%"}>
       <HoverBox p={"m"} onClick={handleCollapse} borderRadius={"circle"}>
            <FontAwesomeIcon icon={faAnglesLeft} size={"lg"} />
          </HoverBox> 
        </CenterBox>*/}
      </Row>
      <CenterBox>
        <Player
          src={ProfileAnimation}
          autoplay
          loop
          style={{
            width: "200px",
            height: "130px",
          }}
        />
        {/* <Text variant="body">Admin</Text> */}
      </CenterBox>

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
