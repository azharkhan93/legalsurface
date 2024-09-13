import { Box, Button, CenterBox, Row, Text } from "@/components";

import Image from "next/image";
import { AnimatedColumn, AnimatedRow } from "../styled/AnimationBox";
import { useInView } from "@/hooks/useInView";

export const NewsLetter = () => {
  const [refColumn, isInViewColumn] = useInView({ threshold: 0.1 });
  const [refRow, isInViewRow] = useInView({ threshold: 0.1 });

  return (
    <Box
      bg={"grey"}
      borderBottom={"1px solid #D4BDE8"}
      alignItems={"center"}
      flexDirection={["column", "row"]}
      justifyContent={"space-between"}
      py={["xxl", "xxxxl"]}
      mx={["none", "xxxxl"]}
      borderRadius={"lg"}
    >
      <AnimatedColumn
        ref={refColumn}
        isInView={isInViewColumn}
        gap={"xl"}
        width={["100%", "70%"]}
        py={"m"}
      >
      
        <Text
          variant={["body", "subHeading"]}
          color={"primary"}
          px={["s", "xl"]}
          textAlign={["center", "start"]}
        >
          {`For reliable and dedicated legal representation, trust Legal Surface – Advocates & Solicitors to
guide you through your legal challenges with expertise and unwavering support.`}
        </Text>
        <CenterBox>
          <Button
            variant="primary"
            py={"m"}
            px={"xl"}
            style={{ background: "black", borderBottom: "3px solid White" }}
          >
            Book A Consulation
          </Button>
        </CenterBox>
      </AnimatedColumn>

      <AnimatedRow ref={refRow} isInView={isInViewRow} width={["100%", "40%"]} position={"relative"}
      >
        <Image
          src="/images/pd.jpg"
          alt="logo image"
          width={400}
          height={320}
          style={{ borderRadius: "10px" }}
        />
      </AnimatedRow>
    </Box>
  );
};
