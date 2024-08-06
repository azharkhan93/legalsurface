// cart page
"use client";
import { ProductCards, Row, TopBar } from "@/components";

export default function Page() {
  return (
    <>
      <TopBar
        backgroundImage={"/images/home3.jpg"}
        aboutText={"Waxing"}
        whoWeAreText={"Explore Now"}
      />

      <Row
        border={"2px solid green"}
        width={"100%"}
        alignItems={"center"}
         justifyContent={"center"}
        // px={"xl"}
        flexWrap={"wrap"}
         gap={"xxxl"}
      >
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
        <ProductCards
          imageUrl="/images/home3.jpg"
          productName="waxing full body"
          productDes={"Service Time: 40 Mins"}
          price={500}
        />
        <ProductCards
          imageUrl="/images/home3.jpg"
          productName="waxing full body"
          productDes={"Service Time: 40 Mins"}
          price={500}
        />
         <ProductCards
          imageUrl="/images/home3.jpg"
          productName="waxing full body"
          productDes={"Service Time: 40 Mins"}
          price={500}
        />
         <ProductCards
          imageUrl="/images/home3.jpg"
          productName="waxing full body"
          productDes={"Service Time: 40 Mins"}
          price={500}
        />
         <ProductCards
          imageUrl="/images/home3.jpg"
          productName="waxing full body"
          productDes={"Service Time: 40 Mins"}
          price={500}
        />
      </Row>
    </>
  );
}
