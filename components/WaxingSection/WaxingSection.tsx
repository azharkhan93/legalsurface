import { ProductCards } from "../ProductCards";
import { Box } from "../styled";
import axios from "axios";
import { useState, useEffect } from "react";

type Product = {
  productDes: string;
  imageUrl: string;
  productName: string;
  price: number;
};

export const WaxingSection = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/getproducts"); 
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);
    return (
      <Box
      py={"header"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      flexDirection={"row"}
      gap={"xxxl"}
      >
        {products.map((product, index) => (
        <ProductCards
          key={index}
          imageUrl={product.imageUrl}
          productName={product.productName}
          productDes={product.productDes} 
          price={product.price}
        />
      ))}
      </Box>
    );
  };
