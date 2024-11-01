"use client";
import React, { useState, useEffect } from "react";
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
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavbarData } from "@/constants";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [navbarDropdownOpen, setNavbarDropdownOpen] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false); 

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavbarDropdownToggle = (index: number) => {
    setNavbarDropdownOpen((prev) => (prev === index ? null : index));
  };

  const navigateTo = (link: string) => {
    router.push(link);
    setIsOpen(false);
    setNavbarDropdownOpen(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

  
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Row
        flexDirection={["row", "row"]}
        position="fixed"
        top={0}
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        bg={isScrolled ? "grey" : "transparent"} 
        px={["s", "xxl"]}
        style={{
          transition: "background-color 0.3s ease", 
          zIndex: 50,
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
          {NavbarData.map((item, index) =>
            item.dropdown ? (
              <Box key={index} position="relative">
                <StyledLink
                  onClick={() => handleNavbarDropdownToggle(index)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    justifyContent: "center",
                  }}
                >
                  {item.title}
                  {navbarDropdownOpen === index ? (
                    <FaChevronUp size={14} />
                  ) : (
                    <FaChevronDown size={14} />
                  )}
                </StyledLink>
                {navbarDropdownOpen === index && (
                  <Box
                    border="2px solid #D4BDE8"
                    position="absolute"
                    top={30}
                    left={0}
                    bg="secondary"
                    p="s"
                    py="l"
                    borderRadius="s"
                    alignItems={"center"}
                  >
                    <Box
                      alignItems="center"
                      gap={15}
                      flexDirection="row"
                      flexWrap="wrap"
                      width={"300px"}
                    >
                      {item.dropdown.map((dropdownItem, idx) => (
                        <StyledLink
                          key={idx}
                          onClick={() => navigateTo(dropdownItem.link)}
                        >
                          {dropdownItem.title}
                        </StyledLink>
                      ))}
                    </Box>
                  </Box>
                )}
              </Box>
            ) : (
              <StyledLink key={index} onClick={() => navigateTo(item.link)}>
                {item.title}
              </StyledLink>
            )
          )}
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

        
        {isOpen ? (
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

            <Column gap="xxxl" width="100%" alignItems={"flex-start"} justifyContent={"center"}>
              {NavbarData.map((item, index) =>
                item.dropdown ? (
                  <Box key={index} width="100%">
                    <StyledLink
                      onClick={() => handleNavbarDropdownToggle(index)}
                      style={{
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                      }}
                    >
                      {item.title}
                      {navbarDropdownOpen === index ? (
                        <FaChevronUp size={17} />
                      ) : (
                        <FaChevronDown size={17} />
                      )}
                    </StyledLink>
                    {navbarDropdownOpen === index && (
                      <Box
                      border={"3px solid red"}
                        p="s"
                        py="l"
                        borderRadius="s"
                        bg="white"
                        ml="l"
                        flexDirection={"row"}
                        flexWrap={"wrap"}
                        width={"260px"}
                      >
                        {item.dropdown.map((dropdownItem, idx) => (
                          <StyledLink
                          
                            key={idx}
                            onClick={() => navigateTo(dropdownItem.link)}
                            style={{ paddingLeft: '10px', color: "black" }}
                          >
                            {dropdownItem.title}
                          </StyledLink>
                        ))}
                      </Box>
                    )}
                  </Box>
                ) : (
                  <StyledLink key={index} onClick={() => navigateTo(item.link)}
                  style={{color: "white"}}
                  >
                    {item.title}
                  </StyledLink>
                )
              )}
            </Column>
          </Box>
        ): null}
      </Row>
    </>
  );
};








