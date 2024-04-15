import React, { useState } from "react";
import { Box, CenterBox, Text, Row } from "@/components";

type ToggleButtonProps = {
  buttonText: string;
};

export const ToggleButton: React.FC = ({ buttonText }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <>
      <Row
        gap={"m"}
        border={"1px solid green"}
        alignItems={"center"}
        width={"30%"}
      >
        <Box
          bg={isOn ? "grey" : "primary"}
          border={"1px solid red"}
          width={"30%"}
          height={"18px"}
          borderRadius={"sm"}
          position={"relative"}
          onClick={toggleSwitch}
          style={{ cursor: "pointer" }}
        >
          <CenterBox
            bg={"white"}
            border={"1px solid yellow"}
            borderRadius={"circle"}
            width={"50%"}
            height={"16px"}
            position={"absolute"}
            left={isOn ? "0" : "calc(100% - 30px)"}
          />
        </Box>
        <Text variant={"body"} color={"primary"}>
          {" "}
          {buttonText}
        </Text>
      </Row>
    </>
  );
};
