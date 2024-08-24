import { Box, Button, Row, Text } from "@/components";
import Image from "next/image";
import { AnimatedColumn, AnimatedRow } from "../styled/AnimationBox";
import { useInView } from "@/hooks/useInView";

export const About: React.FC = () => {
  const [refColumn, isInViewColumn] = useInView({ threshold: 0.1 });
  const [refRow, isInViewRow] = useInView({ threshold: 0.1 });
  return (
    <>
      <AnimatedColumn
      ref={refColumn}
      isInView={isInViewColumn}

        width={"100%"}
        height={"100vh"}
        alignItems={"flex-start"}
        style={{
          backgroundImage: `url('/images/banner.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Box
          bg={"whiteOverlay"}
          height={["", "100vh"]}
          py={["xxxl", "xl"]}
          width={["100%", "43%"]}
          px={["m", "xl"]}
          gap={["xl", "xxxl"]}
          justifyContent={["start", "center"]}
          borderBottomRightRadius={["xl", "none"]}
          borderBottomLeftRadius={["xl", "none"]}
        >
          <Text variant={"heading"} textAlign={"start"}>
            Expertise
          </Text>
          <Text variant={["subHeading", "heading"]}>
            Facilitating commercial legal solutions
          </Text>
          <Text variant={"body"}>
            Our expertise across diverse practice areas and sectors covers
            varied and nuanced needs. Backed by over 100 years of legal
            heritage, delighted clients from across the globe, and topical,
            commercial and specialised services, we deliver the best legal
            solutions for our clients
          </Text>
          <AnimatedRow
          ref={refRow}
          isInView={isInViewRow}
          flexDirection={["row", "row"]}
            width={"100%"}
            gap={["l", "header"]}
            justifyContent={"space-between"}
          >
            <Button
              variant="primary"
              py={["m", "m"]}
              px={["m", "xxl"]}
              borderTopLeftRadius={["none", "xl"]}
            >
              View Practice Areas
            </Button>
            <Button
              variant="primary"
              py={["s", "m"]}
              px={["m", "xxl"]}
              borderTopLeftRadius={["none", "xl"]}
            >
              Explore Practice Areas
            </Button>
          </AnimatedRow>
        </Box>
      </AnimatedColumn>
    </>
  );
};
