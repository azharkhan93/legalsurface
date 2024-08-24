import { Box, CenterBox, Column, Row, Text } from "../styled";

type TopNavBarProps = {
  backgroundImage: string;
  aboutText: string;
  whoWeAreText: string;
}

export const TopBar: React.FC<TopNavBarProps> = ({
  backgroundImage,
  aboutText,
  whoWeAreText,
}) => {
  return (
    <Column
      alignItems={"center"}
      justifyContent={"center"}
      height={"500px"}
      width={"100%"}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Column px={["s","xl"]} mt={"header"} py={"xxlg"} width={"100%"} gap={"xxxl"} >
        
          
          <Text variant={"heading"} color={"primary"} fontWeight={"extraBold"} >
            {aboutText}
          </Text>
         
       
        <Row alignItems={["flex-start","center"]} gap={"m"} justifyContent={"center"}>
          <Text variant={"heading"} color="primary" fontWeight={"bold"}>
            {whoWeAreText}
          </Text>
          <Box
            height={"3px"}
            bg={"primary"}
            width={["60%", "12%"]}
            borderRadius={"circle"}
            ml={"header"}
          ></Box>
        </Row>
      </Column>
    </Column>
  );
};
