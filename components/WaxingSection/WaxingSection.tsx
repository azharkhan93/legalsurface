import { products } from "@/constants";
import { ProductCards } from "../ProductCards";
import { Box } from "../styled";

export const WaxingSection = () => {
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
