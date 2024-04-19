// "use client"
import React from "react";
import { Box, CenterBox, StyledModal } from "@/components/styled";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BASE_COLORS } from "@/theme";

export type GenericUpdateComponentProps = {
  data?: any;
  onActionComplete: () => void;
};

type UpdateFormValues = {
  [key: string]: string | undefined;
};

type ModalProps = {
  onClose: () => void;
  content: React.FC<GenericUpdateComponentProps>;
  width: string;
  onActionComplete: () => void;
  updateFormValues: UpdateFormValues;
};
export const Modal: React.FC<ModalProps> = ({
  onClose,
  content,
  width,
  onActionComplete,
  updateFormValues,
}) => {
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
      <StyledModal
        bg={"white"}
        width={width || "200px"}
        borderRadius={"xs"}
        position={"relative"}
        boxShadow={BASE_COLORS.modalShadow}
        height="90%"
        overflowY={"scroll"}
      >
        <CenterBox
          padding={"m"}
          position={"absolute"}
          right={10}
          top={10}
          onClick={onClose}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </CenterBox>
        <Content onActionComplete={onActionComplete} data={updateFormValues} />
      </StyledModal>
    </CenterBox>
  );
};
