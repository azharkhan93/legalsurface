"use client";
import { ProductCards } from "@/components";

export default function Page() {
  return (
    <>
    <h1>hello</h1>
      
    <ProductCards 
        imageUrl="/images/home3.jpg"
        productName="Luxury Leo Repechage facial"
        productDes={"Service Time: 40 Mins"}
        price={200}       
        />
        <ProductCards 
        imageUrl="/images/home3.jpg"
        productName="waxing full body"
        productDes={"Service Time: 40 Mins"}
        price={500}       
        />
      
    </>
    
  );
}