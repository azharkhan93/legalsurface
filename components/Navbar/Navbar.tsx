import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, CenterBox, Column, Modal, Row, StyledLink, Text } from "@/components";
import { FaChevronDown, FaChevronUp, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { NavbarData } from "@/constants";
import Image from "next/image";
import { Login } from "../Auth";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navigateTo = (link: string) => {
    router.push(link);
    setIsOpen(false); 
  };
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <><Row
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

      <Box display={["flex", "none"]} flexDirection={'row'} gap={"xl"}>

        <Box
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"l"}
        >
          <FaUser size={23} color="white" onClick={handleModalOpen} />
          <FaShoppingCart size={23} color="white" />
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
        {NavbarData.map((item, index) => item.dropdown ? (
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
                    <StyledLink key={idx} onClick={() => navigateTo(dropdownItem.link)}>
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
      <Box display={["none", "flex"]} flexDirection={'row'} gap={"xl"}>

        <Box
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"l"}
        >
          <FaUser size={23} color="white" onClick={handleModalOpen} />
          <FaShoppingCart size={23} color="white" />
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
      </Box>

      

      {isOpen ? (
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
            {NavbarData.map((item, index) => item.dropdown ? (
              <Box key={index} position={"relative"}>
                <StyledLink
                  onClick={handleDropdownToggle}
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Text variant={"body"}>{item.title}</Text>
                  {dropdownOpen ? (
                    <FaChevronUp size={18} />
                  ) : (
                    <FaChevronDown size={18} />
                  )}
                </StyledLink>
                {dropdownOpen ? (
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
                    <Column alignItems={"start"} gap={"l"} width={"150px"}>
                      {item.dropdown.map((dropdownItem, idx) => (
                        <StyledLink key={idx} onClick={() => navigateTo(dropdownItem.link)}>
                          <Text variant={"body"} color={"secondary"}>
                            {dropdownItem.title}
                          </Text>
                        </StyledLink>
                      ))}
                    </Column>
                  </Box>
                ) : null}
              </Box>
            ) : (
              <StyledLink key={index} onClick={() => navigateTo(item.link)}>
                <Text variant={"body"} color={"primary"}>{item.title}</Text>
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
    <Modal isOpen={isModalOpen} onClose={handleModalClose} component={Login} />
    </>
  );
};


