"use client";
import React, { useState } from "react";
import { Box, Button, CenterBox, Column, Row, StyledLink } from "@/components";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { NavbarData } from "@/constants";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Row
      justifyContent="space-between"
      alignItems="center"
      bg="secondary"
      position="relative"
      padding={["m", "s"]}
      top={0}
      borderRadius={["none", "circle"]}
      mx={["none", "header"]}
      px={["l", "xxl"]}
    >
      <CenterBox>
        <Image src="/images/logo.png" alt="Logo" width={70} height={70} />
      </CenterBox>

      <Box display={["block", "none"]} onClick={handleToggle}>
        <CiMenuFries size={30} color="white" />
      </Box>

      <Box
        display={["none", "flex"]}
        flex={1}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap="xxl"
      >
        {NavbarData.map((item, index) =>
          item.title === "Services" ? (
            <Box key={index} position="relative">
              <StyledLink
                onClick={handleDropdownToggle}
                style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}
              >
                {item.title}
                {dropdownOpen ? (
                  <FaChevronUp size={14} />
                ) : (
                  <FaChevronDown size={14} />
                )}
              </StyledLink>
              {dropdownOpen && (
                <Box
                zIndex={999}
                  position="absolute"
                  top={30}
                   left={0}
                  bg="secondary"
                 p={"l"}
                 width={"180px"}
                  borderRadius={"s"}
                  boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                >
                  <Column alignItems="start" gap={15} border={"2px solid green"} >
                    <StyledLink href="/service1" >Service 1</StyledLink>
                    <StyledLink href="/service2">Service 2</StyledLink>
                    <StyledLink href="/service3">Service 3</StyledLink>
                  </Column>
                </Box>
              )}
            </Box>
          ) : (
            <StyledLink key={index} href={item.link}>
              {item.title}
            </StyledLink>
          )
        )}
      </Box>

      <Button variant="primary" display={["none", "block"]}>
        hello
      </Button>

      {isOpen ? (
        <CenterBox
          width="100vw"
          height="100vh"
          flexDirection="column"
          bg="secondary"
          zIndex={50}
          p={"m"}
          display={["flex", "none"]}
          position="fixed"
          top={0}
          left={0}
        >
          <Box position="absolute" top={4} right={4} onClick={handleToggle}>
            <FaTimes size={28} color="white" />
          </Box>

          <Column
            alignItems="center"
            gap={8}
            justifyContent="center"
            fontSize="20px"
          >
            {NavbarData.map((item, index) =>
              item.title === "Services" ? (
                <Box key={index} position="relative">
                  <StyledLink
                    onClick={handleDropdownToggle}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {item.title}
                    {dropdownOpen ? (
                      <FaChevronUp size={16} />
                    ) : (
                      <FaChevronDown size={16} />
                    )}
                  </StyledLink>
                  {dropdownOpen ? (
                    <Box
                      position="absolute"
                      top="100%"
                      left={0}
                      bg="secondary"
                      p="m"
                      borderRadius="s"
                      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                    >
                      <Column alignItems="center" gap={2}>
                        <StyledLink href="/service1">Service 1</StyledLink>
                        <StyledLink href="/service2">Service 2</StyledLink>
                        <StyledLink href="/service3">Service 3</StyledLink>
                      </Column>
                    </Box>
                  ): null}
                </Box>
              ) : (
                <StyledLink key={index} href={item.link} onClick={handleToggle}>
                  {item.title}
                </StyledLink>
              )
            )}
          </Column>
          <Button display={["block", "none"]} variant="primary">
            hello
          </Button>
        </CenterBox>
      ): null}
    </Row>
  );
};
