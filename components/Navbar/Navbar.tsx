"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  CenterBox,
  Column,
  Row,
  StyledLink,
  Text,
} from "@/components";
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
      position="fixed"
      top={0}
      width={["100%", "90%"]}
      justifyContent="space-between"
      alignItems="center"
      justifyItems="center"
      bg="secondary"
      // padding={["none", "s"]}
      borderRadius={["none", "circle"]}
      mx={["none", "header"]}
      px={["m", "xxl"]}
      style={{
        zIndex: "50",
      }}
    >
      <CenterBox>
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  justifyContent: "center",
                }}
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
                  // zIndex={}
                  position="absolute"
                  top={30}
                  left={0}
                  bg="secondary"
                  p={"l"}
                  width={"180px"}
                  borderRadius={"s"}
                >
                  <Column alignItems={"start"} gap={15}>
                    <StyledLink href="/service1">Service 1</StyledLink>
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

      <Button
        variant={"primary"}
        display={["none", "block"]}
        py={"m"}
        borderRadius={"circle"}
        px={"xl"}
        bg={"primary"}
      >
        Book An Appointment
      </Button>

      {isOpen ? (
        <CenterBox
          width="100vw"
          height="100vh"
          flexDirection="column"
          bg="secondary"
          zIndex={9999}
          // p={"m"}
          display={["flex", "none"]}
          position="fixed"
          top={0}
          left={0}
          gap={"xxl"}
        >
          <CenterBox position={"absolute"} top={"none"} left={0}>
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
          </CenterBox>
          <Box
            position="absolute"
            top={"xxl"}
            right={"xl"}
            onClick={handleToggle}
            bg={"primary"}
            py={"s"}
            px={"s"}
            borderRadius={"circle"}
          >
            <FaTimes size={30} color="#2A3277" />
          </Box>

          <Column
            alignItems={"center"}
            gap={"xl"}
            justifyContent={"center"}
            fontSize={"40px"}
            border={"2px solid green"}
            width={"100%"}
          >
            {NavbarData.map((item, index) =>
              item.title === "Services" ? (
                <Box key={index} position={"relative"} border={"2px solid red"}>
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
                      top={"100%"}
                      left={0}
                      bg={"secondary"}
                      p={"m"}
                      borderRadius={"s"}
                    >
                      <Column alignItems="center" gap={2}>
                        <StyledLink href="/service1">Service 1</StyledLink>
                        <StyledLink href="/service2">Service 2</StyledLink>
                        <StyledLink href="/service3">Service 3</StyledLink>
                      </Column>
                    </Box>
                  ) : null}
                </Box>
              ) : (
                <StyledLink key={index} href={item.link} onClick={handleToggle}>
                  {item.title}
                </StyledLink>
              )
            )}
          </Column>

          <Button
            display={["block", "none"]}
            variant={"primary"}
            bg={"primary"}
            py={"s"}
          >
            Book An Appointment
          </Button>
        </CenterBox>
      ) : null}
    </Row>
  );
};
