
import React from "react";
import { Box, CenterBox, Text, Row } from "@/components";

type ToggleButtonProps = {
  buttonText: string;
  active: boolean;
  onToggle: () => void;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({ buttonText, active, onToggle }) => {
  const toggleSwitch = () => {
    onToggle();
  };

  return (
    <>
      <Row
        gap={"m"}
        border={"1px solid green"}
        alignItems={"center"}
        width={"200px"}
      >
        <Box
          bg={active ? "grey" : "white"}
          border={"1px solid red"}
          width={"30%"}
          height={"18px"}
          borderRadius={"sm"}
          position={"relative"}
          onClick={toggleSwitch}
          style={{ cursor: "pointer" }}
        >
          <CenterBox
            bg={"primary"}
            border={"1px solid yellow"}
            borderRadius={"circle"}
            width={"50%"}
            height={"16px"}
            position={"absolute"}
            left={active ? "50%" : 0}
          />
        </Box>
        <Text variant={"body"} color={"primary"}>
          {buttonText}
        </Text>
      </Row>
    </>
  );
};

