import { Box, CenterBox, Column, Row, Text } from "@/components";
import Image from "next/image";
import { FaStar, FaQuoteRight } from "react-icons/fa";
export const About: React.FC = () => {
  return (
    <>
      <Row
        border={"2px solid green"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={"header"}
        py={"xxlg"}
      >
        <Column>
          <Text>hello</Text>
          <Text>hello</Text>
        </Column>
        <CenterBox>
          <Text>hello hhhjhhhhhhh</Text>
        </CenterBox>
      </Row>
      <Row
        border={"2px solid green"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
        px={"header"}
        gap={"header"}
      >
        <CenterBox>
          <Image
            src={"/images/home3.jpg"}
            alt=""
            width={400}
            height={500}
          ></Image>
        </CenterBox>
        <CenterBox
          
          flexWrap={"wrap"}
          flexDirection={"row"}
          gap={"header"}
          border={"2px solid green"}
        >
          <Column alignItems={"start"} justifyContent={"start"} border={"2px solid green"} px={"l"} py={"l"} gap={"m"} width={"300px"}>
            <Image
              src={"/images/home3.jpg"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <Text variant="heading">Home Services</Text>
            <Text variant="body" width={"290px"}>Experience the perfect blend of artistry and glamour enjoy our luxury salon services at home</Text>
          </Column>
         
          
          
          
         
          
        </CenterBox>
      </Row>
    </>
  );
};
