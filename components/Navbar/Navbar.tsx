"use client";
import React, { useState } from 'react';
import { Box,  CenterBox, Row, Text, Column, StyledLink } from "@/components";
import styled from 'styled-components';
// import { FaBars, FaTimes } from 'react-icons/fa';
import { NavbarData } from '@/constants';



const Logo = styled.div`
  margin: 0 2rem;
`;

// const NavLinks = styled.div`
//   display: flex;
//   justify-content: center;
//   flex: 1;

//   a {
//     color: white;
//     text-decoration: none;
//     margin: 0 1rem;

//     &:hover {
//       text-decoration: underline;
//     }
//   }

//   @media (max-width: 768px) {
    
//     position: absolute;
//     top: 60px;
//     left: 0;
//     width: 100%;
//     background-color: #333;
//     padding: 1rem;
//     text-align: center;

//     a {
//       display: block;
//       margin: 1rem 0;
//     }
//   }
// `;

const Button = styled.button`
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-left: 2rem;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// const MenuIcon = styled.div`
//   display: none;
//   cursor: pointer;
//   margin-left: 2rem;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

const Navbar = () => {


  return (
    
    <Box
    
    flexDirection={"row"}
      justifyContent = {"space-between"}
      alignItems={"center"}
      bg={"secondary"}
      position={"relative"}
      padding={"xl"}
      top={0}
      borderRadius={"circle"}
      mx={"header"}
      


      >
        <Logo>
        <img src="/icons/checkbox.png" alt="Logo" width="50" />
      </Logo>
      
      {/* <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </MenuIcon> */}
      <CenterBox 
      flex={1}
      flexDirection={"row"}
      gap={"xxl"}
      
      >
        {NavbarData.map((item, index) => (
          <a key={index} href={item.link}>{item.title}</a>
        ))}
        
      </CenterBox>
      <Button>Button</Button>
    </Box>
  );
};

export default Navbar;

// import { Box,  CenterBox, Row, Text, Column, StyledLink } from "@/components";
// import Image from "next/image";
// import { Button } from "../styled/Button/Button";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { Menu } from "../Menu";
// import styled  from "styled-components";
// import { usePathname, useRouter } from "next/navigation";

// import { BASE_COLORS } from "@/theme/elements/color";
// import { BASE_SPACING } from "@/theme/elements/spacing";
// import { NavbarData } from "@/constants";
// import { backgroundColor } from "styled-system";

// const LogoWrapperStyled = styled(Box)`
//   &:hover {
//     transform: translateX(-2px) translateY(-2px);
//     transition: all 0.2s ease;
//   }
// `;

// type NavbarProps = {
//   bgColor: "primary" | "white";
//   underlineColor: string;
// };
// export const Navbar: React.FC<NavbarProps> = ({ bgColor, underlineColor }) => {
//   const pathName = usePathname();

//   const [activeIndex, setActiveIndex] = useState("/");
//   useEffect(() => setActiveIndex(pathName), [pathName]);
//   const router = useRouter();
//   const [isActive, setIsActive] = useState();
//   const [changeState, setChangeState] = useState(false);
//   const styles =
//     bgColor === "primary"
//       ? {
//           color: "black",
//           backgroundColor: "{BASE_COLORS.secondary}",
//           border: "2px solid white",
//         }
//       : {
//           color: "primary",
//           backgroundColor: "none",
//           border: `2px solid ${BASE_COLORS.secondary}`,
//         };

//   const Logosrc =
//     bgColor === "primary" ? "/svg/white_logo.svg" : "/svg/logo.svg";

//   const handlehamburgerClick = () => {
//     setChangeState(true);
//   };

//   const handleCloseClick = () => {
//     setChangeState(false);
//   };
//   return (
//     <CenterBox
//     border={"2px solid black"}
//       width="100%"
//       position="absolute"
//       top="0"
//       height={BASE_SPACING.header}
//       zIndex={5}
//       mb="xxlg"
//     //   backgroundColor={styles.backgroundColor}
//     >
//       <Row
//         justifyContent="space-between"
//         alignItems={"center"}
//         width="100%"
//         paddingY="xl"
//         paddingX={["xl", "xxxl"]}
//       >
//         <LogoWrapperStyled>
//           <Link href={"/"}>
//             <Image src={Logosrc} alt="Logo" width={50} height={50} />
//           </Link>
//         </LogoWrapperStyled>
//         <Row
//           width="80%"
//           justifyContent="space-between"
//           alignItems="center"
//           display={[
//             "none !important",
//             "none !important",
//             "none !important",
//             "flex !important",
//           ]}
//         >
//           <Row alignItems="center" gap="70px">
//             {NavbarData.map((data, index) => (
//               <Column gap="7px" key={index}>
//                 <StyledLink

                
//                   color={styles.color}
//                   href={data.link}
//                   $UnderlineColor={underlineColor}
//                   style={{ background: "black", border: "2px solid green" }}
//                 >
//                   {data.title}
//                 </StyledLink>
//                 {activeIndex === data.link ? (
//                   <Box
//                     width="100%"
//                     border={styles.border}
//                     borderRadius="xl"
//                   ></Box>
//                 ) : (
//                   " "
//                 )}
//               </Column>
//             ))}
//           </Row>
//           <CenterBox>
//             <GlowyButton
//               bg="black"
//               borderRadius="xs"
//               px="l"
//               py="s"
//               border="1px solid transparent" 
//               onClick={() => {
//                 if (typeof window !== "undefined") {
//                   localStorage.getItem("employer_token")
//                     ? router.push("/employer-dashboard/submit-job")
//                     : router.push("/pricing#post_job");
//                 }
//               }}
//               style={{
//                 cursor: "pointer",
//               }}
//             >
//               <Text color="primary" size={15}>
//                 Post a Job
//               </Text>
//             </GlowyButton>
//           </CenterBox>
//         </Row>
//         <Box display={["block", "block", "block", "none !important"]}>
//           <Image
//             src="/svg/bars-solid.svg"
//             alt="bars"
//             width={30}
//             height={30}
//             onClick={handlehamburgerClick}
//           />
//         </Box>
//         <Menu isVisible={changeState} hide={handleCloseClick} />
//       </Row>
//     </CenterBox>
//   );
// };

// const GlowyButton = styled(Button)`
//   /* position: relative; */
//   /* overflow: hidden; */

//   animation: glowingBorder 2s linear infinite;

//   @keyframes glowingBorder {
//     0% {
//       box-shadow: 0 0 5px ${BASE_COLORS.white};
//       border-color: ${BASE_COLORS.white};
//     }
//     25% {
//       box-shadow: 0 0 5px ${BASE_COLORS.white};
//       border-color: ${BASE_COLORS.white};
//     }
//     50% {
//       box-shadow: 0 0 5px ${BASE_COLORS.primary};
//       border-color: ${BASE_COLORS.primary};
//     }
//     75% {
//       box-shadow: 0 0 5px ${BASE_COLORS.white};
//       border-color: ${BASE_COLORS.white};
//     }
//     100% {
//       box-shadow: 0 0 5px ${BASE_COLORS.white};
//       border-color: ${BASE_COLORS.white};
//     }
//   }
// `;