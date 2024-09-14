"use client";
import { TopBar } from "../TopBar";
import { Box, CenterBox, Column, Text } from "../styled";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";

export const OurServices = () => {
  const { scrollY } = useScroll();

  const yTransform = useTransform(scrollY, [20, 300], [20, -100]);

  return (
    <>
      <TopBar
        backgroundImage={"/images/pd.jpg"}
        aboutText={"Services"}
        whoWeAreText={"Explore Our Services"}
      />
      <Box
        height={"100vh"}
        px={"m"}
        gap={"l"}
        py={"xl"}
        flexDirection={"row"}
        width={"100%"}
        bg={"primary"}
      >
        <Column alignItems={"center"} justifyContent={"space-between"}>
          <motion.div style={{ y: yTransform }}>
            <CenterBox
              bg={"primary"}
              width={["100%", "600px"]}
              position={"relative"}
            >
              <Image
                src={"/images/pd.jpg"}
                height={500}
                width={500}
                alt="Bail Applications"
                layout="responsive"
                style={{ borderRadius: "5px" }}
              />

              <Column
                gap={"l"}
                alignItems={"center"}
                width={["100%", "560px"]}
                bg={"secondary"}
                color="white"
                position={"absolute"}
                top={"80%"}
                left={"3%"}
                py={"l"}
                px={"xl"}
                borderRadius={"s"}
                textAlign={"center"}
              >
                <Text variant={"heading"}>
                  Anti-Corruption Cases Representation
                </Text>
                <Text variant={"body"}>
                  We offer specialized legal defense in anti-corruption cases,
                  representing clients accused under various anti-corruption
                  laws. Our firm handles cases involving public servants,
                  corporate entities, and private individuals, providing robust
                  representation during investigations, trials, and appeals to
                  ensure a fair legal process.
                </Text>
              </Column>
            </CenterBox>
          </motion.div>
        </Column>
      </Box>
    </>
  );
};




