"use client";
import React, { useState } from "react";
import { Box, Button, CenterBox, Column, Row, StyledLink } from "@/components";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { NavbarData } from "@/constants";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Row
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={"secondary"}
      position={"relative"}
      padding={"xl"}
      top={0}
      borderRadius={["none", "circle"]}
      mx={["none", "header"]}
    >
      <CenterBox>
        <Image src="" alt="" width={50} height={50} />
      </CenterBox>

      <Box display={["block", "block", "none"]} onClick={handleToggle}>
        {isOpen ? (
          <CiMenuFries size={30} color="white" />
        ) : (
          <CiMenuFries size={30} color="white" />
        )}
      </Box>

      <Box
        display={["none", "flex"]}
        flex={1}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"xxl"}
      >
        {NavbarData.map((item, index) => (
          <StyledLink key={index} href={item.link}>
            {item.title}
          </StyledLink>
        ))}
      </Box>

      <Button variant={"primary"} display={["none", "block"]}>
        hello
      </Button>

      {/* Mobile Menu */}
      {isOpen && (
        <CenterBox
          width={"100vw"}
          height={"100vh"}
          flexDirection={"column"}
          bg={"secondary"}
          zIndex={50}
          p={"m"}
          display={["flex", "flex", "none"]}
          position={"fixed"}
          top={0}
          left={0}
        >
          <Box position={"absolute"} top={4} right={4} onClick={handleToggle}>
            <FaTimes size={28} color="white" />
          </Box>

          <Column
            alignItems={"center"}
            gap={8}
            justifyContent={"center"}
            fontSize={"20px"}
          >
            {NavbarData.map((item, index) => (
              <StyledLink key={index} href={item.link} onClick={handleToggle}>
                {item.title}
              </StyledLink>
            ))}
          </Column>
          <Button display={["block", "none"]} variant={"primary"}>
            hello
          </Button>
        </CenterBox>
      )}
    </Row>
  );
};
