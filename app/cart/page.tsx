"use client";
import React from "react";
import { Box, Text, Button, TopBar, Row, Column } from "@/components";
import { useCart } from "@/contexts";

export default function Page() {
  const { cart, removeFromCart } = useCart();

  const calculateGrandTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <TopBar
        backgroundImage={"/images/home1.jpg"}
        aboutText={"Cart"}
        whoWeAreText={"View Cart"}
      />
      
      <Column  alignItems="center" 
      gap={"xl"}
      
      >
        <Text variant="heading" textAlign={"start"} mt={"xl"}>Shopping Cart</Text>
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
                <Row
                alignItems={"center"}
                justifyContent={"space-between"}
                >
                <Text variant="subHeading" fontWeight={"regular"}>{item.productName}</Text>
                <Text variant="body">Price: {item.price} /Rs</Text>
                </Row>
                <Row
                alignItems={"center"}
                justifyContent={"space-between"}
                >
                <Text variant="body">Quantity: {item.quantity}</Text>
                <Button
                  width="140px"
                  variant="outline"

                  onClick={() => removeFromCart(item.productName)}
                >
                  Remove from Cart
                </Button>
                </Row>
              </Box>
            ))
          ) : (
            <Text variant="subHeading" py={"l"}>Your cart is empty</Text>
          )}
        </Row>
        {cart.length > 0 ? (
          <>
            <Box width="90%"  textAlign="center"
            py={"xl"}
            alignItems={"flex-end"}
            gap={"xl"}
            >
              <Text variant="subHeading">
                Grand Total: {calculateGrandTotal()} /Rs
              </Text>
              <Button variant="outline" width={"24%"} 
              height={"35px"} onClick={() => alert("Proceed to Checkout")}
              >
              Checkout
            </Button>
            </Box>
            
          </>
        ) : null}
      </Column>
    </>
  );
}



