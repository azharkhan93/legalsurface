// "use client"
import React from "react";
import { Box, CenterBox } from "@/components/styled";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BASE_COLORS } from "@/theme";

interface ModalProps {
  onClose: () => void;
  content: React.FC;
  width: string;
}
export const Modal: React.FC<ModalProps> = ({ onClose, content, width }) => {
  console.log(content);
  const Content = content;
  return (
    <CenterBox
      zIndex={50}
      width={"100%"}
      height={"100vh"}
      position={"fixed"}
      top={"0"}
      left={"0"}
      bg={"modalOverlayBg"}
    >
      <Box
        bg={"white"}
        width={width || "200px"}
        borderRadius={"xs"}
        alignItems={"center"}
        justifyContent={"space-between"}
        position={"relative"}
        boxShadow={BASE_COLORS.modalShadow}
      >
        <Box padding={"m"} position={"absolute"} right={0}>
          <FontAwesomeIcon
            icon={faTimes}
            style={{ cursor: "pointer", fontSize: "24px" }}
            onClick={onClose}
          />
        </Box>
        <Content />
      </Box>
    </CenterBox>
  );
};
