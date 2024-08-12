
"use client";
import { ProductCards, Row, TopBar, WaxingSection } from "@/components";

export default function Page() {
  return (
    <>
      <TopBar
        backgroundImage={"/images/home3.jpg"}
        aboutText={"Waxing"}
        whoWeAreText={"Explore Now"}
      />
      <WaxingSection />

       
    </>
  );
}
