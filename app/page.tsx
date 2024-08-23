"use client";
import {
  About,

  ClientReviews,
  Expertise,
  HeroSection,
  LatestBlogs,
  NewsLetter,
} from "@/components";

export default function Page() {
  return (
    <>
      <HeroSection />
       {/* <Services /> */}
       <Expertise />
       

      <About />
      

      <LatestBlogs />
      
      

      {/* <ServiceSection /> */}
      {/* <BookingSteps /> */}

      <ClientReviews /> 
      <NewsLetter />
      
    </>
  );
}
