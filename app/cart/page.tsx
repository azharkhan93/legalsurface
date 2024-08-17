"use client";
import React, { useEffect } from "react";
import { Box, Text, Button, TopBar, Row, Column, CenterBox } from "@/components";
import { useCart } from "@/contexts";
import router, { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { cart, removeFromCart } = useCart();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push('/');
    }
  }, [router]);

  useEffect(() => {
    console.log("Current Cart:", cart);
  }, [cart]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const grandTotal = calculateTotal();

  return (
    <>
      <TopBar
        backgroundImage={"/images/home1.jpg"}
        aboutText={"Cart"}
        whoWeAreText={"View Cart"}
      />

      <Column alignItems="center" gap={"xl"}>
        <Text variant="heading" textAlign={"start"} mt={"xl"}>
          Shopping Cart
        </Text>
        <Row
          width="100%"
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={"xl"}
          alignItems="flex-start"
        >
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <Box
                width={"350px"}
                px={"s"}
                key={index}
                border="1px solid gray"
                flexDirection="column"
                gap="l"
                py={"m"}
              >
                <Box alignItems={"flex-start"} justifyContent={"space-between"}>
                  <Text variant="body" fontWeight={"regular"}>
                    {item.productName}
                  </Text>
                  
                </Box>
                <Row alignItems={"center"} justifyContent={"space-between"}>
                  <Text variant="body">Quantity: {item.quantity}</Text>
                  <Text variant="body">
                    Price: ₹{item.price.toLocaleString("en-IN")} /Rs
                  </Text>
                  
                </Row>
                <CenterBox>
                <Button
                    width="140px"
                    variant="outline"
                    onClick={() => removeFromCart(item.productName)}
                  >
                    Remove from Cart
                  </Button>
                  </CenterBox> 
              </Box>
            ))
          ) : (
            <Text variant="subHeading" py={"l"}>
              Your cart is empty
            </Text>
          )}
        </Row>
        {cart.length > 0 ? (
          <Box
            width="90%"
            textAlign="center"
            py={"xl"}
            alignItems={"flex-end"}
            gap={"xl"}
          >
            <Text variant="subHeading">
              Grand Total: ₹{grandTotal.toFixed(2)} /Rs
            </Text>
            <Button
              variant="outline"
              width={"24%"}
              height={"35px"}
              onClick={() => alert("Proceed to Checkout")}
            >
              Checkout
            </Button>
          </Box>
        ) : null}
      </Column>
    </>
  );
}


