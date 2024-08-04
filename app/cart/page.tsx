"use client"
import React from 'react';
import { Box, Button, Column, Text } from '@/components';
import { useCart } from '@/contexts';


export default function Page() {
  const { cart, removeFromCart } = useCart();

  return (
    <Box
      p="xl"
      width="100%"
      maxWidth="1200px"
    //   mx="auto"
    >
      <Column gap="l">
        <Text variant="body">Shopping Cart</Text>
        {cart.length === 0 ? (
          <Text variant="body">Your cart is empty.</Text>
        ) : (
          cart.map((item) => (
            <Box key={item.productName} p="m" borderBottom="1px solid #ddd">
              <Text variant="body" fontWeight="bold">
                {item.productName} - {item.quantity} x {item.price} /Rs
              </Text>
              <Text variant="body">Total: {item.quantity * item.price} /Rs</Text>
              <Button variant="outline" onClick={() => removeFromCart(item.productName)}>
                Remove
              </Button>
            </Box>
          ))
        )}
      </Column>
    </Box>
  );
};



