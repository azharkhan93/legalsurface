import { CenterBox, Column, Button, Text, Box } from "@/components/styled";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
 
}

export const LawCards: React.FC<ServiceCardProps> = ({ title, description, imageSrc }) => {
  return (
    <Box
    
      width={["100%", "600px"]}
      position={["static", "relative"]}
      py={["xl", "xxxxl"]}
      // borderRadius={"m"} 
      alignItems={'center'}
      
    >
      <Image
        src={imageSrc}
        height={700}
        width={500}
        alt={title}
          layout="responsive"
        style={{ borderRadius: "5px",  boxShadow:
            "0px 4px 8px rgba(0, 0, 0, 0.4), 0px 2px 10px rgba(0, 0, 0, 0.3)",  
           
           }}
          
      />
      <Column
      
        bg={"modalOverlayBg"}
        gap={"l"}
        alignItems={"center"}
        justifyContent={"center"}
        width={["100%", "600px"]}
        color="white"
        position={["static", "absolute"]}
        // top={["initial", "15%"]}
        left={["initial", "0%"]}
        py={"xxxl"}
        px={["m", "xl"]}
        borderRadius={["m", "s"]}
        textAlign={["start", "center"]}
        style={{ boxShadow:
        "0px 4px 8px rgba(0, 0, 0, 0.4), 0px 2px 10px rgba(0, 0, 0, 0.3)",  
       
       }}
    
       
      >
        <Text variant={"heading"}>{title}</Text>
        <Text variant={"body"}>{description}</Text>
      </Column>
    </Box>
  );
};

