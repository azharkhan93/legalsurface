"use client"
import { Box, Row, Text, Column, StyledLink, CenterBox, Button } from "@/components";
import Image from 'next/image';



export const HeroSection = () => {
    return (
        <CenterBox
        // style={{backgroundImage: "url(/images/hom.jpg)"}}

         justifyContent={"space-between"}
        flexDirection={"row"}
        padding={"xlg"}
       
            height={"90vh"}
            backgroundImage={"/images/hom.jpg"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            backgroundColor={"primaryLight"}
        >
            
            <Column
                textAlign={"center"}
                maxWidth={"600px"}
            >
                <Text fontSize={"40px "} textShadow={"-moz-initial"} fontWeight={"bold"} fontFamily={""} >hello</Text>
                <Text fontSize={"30px"} >hello njkdjkjdkkjddkdlkdk</Text>
                <CenterBox
                
                >
                    <Button variant={"primary"} borderRadius = {"circle"} width={"200px"} >hello</Button>

                
                </CenterBox>
                
                
            </Column>
            <Box 
            border={"2px solid green"}
            borderRadius={"xl"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={"row"}
            >
                
                <Image
                    src="/images/hom.jpg" 
                    alt="Description of the image"
                    width={300} // Adjust size as needed
                    height={300} // Adjust size as needed
                    style={{zIndex: "999", top: "90px", borderRadius: "20px"}}
                />
                <Image
                    src="/images/home3.jpg" 
                    alt="Description of the image"
                    width={450} 
                    height={620} 
                    
                />
            </Box>
            
            
        </CenterBox>
       
    );
};

