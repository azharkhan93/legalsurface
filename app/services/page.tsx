"use client"

import { OurServices, TopBar } from "@/components";

export default function Page() {
  return (
    <>
    <TopBar
        backgroundImage={"/images/pd.jpg"}
        aboutText={"Services"}
        whoWeAreText={"Explore Our Services"}
      />
     <OurServices />
    </>
  );
}
