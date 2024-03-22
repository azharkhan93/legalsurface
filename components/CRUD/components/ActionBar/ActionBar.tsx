// "use client";
import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, StyledInputBox } from "@/components";
import { BASE_COLORS } from "@/theme";
import { ActionBarButton } from "../ActionBarButton";

interface ActionBarProps {
  updateComponent: React.FC;
  width: string;
  onAddNewClick: () => void;
   onCloseModal: () => void;

}

export const ActionBar: React.FC<ActionBarProps> = ({

  onCloseModal,
  onAddNewClick,
  

}) => {
  const [isSearchIconVisible, setSearchIconVisibility] = useState(true);

  const handleInputFocus = () => {
    setSearchIconVisibility(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchIconVisibility(e.target.value === "");
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
              style={{ position: "absolute", right: "0", marginRight: "15px" }}
            />
          )}
          <StyledInputBox
            bg={"greyLight"}
            borderRadius={"circle"}
            border={"none"}
            placeholder={"Search Anything"}
            py={"m"}
            px={"m"}
            onFocus={handleInputFocus}
            onBlur={() => setSearchIconVisibility(true)}
            onChange={handleInputChange}
          />
        </Box>

        <ActionBarButton onClick={onAddNewClick}>Add New</ActionBarButton>

      </Box>
    </>
  );
};
