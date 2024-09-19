import { CenterBox, Column, Button, Text, Box } from "@/components/styled";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const LawCards: React.FC<ServiceCardProps> = ({ title, description, imageSrc }) => {
  return (
    <Box  width={["100%", "470px"]} position={"relative"} py={["header","xxxxl"]}>
      <Image
        src={imageSrc}
        height={700}
        width={500}
        alt={title}
        layout="responsive"
        style={{ borderRadius: "5px" }}
      />
      <Column
      bg={"modalOverlayBg"}
        gap={"l"}
        alignItems={"center"}
        width={["100%", "470px"]}

        color="white"
        position={"absolute"}
        top={["30%", "35%"]}
        left={["0", "0%"]}
        py={"l"}
        px={["s", "xl"]}
        borderRadius={"s"}
        textAlign={["start", "center"]}
      >
        <Text variant={"heading"}>{title}</Text>
        <Text variant={"body"}>{description}</Text>
        <CenterBox >
          <Button textAlign={'center'} py={"s"} px={"xl"} variant={"primary"} style={{ borderRadius: "10px" }}>
            Start Exploring
          </Button>
        </CenterBox>
      </Column>
    </Box>
  );
};
