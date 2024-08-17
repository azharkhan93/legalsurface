"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  CenterBox,
  Column,
  Modal,
  Row,
  StyledLink,
  Text,
} from "@/components";
import {
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { NavbarData } from "@/constants";
import Image from "next/image";
import { Login } from "../Auth";
import { useAuth } from '@/contexts/AuthContext/AuthContext'; 

export const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
 const [navbarDropdownOpen, setNavbarDropdownOpen] = useState<number | null>(null);
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user, setUser } = useAuth(); 
  const isLoggedIn = Boolean(user); 

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavbarDropdownToggle = (index: number) => {
    setNavbarDropdownOpen(prev => (prev === index ? null : index));
  };

  const handleAvatarDropdownToggle = () => {
    setAvatarDropdownOpen(!avatarDropdownOpen);
  };

  const navigateTo = (link: string) => {
    router.push(link);
    setNavbarDropdownOpen(null);
    setAvatarDropdownOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCartClick = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
    } else {
      router.push("/cart");
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo'); 
    setUser(null); 
    router.push('/');
  };

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   router.push('/');
  // };

  return (
    <>
      <Row
        position="fixed"
        top={0}
        width={["100%", "90%"]}
        justifyContent="space-between"
        alignItems="center"
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

        <Box display={["flex", "none"]} flexDirection={"row"} gap={"xl"}>
          <Box
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"l"}
          >
            {isLoggedIn ? (
              <Box position="relative">
                <RxAvatar
                  size={35}
                  color="white"
                  onClick={handleAvatarDropdownToggle}
                  style={{ cursor: "pointer" }}
                />
                {avatarDropdownOpen && (
                  <Box
                    alignItems={"flex-start"}
                    position="absolute"
                    top={40}
                    right={0}
                    bg="primary"
                    p={"l"}
                    borderRadius={"s"}
                    border={"1px solid white"}
                    px={"xl"}
                  >
                    <Text
                      variant={"body"}
                      borderBottom={"2px solid black"}
                      onClick={handleLogout}
                      style={{ cursor: "pointer" }}
                    >
                      Logout
                    </Text>
                  </Box>
                )}
              </Box>
            ) : (
              <FaUser size={23} color="white" onClick={handleModalOpen} />
            )}
            <FaShoppingCart size={23} color="white" onClick={handleCartClick} />
          </Box>

          <Box onClick={handleToggle}>
            <CiMenuFries size={30} color="white" />
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
                    position="absolute"
                    top={30}
                    left={0}
                    bg="secondary"
                    p={"l"}
                    width={"180px"}
                    borderRadius={"s"}
                  >
                    <Column alignItems={"start"} gap={15}>
                      {item.dropdown.map((dropdownItem, idx) => (
                        <StyledLink
                          key={idx}
                          onClick={() => navigateTo(dropdownItem.link)}
                        >
                          {dropdownItem.title}
                        </StyledLink>
                      ))}
                    </Column>
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

        <Box display={["none", "flex"]} flexDirection={"row"} gap={"xl"}>
          <Box
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"l"}
          >
            {isLoggedIn ? (
              <Box position="relative">
                <RxAvatar
                  size={40}
                  color={"white"}
                  onClick={handleAvatarDropdownToggle}
                  style={{ cursor: "pointer" }}
                />
                {avatarDropdownOpen ? (
                  <Box
                    position="absolute"
                    top={45}
                    right={0}
                    bg="primary"
                    p={"l"}
                    borderRadius={"s"}
                    borderBottom={"2px solid black"}
                    px={"xl"}
                  >
                    <Text onClick={handleLogout} style={{ cursor: "pointer" }}>
                      Logout
                    </Text>
                  </Box>
                ): null}
              </Box>
            ) : (
              <FaUser
                size={23}
                color="white"
                onClick={handleModalOpen}
                style={{ cursor: "pointer" }}
              />
            )}
            <FaShoppingCart
              size={23}
              color="white"
              style={{ cursor: "pointer" }}
              onClick={handleCartClick}
            />
          </Box>

          {!isLoggedIn ? (
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
          ): null}
        </Box>

        {isOpen && (
          <CenterBox
            border={"4px solid black"}
            width="100vw"
            height="100vh"
            flexDirection="column"
            bg={"secondary"}
            zIndex={9999}
            display={["flex", "none"]}
            position="fixed"
            top={0}
            left={0}
            gap={"xxl"}
          >
            <CenterBox position={"absolute"} top={"none"} left={0}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </CenterBox>
            <Box
              position={"absolute"}
              top={"xxl"}
              right={"xl"}
              onClick={handleToggle}
              bg={"primary"}
              py={"s"}
              px={"s"}
              borderRadius={"circle"}
            >
              <FaTimes
                size={30}
                color="#2A3277"
                style={{ cursor: "pointer" }}
              />
            </Box>

            <Column
              alignItems={"center"}
              gap={"xl"}
              justifyContent={"center"}
              width={"100%"}
            >
              {NavbarData.map((item, index) =>
                item.dropdown ? (
                  <Box key={index} position={"relative"}>
                    <StyledLink
                      onClick={() => handleNavbarDropdownToggle(index)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Text variant={"body"}>{item.title}</Text>
                      {navbarDropdownOpen === index ? (
                        <FaChevronUp size={18} />
                      ) : (
                        <FaChevronDown size={18} />
                      )}
                    </StyledLink>
                    {navbarDropdownOpen === index && (
                      <Box
                        position="absolute"
                        top={"170%"}
                        left={0}
                        bg={"primary"}
                        borderRadius={"s"}
                        p={"l"}
                        width={"180px"}
                      >
                        <Column alignItems={"start"} gap={15}>
                          {item.dropdown.map((dropdownItem, idx) => (
                            <StyledLink
                              key={idx}
                              onClick={() => navigateTo(dropdownItem.link)}
                            >
                              {dropdownItem.title}
                            </StyledLink>
                          ))}
                        </Column>
                      </Box>
                    )}
                    
                  </Box>
                ) : (
                  <StyledLink
                    key={index}
                    onClick={() => navigateTo(item.link)}
                  >
                    {item.title}
                  </StyledLink>
                )
                
              )}
               
            
         
            </Column>
          </CenterBox>
        )}
      </Row>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        component={Login}
      />
      
    </>
  );
};



