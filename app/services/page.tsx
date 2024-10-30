"use client"

import { OurServices, TopBar } from "@/components";
import { SERVICES_DATA } from "@/constants";

export default function Page() {
  return (
    <>
    <TopBar
        backgroundImage={"/images/pd.jpg"}
        aboutText={"Services"}
        whoWeAreText={"Explore Our Services"}
      />
      <OurServices
      mainHeading=" Criminal Law Practices"
      subHeading="Our Criminal Law Practices Include"
      description="We are a leading law firm specializing in criminal law in Jammu & Kashmir. Our experienced team of advocates offers expert legal representation across a wide range of criminal cases, including those in the High Court and district courts. With over 50 specialized lawyers, we are dedicated to delivering exceptional legal support to protect your rights and achieve the best possible outcomes."
      servicesData={SERVICES_DATA}
    />
     
    </>
  );
}


