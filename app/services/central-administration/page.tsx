"use client"

import { OurServices, TopBar } from "@/components";
import { ADMINISTRATION_DATA, SERVICES_DATA } from "@/constants";

export default function Page() {
  return (
    <>
    <TopBar
        backgroundImage={"/images/pd.jpg"}
        aboutText={"Services"}
        whoWeAreText={"Central Administrative Tribunal"}
      />
      <OurServices
      mainHeading="Central Administrative Tribunal"
      subHeading="Central Administrative Tribuna Practices Include"
      description="we specialize in handling administrative disputes through the Central Administrative Tribunal (CAT). Our team of experienced advocates offers expert legal support to government employees and institutions involved in administrative conflicts. Below is a detailed overview of our CAT"
      servicesData={ADMINISTRATION_DATA }
    />
     
    </>
  );
}
