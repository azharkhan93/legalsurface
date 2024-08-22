"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  CenterBox,
  Column,
  Row,
  StyledLink,
  Text,
} from "@/components";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavbarData } from "@/constants";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (link: string) => {
    router.push(link);
    setIsOpen(false);
  };

  return (
    <>
      <Row
        position="fixed"
        top={0}
        width={["100%", "100%"]}
        justifyContent="space-between"
        alignItems="center"
        bg="grey"
        px={["s", "xxl"]}
        style={{
          zIndex: 50, // Make sure this is applied correctly
        }}
      >
        <CenterBox>
          <Image src="" alt="Logo" width={100} height={100} />
        </CenterBox>

        <Box display={["flex", "none"]} flexDirection="row" gap="xl">
          <Box onClick={handleToggle}>
            <RxHamburgerMenu size={30} color="white" />
          </Box>
        </Box>

        <Box
          display={["none", "flex"]}
          flex={1}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap="xxl"
        >
          {NavbarData.map((item, index) => (
            <StyledLink key={index} onClick={() => navigateTo(item.link)}>
              {item.title}
            </StyledLink>
          ))}
        </Box>

        <Button
          variant="primary"
          display={["none", "block"]}
          py="m"
          borderRadius="circle"
          px="xl"
          bg="black"
          style={{ background: "black", borderBottom: "3px solid White" }}
        >
          Book A Consultation
        </Button>

        {isOpen && (
          <Box
            alignItems="flex-start"
            justifyContent="center"
            width="100vw"
            height="100vh"
            bg="secondary"
            zIndex={9999}
            display={["flex", "none"]}
            position="fixed"
            top={0}
            left={0}
            gap="header"
            px="l"
          >
            <CenterBox position="absolute" top={0} left={0}>
              <Image src="" alt="Logo" width={100} height={100} />
            </CenterBox>
            <Box
              position="absolute"
              top="xxl"
              right="xl"
              onClick={handleToggle}
              bg="secondary"
              py="s"
              px="s"
              borderRadius="circle"
            >
              <FaTimes
                size={33}
                color="white"
                style={{ cursor: "pointer" }}
              />
            </Box>

            <Column
              gap="xxxl"
              width="100%"
            >
              {NavbarData.map((item, index) => (
                <StyledLink key={index} onClick={() => navigateTo(item.link)}>
                  {item.title}
                </StyledLink>
              ))}
            </Column>
          </Box>
        )}
      </Row>
    </>
  );
};






