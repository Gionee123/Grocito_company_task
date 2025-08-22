"use client";
import React, { createContext, useEffect, useState } from "react";

export let cartContext = createContext();
export default function CartContext({ children }) {
  let [cart, setCart] = useState([]);

  useEffect(() => {
    let oldCartData = JSON.parse(localStorage.getItem("CART")) ?? [];
    setCart(oldCartData);
  }, []);

  useEffect(() => {
    localStorage.setItem("CART", JSON.stringify(cart));
  }, [cart]);

  let obj = {
    cart,
    setCart,
  };
  return <cartContext.Provider value={obj}>{children}</cartContext.Provider>;
}
