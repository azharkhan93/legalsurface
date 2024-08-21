"use client";
import {
  About,
  BookingSteps,
  ClientReviews,
  HeroSection,
  NewsLetter,
  ServiceSection,
  Services,
} from "@/components";

export default function Page() {
  return (
    <>
      <HeroSection />
       {/* <Services /> */}

      <About />
      

      {/* <ServiceSection /> */}
      {/* <BookingSteps /> */}

      <ClientReviews /> 
      <NewsLetter />
      
    </>
  );
}
