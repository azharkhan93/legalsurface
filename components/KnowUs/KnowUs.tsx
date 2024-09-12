import { useInView } from "@/hooks/useInView";
import { Box, Text, CenterBox, Button, Column, Row } from "@/components";
import Image from "next/image";
import { AnimationBox, AnimatedColumn, AnimatedRow } from "../styled/AnimationBox";

export const KnowUs = () => {
  const [refColumn, isInViewColumn] = useInView({ threshold: 0.1 });
  const [refRow, isInViewRow] = useInView({ threshold: 0.1 });

  return (
    <CenterBox
      bg={"secondary"}
      justifyContent={"space-between"}
      flexDirection={["column", "row"]}
      px={["m", "xl"]}
      py={"xxxl"}
    >
      <AnimatedColumn
        ref={refColumn}
        isInView={isInViewColumn}
        gap={"l"}
        py={"xl"}
      >
        <Text variant={"heading"} fontWeight={"bold"} color={"primary"}>
          About Us - Legal Surface
        </Text>
        <Text variant={"subHeading"} color={"primary"} textAlign={["start", "center"]}>
          We Believe In Transparency
        </Text>
        <Text
          textAlign={["start", "center"]}
          variant={"body"}
          color={"primary"}
          width={["", "670px"]}
        >
          Welcome to Legal Surface Law Group, a family-owned law firm deeply
          rooted in the heart of Norman and extending its services to the
          wider area including Woodward and Oklahoma City. Since our inception,
          we have been dedicated to providing exceptional legal services with
          a particular focus on family law. Our journey is one of commitment,
          expertise, and a deep understanding of the law, all driven by our passion
          for justice and client support.
        </Text>
        <CenterBox mt={"l"}>
          <Button
            variant={"primary"}
            borderRadius={"circle"}
            py={"m"}
            background={"secondary"}
            px={"xxxl"}
          >
            Explore More
          </Button>
        </CenterBox>
      </AnimatedColumn>
      <AnimatedRow
        ref={refRow}
        isInView={isInViewRow}
        py={"xl"}
        px={["none", "l"]}
        border={"4px solid grey"}
        width={["100%", "35%"]}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"l"}
        bg={"white"}
      >
        <CenterBox gap={"xxl"} width={["", "300px"]}>
          <Image
            src="/images/hind.png"
            alt="slider image"
            width={500}
            height={390}
            style={{ borderRadius: "10px" }}
          />
        </CenterBox>
      </AnimatedRow>
    </CenterBox>
  );
};

