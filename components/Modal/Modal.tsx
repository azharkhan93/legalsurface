import React from "react";
import { Box, CenterBox, StyledModal, Text } from "@/components/styled";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BASE_COLORS } from "@/theme";
import { Login } from "../Auth";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  component: React.FC;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, component: Component}) => {
  if (!isOpen) return null;

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
      <StyledModal
      
        bg={"secondary"}
        width={"45%"}
        borderRadius={"xs"}
        position={"relative"}
        boxShadow={BASE_COLORS.modalShadow}
        height="80%"
        overflowY={"scroll"}
      >
        <CenterBox
          padding={"m"}
          position={"absolute"}
          right={5}
          top={5}
          onClick={onClose}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faTimes} size="2x" color="#D4BDE8" />
        </CenterBox>
        <Component />
      </StyledModal>
    </CenterBox>
  );
};

