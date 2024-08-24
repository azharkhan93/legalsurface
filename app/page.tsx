"use client";
import {
  About,
  ClientReviews,
  Expertise,
  HeroSection,
  LatestBlogs,
  NewsLetter,
  ServiceSection,
  StatsSection,
} from "@/components";

export default function Page() {
  return (
    <>
      <HeroSection />
      <Expertise />

      <About />

      <LatestBlogs />
      <StatsSection />
      <ServiceSection />

      <ClientReviews />
      <NewsLetter />
    </>
  );
}
