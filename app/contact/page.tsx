"use client";
import { ContactSection, Mapsection, TopBar } from "@/components";

export default function Page() {
  return (
    <>
      <TopBar
        backgroundImage={"/images/home1.jpg"}
        aboutText={"Contact Us"}
        whoWeAreText={"Reach Out Us"}
      />
      <ContactSection />
      <Mapsection />
    </>
  );
}
