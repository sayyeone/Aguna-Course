"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type CartItem = {
  name: string;
  category: string;
  price: number;
  qty: number;
  imgUrl: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  totalPrice: number;
  totalItems: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("sporton-cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to load cart", e);
      }
    }
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("sporton-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (newItem: CartItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.name === newItem.name
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].qty += newItem.qty;
        return updatedCart;
      }

      return [...prevCart, newItem];
    });
  };

  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const totalItems = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalPrice, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
