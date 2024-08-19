
"use client";

import {  TopBar } from "@/components";
import { BlogSection } from "@/components/BlogSection";


export default function Home() {
  return (
    <>
      <TopBar
        backgroundImage={"/images/banner.jpg"}
        aboutText={"Blogs"}
        whoWeAreText={"Eplore Our New Blogs"}
      />
      <BlogSection />
    </>
  );
}
