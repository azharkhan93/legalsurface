"use client";

import { Box, Text, Button, CenterBox } from "@/components";
import { IconType } from "react-icons";
import Link from "next/link";

type ServiceCardProps = {
  icon: IconType;
  title: string;
  description: string;
  link: string;
  image: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  link,
  image,
}) => (
  <Box
    position="relative"
    borderRight={"5px solid grey"}
    borderLeft={"5px solid darkgrey"}
    borderRadius="m"
    gap={"xl"}
    alignItems={"flex-start"}
    justifyContent={"center"}
    px={"m"}
    py={"m"}
    style={{
      backgroundImage: `url('${image}')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <Box
      borderRadius={"s"}
      position="absolute"
      top={0}
      left={0}
      width="95%"
      height="100%"
      zIndex={1}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
    ></Box>

    {/* Content */}
    <Box fontSize="40px" color="white" mt={"s"} zIndex={2}>
      <Icon />
    </Box>
    <Text variant="heading" color="white" zIndex={2}>
      {title}
    </Text>
    <Text variant="body" color="white" zIndex={2}>
      {description}
    </Text>
    <CenterBox zIndex={2}>
      <Link href={link} passHref>
        <Button variant="primary" px={"xl"} py={"s"} borderRadius={"s"}>
          Learn More
        </Button>
      </Link>
    </CenterBox>
  </Box>
);


