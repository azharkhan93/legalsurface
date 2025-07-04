import {
  Box,
  Button,
  CenterBox,
  Column,
 
  StyledInputBox,
  StyledLink,
  Text,
} from "@/components";
import React, { useState } from "react";

import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { NavbarData } from "@/constants";
import { useRouter } from "next/navigation";

// const navigateTo = (link: string) => {
//   router.push(link);
//   setIsOpen(false);
// };

export const Footer = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navigateTo = (link: string) => {
    router.push(link);
    setIsOpen(false);
  };
  return (
    <>
      <Box width={"100%"} bg={"secondary"} mt={"m"}>
        <CenterBox
          borderBottom={"2px solid white"}
          py={"xxl"}
          flexDirection={["column", "row"]}
          px={["s", "xxxl"]}
          mx={["none", "xxxxl"]}
          justifyContent={"space-between"}
          gap={"xxxl"}
        >
          <Column gap={"xl"}>
            <Text
              textAlign={"center"}
              variant={"heading"}
              color={"white"}
              width={"500px"}
            >
              Lets{" "}
              <span style={{ color: "darkgrey", fontSize: "40px" }}>
                Connect
              </span>{" "}
              There
            </Text>
          </Column>
          <Box
            alignItems={"flex-start"}
            justifyContent={"start"}
            position={"relative"}
            bg={"white"}
            py={"s"}
            width={"155px"}
            px={"s"}
            borderRadius={"circle"}
          >
            <FaArrowRight
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "20px",
              }}
            />
            <Button borderRadius={"circle"} py={"s"} px={"xl"}>
              Book know
            </Button>
          </Box>
        </CenterBox>

        <Box
          flexDirection={["column", "row"]}
          justifyContent={"space-between"}
      
          width={"100%"}
          py={"xxxxl"}
          gap={"xxl"}
          px={"m"}
        >
          <Column alignItems={"center"} justifyContent={"center"} gap={"xl"}>
            <Box>
              {/* <Image
              src="/images/logo.png"
              alt="Logo Missing"
              width={100}
              height={100}
            /> */}
            </Box>
            <Text variant={"subHeading"} color="white" textAlign={["start","center"]}>
              About Company
            </Text>
            

            <Text
              color={"white"}
              width={["100%","380px"]}
              textAlign={["start", "center"]}
              // px={"l"}
            >
              Welcome to where passion meets purpose. We are a dedicated team of
              professionals committed to striving to deliver excellence through
              our. With a strong foundation in,
            </Text>
            <CenterBox gap={"xl"} flexDirection={"row"} width={"100%"}>
              {/* <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={25} fill="white" />
              </a> */}
              <a
                href="https://www.facebook.com/profile.php?id=61573509342855"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={25} fill="white" />
              </a>
              <a
                href="https://www.linkedin.com/in/legal-surface-74217427b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={25} fill="white" />
              </a>
              <a
                href="https://www.youtube.com/@legalsurface-yv1dh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={25} fill="white" />
              </a>
            </CenterBox>
          </Column>
          <Box
            gap={"xl"}
            alignItems={["flex-start", "flex-start"]}
            // width={"390px"}
          >
            <CenterBox>
              <Text variant={"subHeading"} color="white">
                Useful Links
              </Text>
              
            </CenterBox>

            {NavbarData.map((item, index) => (
              <StyledLink key={index} onClick={() => navigateTo(item.link)}>
                {item.title}
              </StyledLink>
            ))}
          </Box>
          <Box gap={"xxxl"}>
            <Box alignItems={["flex-start", "flex-start"]}>
              <Text variant={"subHeading"} color={"white"}>
                Contact Us
              </Text>
           
            </Box>

            <Column justifyContent={"center"} gap={"xxxl"}>
              <Text variant="body" color="white">
                Contact Number: +91 9419007365
              </Text>
              <Text variant="body" color="white">
                Mail Us: legalsurface3@gmail.com
              </Text>
              <Text variant="body" color="white" width={["100%","250px"]}>
                Lambert Lane Wani Complex, Srinagr, J&K, 190001
              </Text>
            </Column>
          </Box>
          <Box

            gap={["l","xxxxl"]}
            alignItems={["flex-start", "center"]}
            width={"340px"}
            //  px={"xl"}
          >
            <Text variant="subHeading" color="white">
              Subscribe To
            </Text>
            <CenterBox
              position="relative"

            >
              <Box
                flexDirection={"row"}
                position={["relative","absolute"]}
                alignItems={["flex-start", "center"]}
                justifyContent={"center"}
                top="45%"
                gap={"xl"}

              >
                <StyledInputBox width={"260px"}>
                  
                </StyledInputBox>
                <FaArrowRight
                  size={37}
                  fill="white"
                  style={{
                    marginLeft: "-45px",
                    zIndex: "100",
                    background: "black",
                    padding: "4px",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                />
              </Box>
            </CenterBox>
          </Box>
        </Box>
      </Box>

      <CenterBox py={"m"} bg={"secondary"}>
        <Text variant={"body"} color={"white"}>
          © 2025 Legal Surface. All Rights Reserved
        </Text>
      </CenterBox>
    </>
  );
};
