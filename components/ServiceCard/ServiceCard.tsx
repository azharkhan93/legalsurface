import { Box, CenterBox, Text } from "@/components"; 
import Image from 'next/image';
import React from 'react';

type ServiceCardProps = {
    imageUrl: string;
    title: string;
    description: string;
}
 
export const ServiceCard: React.FC<ServiceCardProps> = ({ imageUrl, title, description }) => {
    return (
        <Box
        border={"2px solid white"}
        // width={"60%"}
        textAlign={"center"}
        // padding={"l"}
        py={"l"}
        px={"xl"}
        borderTopLeftRadius={"xl"}
        borderTopRightRadius={"xl"}
        
          borderBottomRightRadius={"xl"}
          alignItems={"center"}
            justifyContent={"center"}
            bg={"secondary"}
            
            
        >
           
            <CenterBox
            gap={15}
            // border={"2px solid green"}
            width={"100%"}
            >
                <Image
                    src={imageUrl}
                    alt="image"
                    width={95}
                    height={95}
                    style={{ borderRadius: "50%", border: "2px solid blue" }}
                />
            <Text color="primary">{title}</Text>
            <Text color="primary">{description}</Text>
            </CenterBox>

            
        </Box>
    );
};


