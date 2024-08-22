"use client";
import Image from "next/image";
import { Box, Text, Column, Button, Row, CenterBox } from "@/components";
import { FaClock, FaShoppingCart } from "react-icons/fa";
// import { useCart } from "@/contexts";
import { toast } from "react-toastify";
import { LoadingCard } from "../BlogSection/components/LoadingCard";

type ProductCardsProps = {
  imageUrl: string;
  productName: string;
  price: number;
  productDes: string;
  loading?: boolean; 
};

export const ProductCards: React.FC<ProductCardsProps> = ({
  imageUrl,
  productName,
  price,
  productDes,
  loading = false, 
}) => {
  
  // const { addToCart } = useCart();

  if (loading) {
    return <LoadingCard />; 
  }
  
  const handleAddToCart = () => {
    const product = {
      imageUrl,
      productName,
      price,
      quantity: 1,
    };
    // addToCart(product);
    toast.success(`${productName} has been added to the cart!`, {
      position: "top-right",
      theme: "dark",
    });
  };

  return (
    <Box
      gap={"xl"}
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
        <Image
          src={imageUrl}
          alt={productName}
          width={270}
          height={200}
          style={{ borderRadius: "20px" }}
        />
      </Box>
      <Column
        gap={"xl"}
        justifyContent="space-between"
        px={["s", "l"]}
        pb={"l"}
        width={"272px"}
      >
        <Text variant="body" color="primary">
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
          <Text variant="body" color="secondary">
            {productDes}
          </Text>
        </Row>
        <Text variant="body" color="primary">
          Price: ₹{price.toLocaleString("en-IN")} /Rs
        </Text>
        <CenterBox flexDirection={"row"} gap={"l"}>
          <Button
            variant="outline"
            width={"150px"}
            height={"30px"}
            onClick={handleAddToCart}
          >
            <FaShoppingCart size={20} />
            Add to Cart
          </Button>
        </CenterBox>
      </Column>
    </Box>
  );
};


