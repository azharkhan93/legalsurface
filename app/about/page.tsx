"use client";

import { KnowUs, TopBar } from "@/components";

export default function Page() {
  return (
    <>
      <TopBar
        backgroundImage={"/images/topimg.webp"}
        aboutText={"Abot Us"}
        whoWeAreText={"Who We Are"}
      />
      <KnowUs />
    </>
  );
}
