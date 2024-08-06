"use client";
import React from "react";
import { Box, Text, Column, Button, TopBar } from "@/components";
import { useCart } from "@/contexts";

export default function Page() {
  const { cart, removeFromCart } = useCart();
  const calculateGrandTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <TopBar
        backgroundImage={"/images/home1.jpg"}
        aboutText={"Cart"}
        whoWeAreText={"View Cart"}
      />
      <Box flexDirection="column" alignItems="center" p="l">
        <Text variant="heading">Shopping Cart</Text>
        {cart.map((item, index) => (
          <Box key={index} border="1px solid gray" p="m" my="m" width="100%">
            <Text variant="heading">{item.productName}</Text>
            <Text variant="body">Price: {item.price} /Rs</Text>
            <Text variant="body">Quantity: {item.quantity}</Text>
            <Button
              variant="outline"
              onClick={() => removeFromCart(item.productName)}
            >
              Remove from Cart
            </Button>
          </Box>
        ))}
        <Box width="100%" p="m" my="m" textAlign="center">
          <Text variant="heading">
            Grand Total: {calculateGrandTotal()} /Rs
          </Text>
        </Box>
        <Button variant="outline" onClick={() => alert("Proceed to Checkout")}>
          Checkout
        </Button>
      </Box>
    </>
  );
}
