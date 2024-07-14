import { Box, CenterBox, Row, Text } from "@/components"; 
import {  FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';



 
export const NewsLetter = () => {
    return (
        <Box
        border={"2px solid white"}
        width={"100%"}
       
        p={"xl"}
       
          alignItems={"center"}
          flexDirection={"row"}
          justifyContent={"space-between"}
           
            
        >
           
           
          
               
                    <Row
            gap={20}
            
            width={"80%"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRight={"2px solid green"}
            height={"10vh"}
           
            >
    
                <FaFacebook  size={30}  />
                
                    <FaInstagram  size={30} />
                    <FaYoutube  size={30} />
                    <FaLinkedin  size={30} />
                   
                    </Row>
               
                
         
            <CenterBox
            gap={10}
            borderRight={"2px solid green"}
            width={"100%"}
            >
                <Image 
                    src="/images/hom.jpg" 
                    alt="logo image"
                    width={100} 
                    height={100}
                />
                 
                
           
            </CenterBox>
            <CenterBox
            gap={10}
            borderRight={"2px solid green"}
            width={"100%"}
            >
                 <Text>Opening Hours:</Text>
                 <Text>hjsjhjksjjdhkhj</Text>
                
           
            </CenterBox>

            
        </Box>
    );
};