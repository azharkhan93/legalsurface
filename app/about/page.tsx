"use client";

import { Faq, KnowUs, NewsLetter, TopBar } from "@/components";
import { faqItems } from "@/constants";

export default function Page() {
  return (
    <>
      <TopBar
        backgroundImage={"/images/banner.jpg"}
        aboutText={"About Us"}
        whoWeAreText={"Who We Are"}
      />
      <KnowUs />
      <Faq items={faqItems} />
      <NewsLetter />
      
    </>
  );
}
