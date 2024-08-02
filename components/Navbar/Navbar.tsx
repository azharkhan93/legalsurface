"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  CenterBox,
  Column,
  Row,
  Text,
} from "@/components";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { NavbarData } from "@/constants";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavigation = (link: string) => {
    router.push(link);
    setIsOpen(false);
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
              <Text 
              color="secon"
                
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
              </Text>
              {dropdownOpen && (
                <Box
                  border={"1px solid white"}
                  position={"absolute"}
                  top={30}
                  left={0}
                  bg="secondary"
                  p={"l"}
                  width={"180px"}
                  borderRadius={"s"}
                >
                  <Column alignItems={"start"} gap={15} >
                    <Link href="/waxing">Waxing</Link>
                    <Link href="/service2">Service 2</Link>
                    <Link href="/service3">Service 3</Link>
                  </Column>
                </Box>
              )}
            </Box>
          ) : (
            <Link key={index} href={item.link}>
              {item.title}
            </Link>
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
        onClick={() => handleNavigation("/appointment")}
      >
        Book An Appointment
      </Button>

      {isOpen && (
        <CenterBox
          width="100vw"
          height="100vh"
          flexDirection="column"
          bg="secondary"
          zIndex={9999}
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
            width={"100%"}
          >
            {NavbarData.map((item, index) =>
              item.title === "Services" ? (
                <Box key={index} position={"relative"}>
                  <Text
                   
                    onClick={handleDropdownToggle}
                    style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Text variant={"body"}>{item.title}</Text>
                    {dropdownOpen ? (
                      <FaChevronUp size={18} />
                    ) : (
                      <FaChevronDown size={18} />
                    )}
                  </Text>
                  {dropdownOpen && (
                    <Box
                      position="absolute"
                      top={"170%"}
                      left={0}
                      bg={"primary"}
                      borderRadius={"s"}
                      px={"m"}
                      py={"xl"}
                      zIndex={9999}
                    >
                      <Column alignItems={"start"} gap={"xl"} width={"150px"}>
                        <Link href="/service1">Service 1</Link>
                        <Link href="/service2">Service 2</Link>
                        <Link href="/service3">Service 3</Link>
                      </Column>
                    </Box>
                  )}
                </Box>
              ) : (
                <Text
                  key={index}
                  as="button"
                  onClick={() => handleNavigation(item.link)}
                >
                  {item.title}
                </Text>
              )
            )}
          </Column>

          <Button
            display={["block", "none"]}
            variant={"primary"}
            bg={"primary"}
            py={"s"}
            onClick={() => handleNavigation("/appointment")}
          >
            Book An Appointment
          </Button>
        </CenterBox>
      )}
    </Row>
  );
};

