import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useAuth } from "../AuthContext/AuthContext";

type CartItem = {
  imageUrl: string;
  productName: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productName: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (user) {
      const storedCart = localStorage.getItem(`cart_${user.id}`);
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart_${user.id}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find(
        (cartItem) => cartItem.productName === item.productName
      );
      if (itemExists) {
        return prevCart.map((cartItem) =>
          cartItem.productName === item.productName
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, item];
    });
  };

  const removeFromCart = (productName: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productName !== productName)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
