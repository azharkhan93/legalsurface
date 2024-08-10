/* eslint-disable @next/next/no-img-element */
"use client";

import { BlogSection, TopBar } from "@/components";

export default function Home() {
  return (
    <>
      <TopBar
        backgroundImage={"/images/topimg.webp"}
        aboutText={"Blogs"}
        whoWeAreText={"Eplore Our New Blogs"}
      />
      <BlogSection />
    </>
  );
}
