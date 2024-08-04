"use client";
import React from "react";
import { Box, Button, Column, Text } from "@/components";
import { useCart } from "@/contexts";

export const Cart: React.FC = () => {
  const { cart, removeFromCart, isCartVisible, setCartVisible } = useCart();

  return (
    <Box
      position="fixed"
      top="0"
      right="0"
      height="100vh"
      width="370px"
      bg="white"
      boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
      p="l"
      display={isCartVisible ? "block" : "none"}
      overflowY="scroll"
      style={{ zIndex: 1000 }}
      //   zIndex="1000"
    >
      <Button
        onClick={() => setCartVisible(false)}
        bg={"secondary"}
        style={{ position: "absolute", right: 0 }}
      >
        Close
      </Button>
      <Column gap="l">
        <Text variant="body" fontWeight="bold">
          Shopping Cart
        </Text>
        {cart.length === 0 ? (
          <Text variant="body">Your cart is empty.</Text>
        ) : (
          cart.map((item) => (
            <Box key={item.productName} p="m" borderBottom="1px solid #ddd">
              <Text variant="body" fontWeight="bold">
                {item.productName} - {item.quantity} x {item.price} /Rs
              </Text>
              <Text variant="body">
                Total: {item.quantity * item.price} /Rs
              </Text>
              <Button
                variant="outline"
                onClick={() => removeFromCart(item.productName)}
              >
                Remove
              </Button>
            </Box>
          ))
        )}
      </Column>
    </Box>
  );
};
