"use client";
import { ContactSection, Mapsection, OurServices, TopBar } from "@/components";
import { SERVICES_DATA, TRIBUNAL_DATA } from "@/constants";

export default function Page() {
  return (
    <>
      <TopBar
        backgroundImage={"/images/nik.png"}
        aboutText={"Service Page"}
        whoWeAreText={"Armed Forces"}
      />

      <OurServices
        mainHeading="Armed Forces Tribunal & Defense Practice"
        subHeading="Our Armed Forces Tribunal Law Practices Include"
        description="We take pride in offering specialized legal services tailored to the needs of defense personnel, veterans, and their families. Our expert team provides top-notch representation and advisory services in Armed Forces Tribunal and Defense Law."
        servicesData={TRIBUNAL_DATA}
      />
    </>
  );
}
