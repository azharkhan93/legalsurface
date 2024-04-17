// "use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, StyledInputBox, Button } from "@/components";
import { BASE_COLORS } from "@/theme";

interface ActionBarProps {
  width: string;
  onAddNewClick: () => void;
  searchTerm?: Dispatch<SetStateAction<string>>;
}

export const ActionBar: React.FC<ActionBarProps> = ({
  onAddNewClick,
  searchTerm,
}) => {
  const [isSearchIconVisible, setSearchIconVisibility] = useState(true);

  const handleInputFocus = () => {
    setSearchIconVisibility(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchIconVisibility(e.target.value === "");
    searchTerm && searchTerm(e.target.value);
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
        px={"l"}
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
        <Button
          width={"150px"}
          height={"50px"}
          variant={"primary"}
          onClick={onAddNewClick}
        >
          Add New
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Box>
    </>
  );
};
