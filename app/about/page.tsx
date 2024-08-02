"use client";

import { Faq, KnowUs, TopBar } from "@/components";
import { faqItems } from "@/constants";

export default function Page() {
  return (
    <>
      <TopBar
        backgroundImage={"/images/topimg.webp"}
        aboutText={"Abot Us"}
        whoWeAreText={"Who We Are"}
      />
      <KnowUs />
      <Faq items={faqItems} />
    </>
  );
}
