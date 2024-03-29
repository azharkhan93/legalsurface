import React, { useEffect } from "react";
import { Column, GreyHoverBox, Text } from "@/components/styled";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type RowItemActionsProps = {
  openUpdateModal: () => void;
  onClose: () => void;
  openDeleteModal: () => void;
};

export const RowItemActions: React.FC<RowItemActionsProps> = ({
  onClose,
  openUpdateModal,
  openDeleteModal,
}) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.getElementById("modal");
      if (modal && !modal.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <Column
      zIndex={20}
      id="modal"
      borderRadius={"s"}
      bg={"primaryLight"}
      alignItems={"center"}
      justifyContent={"center"}
      position="absolute"
      right={"0"}
      bottom={"-65px"}
      overflow={"hidden"}
    >
      <GreyHoverBox
        justifyContent={"start"}
        flexDirection={"row"}
        alignItems={"center"}
        gap={"m"}
        width={"100%"}
        bg={"primary"}
        py={"m"}
        px={"xl"}
        onClick={openUpdateModal}
      >
        <FontAwesomeIcon icon={faPenToSquare} size="1x" color="white" />
        <Text variant="body" color={"white"}>
          Edit
        </Text>
      </GreyHoverBox>
      <GreyHoverBox
        justifyContent={"start"}
        alignItems={"center"}
        flexDirection={"row"}
        gap={"m"}
        width={"100%"}
        bg={"primary"}
        py={"m"}
        px={"xl"}
        onClick={openDeleteModal}
      >
        <FontAwesomeIcon icon={faTrashCan} size="1x" color="white" />
        <Text variant="body" color={"white"}>
          Delete
        </Text>
      </GreyHoverBox>
    </Column>
  );
};
