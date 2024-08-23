"use client";
import {
  About,

  ClientReviews,
  Expertise,
  HeroSection,
  LatestBlogs,
  NewsLetter,
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
      
      

      {/* <ServiceSection /> */}
      {/* <BookingSteps /> */}

      <ClientReviews /> 
      <NewsLetter />
      
    </>
  );
}
