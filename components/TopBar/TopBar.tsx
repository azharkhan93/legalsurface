import { Box, CenterBox, Column, Text } from "../styled";

interface TopNavBarProps {
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
    <CenterBox
      mt={"header"}
      width="100%"
      height="300px"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        
      }}
    >
      <Column  alignItems={"start"} justifyContent={"start"} width={"100%"}
      gap={"xxxl"}
      >
        <Text variant="heading"  color="primary" >
          {aboutText}
        </Text>
        <Text variant="heading" color="primary" >{whoWeAreText}</Text>
      </Column>
    </CenterBox>
  );
};
