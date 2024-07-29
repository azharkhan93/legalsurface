"use client";
import {
  About,
  ClientReviews,
  HeroSection,
  ServiceSection,
  Services,
} from "@/components";

export default function Page() {
  return (
    <>
      <HeroSection />
      <Services />

      <About />

      <ServiceSection />

      <ClientReviews />
    </>
  );
}
