import React, { useState } from "react";
import { Box, CenterBox, Text, Row } from "@/components";

export const ToggleButton: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <>
    <Row
    gap = {"l"}
    >
    <Box
          bg={isOn ? "primary" : "grey"}
          border={"1px solid red"}
          width={"60px"}
          height={"25px"}
          borderRadius={"sm"}
          position={"relative"}
          onClick={toggleSwitch}
          style={{ cursor: "pointer" }}
      >
          <CenterBox
              bg={"white"}
              borderRadius={"circle"}
              width={"30px"}
              height={"23px"}
              position={"absolute"}
              left={isOn ? "0" : "calc(100% - 30px)"} />

      </Box>
      <Text variant={"body"} color = {"primary"}> Show On App</Text>
      </Row>
      </>
  );
};
