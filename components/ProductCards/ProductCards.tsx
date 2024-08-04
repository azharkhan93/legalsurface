import React from 'react';
import Image from 'next/image';
import { Box, Text, Column, Button, Row } from '@/components';
import { FaClock, FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts';

interface ProductCardsProps {
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
    
  };

  return (
    <Box
      mt="header"
      width={"450px"}
      gap={"l"}
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      ml={"header"}
      overflow={"hidden"}
      flexDirection="row"
      alignItems="center"
      borderTopLeftRadius={"xl"}
      borderBottomRightRadius={"lg"}
      borderBottomLeftRadius={"lg"}
      border={"2px solid red"}
      mb={"header"}
    >
      <Box borderRadius={"sm"} position="relative">
        <Image src={imageUrl} alt={productName} width={200} height={200} />
      </Box>
      <Column gap={"xl"} justifyContent="space-between">
        <Text variant="body" fontWeight="bold">
          {productName}
        </Text>
        <Row
          alignItems="center"
          justifyContent={"center"}
          gap={"m"}
          bg={"secondary"}
          borderRadius={"circle"}
          py={"s"}
          px={"s"}
        >
          <FaClock size={20} />
          <Text variant="body" fontWeight="bold">
            {productDes}
          </Text>
        </Row>
        <Text variant="body" color="secondary">
          Price: {price} /Rs
        </Text>
        <Button variant="outline" mt="auto" alignSelf="flex-end" onClick={handleAddToCart}>
          <FaShoppingCart />
          Add to Cart
        </Button>
      </Column>
    </Box>
  );
};



