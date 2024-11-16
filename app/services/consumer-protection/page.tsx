"use client"

import { OurServices, TopBar } from "@/components";
import { CONSUMER_DATA, CORPORATE_LAW_DATA, SERVICES_DATA, TRIBUNAL_DATA } from "@/constants";

export default function Page() {
  return (
    <>
    <TopBar
        backgroundImage={"/images/pd.jpg"}
        aboutText={"Services"}
        whoWeAreText={"Consumer Protection "}
      />
      <OurServices
      mainHeading="Comprehensive Consumer Protection Services"
      subHeading="Our Comprehensive Consumer Protection Practices Include"
      description="We are dedicated to safeguarding the rights of consumers across various sectors. Our extensive range of consumer protection legal services is designed to address and resolve grievances effectively, ensuring justice and fair treatment for all our clients."
      servicesData={CONSUMER_DATA}
    />
     
    </>
  );
}