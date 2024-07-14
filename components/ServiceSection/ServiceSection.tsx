"use client"
import { Box, Row, Text, Column, CenterBox, Button, ServiceCard } from "@/components";
import Image from 'next/image';


export const ServiceSection = () => {
    return (
        <Box
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            bg={"primary"}
            padding={"xlg"}
            // height={"100vh"}

        >
            <CenterBox
            border={"2px solid white"}
            flexDirection={"row"}
            width={"100%"}
            gap={"70px"}
            py={"header"}
            >
            <Box
            // maxWidth={"500px"}
            textAlign={"left"}
            border={"2px solid green"}
            >
                <Text>what we dosdsdsdsddsjkjjkjjjjjhjjkhjkhjjhjhjkh</Text>
                <Text>what we dosdsdsdsdds</Text>
                <Text>ijjidjdkjsdkj</Text>
                <Button>hhhjjh</Button>
            </Box>

                <ServiceCard imageUrl={"/images/hom.jpg"} title={"ddfdfssssdsdds"} description={"fdddsddsdsss"} />
                <ServiceCard imageUrl={""} title={"ddfdfsdssss"} description={"fdddsdssdd"} />
                <ServiceCard imageUrl={""} title={"ddfdfssssd"} description={"fddsssddsdsd"} />
                

            </CenterBox>
            
           
           
            
            
            
        </Box>
    );
};