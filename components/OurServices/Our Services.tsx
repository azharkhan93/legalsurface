
"use client";
import { TopBar } from "../TopBar";
import { Box, CenterBox, Column } from "../styled";

import { SERVICES_DATA } from "@/constants";
import { LawCards } from "./components/LawCards";

export const OurServices = () => {
  return (
    <>
      
      <Box
      justifyContent={"center"}
      border={"2px solid red"}
        flexWrap={"wrap"}
        gap={["l", "xxxxl"]}
        py={["xxxl","header"]}
        flexDirection={["column", "row"]}
        // width={"100%"}
        bg={"primary"}
      >
        {SERVICES_DATA.map((service) => (
          <Column key={service.id} alignItems={"center"} justifyContent={"space-between"}>
            <LawCards
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          </Column>
        ))}
      </Box>
    </>
  );
};





