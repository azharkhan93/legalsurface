"use client"
import React from 'react';
import Image from 'next/image';
import { Box, Text, Column, Button, Row, CenterBox } from '@/components';
import { FaClock, FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts';

type ProductCardsProps = {
  imageUrl: string;
  productName: string;
  price: number;
  productDes: string;
}

export const ProductCards: React.FC<ProductCardsProps> = ({
  imageUrl,
  productName,
  price,
  productDes,
}) => {
  const router = useRouter();
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart({ imageUrl, productName, price, quantity: 1 });
    router.push('/cart'); 
  };

  return (
    <Box
      gap={"xl"}
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      overflow={"hidden"}
      flexDirection="column"
      alignItems="center"
      borderTopLeftRadius={"xl"}
      borderBottomRightRadius={"lg"}
      borderBottomLeftRadius={"lg"}
      border={"1px solid white"}
      bg={"secondary"}
    >
      <Box borderRadius={"sm"} position="relative">
        <Image src={imageUrl} alt={productName} width={270} height={200} style={{borderRadius: "20px"}}/>
      </Box>
      <Column gap={"xl"} justifyContent="space-between" px={"l"} pb={"l"}>
        <Text variant="body" color='primary'>
          {productName}
        </Text>
        <Row
          alignItems="center"
          justifyContent={"center"}
          gap={"m"}
          bg={"primary"}
          borderRadius={"circle"}
          py={"s"}
          px={"s"}
        >
          <FaClock size={20} />
          <Text variant="body" color='secondary'>
            {productDes}
          </Text>
        </Row>
        <Text variant="body" color="primary">
          Price: {price} /Rs
        </Text>
        <CenterBox flexDirection={"row"} gap={"l"}>
          <Button variant="outline" onClick={handleAddToCart}>
            <FaShoppingCart />
            View Product
          </Button>
          <Button variant="outline" onClick={handleAddToCart}>
            <FaShoppingCart />
            Add to Cart
          </Button>
        </CenterBox>
      </Column>
    </Box>
  );
};




