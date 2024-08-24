import { Box, Text, Button } from "@/components";
import { IconType } from "react-icons";

type ServiceCardProps = {
  icon: IconType;
  title: string;
  description: string;
  link: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  link,
}) => (
  <Box
    bg="secondary"
    borderRadius="m"
    gap={"xl"}
    alignItems={"flex-start"}
    justifyContent={"center"}
    px={"m"}
    py={"m"}
    style={{
      backgroundImage: `url('/images/banner.jpg')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <Box fontSize="40px" color="white" mt={"s"}>
      <Icon />
    </Box>
    <Text variant="heading" color="white">
      {title}
    </Text>
    <Text variant="body" color="white">
      {description}
    </Text>
    <Button variant="primary" px={"xl"} py={"s"}>
      Learn More
    </Button>
  </Box>
);
