"use client"

import { CareersSection, OurServices, TopBar } from "@/components";

export default function Careers() {
  return (
    <>
    <TopBar
        backgroundImage={"/images/pd.jpg"}
        aboutText={"Careers"}
        whoWeAreText={"Explore Our Careers"}
      />
     <CareersSection />
    </>
  );
}