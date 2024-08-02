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
     
      width="100%"
      height="400px"
      
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        
      }}
    >
      <Column  alignItems={"start"} justifyContent={"start"} width={"100%"}
     pt={'header'}
      gap={"xxxl"}
      pl={"header"}
      >
        <Text variant="heading"  color="primary"  >
          {aboutText}
        </Text>
        <Text variant="heading" color="primary"  >{whoWeAreText}</Text>
      </Column>
    </CenterBox>
  );
};
