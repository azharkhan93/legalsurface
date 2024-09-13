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
          {`Founded in 2003, Legal Surface – Advocates &amp; Solicitors emerged from a vision to address the
pressing need for high-quality legal aid amid a crisis of inadequate representation. Recognizing
the gap in accessible and effective legal support for the public, our founder embarked on a
mission to create a law firm dedicated to providing exceptional legal services. What began as a
modest venture with a single legal professional has now grown into a dynamic team of over 50
experienced lawyers, each specializing in a diverse range of legal fields.`}

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

