"use client";
import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, StyledInputBox } from "@/components";
import { Modal } from "../Modal";
import { BASE_COLORS } from "@/theme";
import { ActionBarButton } from "../ActionBarButton";

interface ActionBarProps {
  updateComponent: React.FC;
  width: string;
}

export const ActionBar: React.FC<ActionBarProps> = ({
  updateComponent,
  width,
}) => {
  const [isSearchIconVisible, setSearchIconVisibility] = useState(true);
  const [isModalVisible, setModalVisibility] = useState(false);

  const handleInputFocus = () => {
    setSearchIconVisibility(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchIconVisibility(e.target.value === "");
  };

  const handleAddNewClick = () => {
    setModalVisibility(true);
  };

  const handleCloseModal = () => {
    setModalVisibility(false);
  };

  return (
    <>
      <Box
        py={"m"}
        width={"100%"}
        bg={"white"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={"row"}
        borderRadius={"xs"}
        mx={"m"}
        px={"l"}
        boxShadow={BASE_COLORS.shadow}
      >
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
        >
          {isSearchIconVisible && (
            <FontAwesomeIcon
              icon={faSearch}
              style={{ position: "absolute", left: "0" }}
            />
          )}
          <StyledInputBox
            bg={"greyLight"}
            borderRadius={"circle"}
            border={"none"}
            placeholder={"Type something"}
            py={"m"}
            px={"m"}
            onFocus={handleInputFocus}
            onBlur={() => setSearchIconVisibility(true)}
            onChange={handleInputChange}
          />
        </Box>

        <ActionBarButton onClick={handleAddNewClick}>Add New</ActionBarButton>

        {isModalVisible && (
          <Modal
            onClose={handleCloseModal}
            content={updateComponent}
            width={width}
          />
        )}
      </Box>
    </>
  );
};
