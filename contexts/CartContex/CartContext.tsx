import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  imageUrl: string;
  productName: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productName: string) => void;
  isCartVisible: boolean;
  setCartVisible: (visible: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartVisible, setCartVisible] = useState<boolean>(false);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
    setCartVisible(true);
  };

  const removeFromCart = (productName: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productName !== productName)
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, isCartVisible, setCartVisible }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("context api is not working");
  }
  return context;
};
