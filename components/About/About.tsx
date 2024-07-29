import { Box, CenterBox, Column, Row, Text } from "@/components";
import Image from "next/image";
import { FaHome, FaDollarSign, FaUsers, FaBroom } from "react-icons/fa";

export const About: React.FC = () => {
  return (
    <>
      <Row
        border={"2px solid green"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={"header"}
        py={"header"}
      >
        <Column
        gap={"l"}
        >
          <Text variant={"heading"} fontWeight={"bold"} color={"secondary"}>About Us</Text>
          <Text variant="subHeading"  fontWeight={"bold"} color={"secondary"}>Why Choose Us</Text>
        </Column>
        <CenterBox width={"450px"}>
          <Text color="secondary" fontSize="xxlg">
          We are here to provide you with best makeup services at home. Dont hesitate to reach out, and we will get back to you promptly.
          </Text>
        </CenterBox>
        
      </Row>
      <Row
       
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
        px={"header"}
        gap={"header"}
      >
        <CenterBox
        borderRadius={"m"}
        >
          <Image
            src={"/images/home3.jpg"}
            alt="image error"
            width={400}
            height={500}
            style={{borderRadius: "20px"}}
          ></Image>
        </CenterBox>
        <CenterBox
          flexWrap={"wrap"}
          flexDirection={"row"}
          gap={"xl"}
          
        >
          <Column
            alignItems={"start"}
            justifyContent={"start"}
           
            px={"l"}
            py={"l"}
            gap={"m"}
            width={"300px"}
          >
            <FaHome size={70} color="#2A3277" />
            <Text variant="heading">Home Services</Text>
            <Text variant="body" width={"290px"}>
              Experience the perfect blend of artistry and glamour enjoy our
              luxury salon services at home
            </Text>
          </Column>
          <Column
            alignItems={"start"}
            justifyContent={"start"}
            
            px={"l"}
            py={"l"}
            gap={"m"}
            width={"300px"}
          >
            <FaDollarSign size={70} color="#2A3277" />
            <Text variant="heading">Affordable Price</Text>
            <Text variant="body" width={"290px"}>
              Experience the perfect blend of artistry and glamour enjoy our
              luxury salon services at home
            </Text>
          </Column>
          <Column
            alignItems={"start"}
            justifyContent={"start"}
            
            px={"l"}
            py={"l"}
            gap={"m"}
            width={"300px"}
          >
            <FaUsers size={70} color="#2A3277" />
            <Text variant="heading">Professional Team</Text>
            <Text variant="body" width={"290px"}>
              Experience the perfect blend of artistry and glamour enjoy our
              luxury salon services at home
            </Text>
          </Column>
          <Column
            alignItems={"start"}
            justifyContent={"start"}
           
            px={"l"}
            py={"l"}
            gap={"m"}
            width={"300px"}
          >
            <FaBroom size={70} color="#2A3277" />
            <Text variant="heading">Clean And Hygiene</Text>
            <Text variant="body" width={"290px"}>
              Experience the perfect blend of artistry and glamour enjoy our
              luxury salon services at home
            </Text>
          </Column>
        </CenterBox>
      </Row>
    </>
  );
};
