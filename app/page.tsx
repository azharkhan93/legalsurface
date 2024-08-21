"use client";
import {
  About,

  ClientReviews,
  HeroSection,
  LatestBlogs,
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

      <LatestBlogs />
      

      {/* <ServiceSection /> */}
      {/* <BookingSteps /> */}

      <ClientReviews /> 
      <NewsLetter />
      
    </>
  );
}
