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
       {/* <Services /> */}
       <Expertise />
       

      <About />
      

      <LatestBlogs />
      <StatsSection />
      <ServiceSection />
      
      

      {/* <ServiceSection /> */}
      {/* <BookingSteps /> */}

      <ClientReviews /> 
      <NewsLetter />
      
    </>
  );
}
