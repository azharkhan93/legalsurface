import { Box, Text } from "@/components"; 
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
        width={"50%"}
        textAlign={"center"}
        padding={"l"}
        borderTopLeftRadius={"xl"}
        borderTopRightRadius={"xl"}
        
          borderBottomRightRadius={"xl"}
          alignItems={"center"}
            justifyContent={"center"}
        >
            <Box
            
                borderRadius={"circle"}
                width={"100px"}
                height={"100px"}
                border={"2px solid green"}
            >
                <Image
                    src={imageUrl}
                    alt="Description of the image"
                    width={95}
                    height={95}
                    style={{ borderRadius: "50%" }}
                />
            </Box>
            <Text>{title}</Text>
            <Text>{description}</Text>
        </Box>
    );
};


