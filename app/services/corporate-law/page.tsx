"use client"

import { OurServices, TopBar } from "@/components";
import { CORPORATE_LAW_DATA, SERVICES_DATA } from "@/constants";

export default function Page() {
  return (
    <>
    <TopBar
        backgroundImage={"/images/pd.jpg"}
        aboutText={"Services"}
        whoWeAreText={"Corporate Law Services"}
      />
      <OurServices
      mainHeading="Comprehensive Corporate Law Services"
      subHeading="Our Comprehensive Corporate Law Practices Include"
      description="we provide expert legal counsel on a broad range of corporate law matters in Jammu and Kashmir. Our dedicated team is equipped to handle complex corporate issues with precision, offering strategic guidance to help businesses navigate legal challenges and achieve their objectives"
      servicesData={CORPORATE_LAW_DATA}
    />
     
    </>
  );
}
