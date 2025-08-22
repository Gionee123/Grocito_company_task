"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaHeart,
  FaSearch,
} from "react-icons/fa";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";

export default function Header() {
  let { cart, setcart } = useContext(cartContext); // context api
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="w-full border-b-2 border-gray-200 sticky top-0 bg-white z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-blue-600 transition-colors p-2"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>

          {/* logo */}
          <div className="flex-1 flex justify-center md:justify-start">
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

          {/* Desktop Navigation */}

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <div className="relative">
                <FaShoppingCart className="text-2xl text-gray-800 hover:text-blue-600 transition-colors" />

                {/* Badge */}
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* Sidebar */}
        <div
          className={`fixed left-0 top-0 h-full w-4/5 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800">Grocito</h2>
            </div>
            <button
              onClick={closeMobileMenu}
              className="text-gray-500 hover:text-gray-800 transition-colors p-2"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-6">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/cart"
                  onClick={closeMobileMenu}
                  className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all"
                >
                  <FaShoppingCart className="text-xl" />
                  <span className="text-lg font-medium">
                    Cart ({cart.length})
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-600 text-sm">© 2024 Grocito</p>
              <p className="text-gray-500 text-xs mt-1">
                Your trusted shopping destination
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
