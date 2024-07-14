"use client"
import { Box, Row, Text, Column, StyledLink } from "@/components";
import Image from "next/image";
import { Button } from "../styled/Button/Button";

// import Logosrc from "../../public/svg/logo.svg";
import Link from "next/link";
import { NavbarData } from "@/constants";




export const Menu = ({ isVisible, hide }: any) => {
  return (
    <Box
      height="100vh"
      width="100vw"
      position="fixed"
      top={0}
      right={isVisible ? "0" : "-100vw"}
      bg="white"
      py="xl"
      px="xl"
      zIndex={100}
      style={{
        transition: "all 0.3s ease-in",
      }}
    >
      <Column justifyContent="center" gap="20px">
        {/* Logo and CLose Button */}
        <Row justifyContent="space-between" alignItems="center" pb="xxxl">
          {/* <Box>
            <Link href={"/"}>
              <Image src={Logosrc} alt="Logo" width={50} height={50} />
            </Link>
          </Box> */}
          <Box>
            <Image
              src="/images/close.png"
              alt="bars"
              width={30}
              height={30}
              onClick={hide}
            />
          </Box>
        </Row>
        {NavbarData.map((data, index) => (
          <StyledLink
            color="primary"
            key={index}
            href={data.link}
            $UnderlineColor="blue"
          >
            {data.title}
          </StyledLink>
        ))}
        <Box width="50%">
          <Button bg="primary" borderRadius="xs" px="l" py="s" border="none ">
            <Text color="white" size={15}>
              Post a Job
            </Text>
          </Button>
        </Box>
      </Column>
    </Box>
  );
};