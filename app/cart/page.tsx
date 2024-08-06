"use client"
import React from 'react';
import { Box, Text, Column, Button, TopBar } from '@/components';
import { useCart } from '@/contexts';

export default function Page() {
  const { cart, removeFromCart } = useCart();

  return (
    <><TopBar backgroundImage={'/images/home1.jpg'} aboutText={'Cart'} whoWeAreText={'View Cart'} />
    <Box flexDirection="row" alignItems="center" p="l" mt={"header"}>
      <Text variant="heading">Shopping Cart</Text>
      {cart.map((item, index) => (
        <Box key={index} border="1px solid gray" p="m" my="m" width="100%">
          <Text variant="heading">{item.productName}</Text>
          <Text variant="body">Price: {item.price} /Rs</Text>
          <Text variant="body">Quantity: {item.quantity}</Text>
          <Button variant="outline" onClick={() => removeFromCart(item.productName)}>
            Remove from Cart
          </Button>
        </Box>
      ))}
    </Box></>
  );
};






