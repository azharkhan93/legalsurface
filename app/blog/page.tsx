/* eslint-disable @next/next/no-img-element */
"use client";

import {  TopBar } from "@/components";
import { BlogSection } from "@/components/BlogSection";


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
