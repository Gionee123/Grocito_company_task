"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";

export default function Header() {
  let { cart, setcart } = useContext(cartContext); // context api

  return (
    <>
      <header className="w-full border-b-2 border-gray-200 sticky top-0 bg-white z-50">
        <div className="container mx-auto flex justify-between items-center ">
          {/* logo */}
          <div>
            <Link href="/">
              <Image
                src="/Grocito-High-Quality-Logo.png"
                alt="logo"
                width={100}
                height={50}
                className="w-[100px] h-[50px]"
              />
            </Link>
          </div>
          <div>
            <ul className="flex gap-2">
              <li>
                <Link href="/cart">
                  <div className="relative">
                    <FaShoppingCart className="text-2xl text-gray-800" />

                    {/* Badge */}
                    {cart.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
                        {cart.length}
                      </span>
                    )}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          {/* navigation */}
        </div>
      </header>
    </>
  );
}
