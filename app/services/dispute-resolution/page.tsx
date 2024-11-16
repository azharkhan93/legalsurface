"use client"

import { OurServices, TopBar } from "@/components";
import { ADMINISTRATION_DATA, DISPUTE__DATA, SERVICES_DATA } from "@/constants";

export default function Page() {
  return (
    <>
    <TopBar
        backgroundImage={"/images/pd.jpg"}
        aboutText={"Services"}
        whoWeAreText={"Dispute Resolution"}
      />
      <OurServices
      mainHeading="Dispute Resolution"
      subHeading="Dispute Resolution Practices Include"
      description="we specialize in resolving legal conflicts efficiently through dispute resolution methods such as arbitration, mediation, and negotiation. Our expert team provides tailored legal counsel to help clients avoid lengthy litigation, ensuring swift and fair outcomes. Whether you're facing business disputes, property conflicts, or contractual disagreements, we offer comprehensive legal support to achieve amicable solutions."
      servicesData={DISPUTE__DATA}
    />
     
    </>
  );
}
