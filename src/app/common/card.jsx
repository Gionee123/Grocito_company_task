"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { cartContext } from "../context/CartContext";
import { toast, ToastContainer } from "react-toastify";

export default function Card({ products, setProducts }) {
  let { cart, setCart } = useContext(cartContext); // context api

  let AddToCart = (data) => {
    let { price, title, brand, thumbnail, id } = data;
    console.log("data", price, title, brand, thumbnail, id);

    let projectObj = {
      id,
      price,
      title,
      brand,
      thumbnail,
      qty: 1,
    };

    let filterData = cart.filter((data) => data.id == id);

    let finalData;

    if (filterData.length == 0) {
      finalData = [...cart, projectObj];
      setCart(finalData);
      toast.success("Product added to cart!", {
        position: "top-right",
        autoClose: 500,
      });
    } else {
      let finalData = cart.filter((data, index) => {
        if (data.id == id) {
          data["qty"] = data["qty"] + 1;
        }
        return data;
      });
      setCart(finalData);
      toast.success(title + " quantity updated successfully", {
        position: "top-right",
        autoClose: 500,
      });
    }
  };

  return (
    <>
      <div className="container my-12 mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((v, i) => (
              <div
                key={i}
                className="relative border rounded-lg shadow-md p-4 bg-white flex flex-col justify-between"
              >
                <Link href={`/product-details/${v.id}`}>
                  <img
                    alt={v.title}
                    className="h-40 w-full object-contain"
                    src={v.thumbnail}
                  />
                </Link>

                <h2 className="text-sm sm:text-base font-semibold mt-2 line-clamp-2">
                  {v.title}
                </h2>

                <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-2">
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Price: ${v.price}
                  </p>

                  <button
                    className="mt-2 sm:mt-0 flex justify-end cursor-pointer hover:bg-red-200 rounded-full p-2"
                    onClick={() => AddToCart(v)}
                  >
                    <span className="text-lg sm:text-xl text-gray-700">
                      <FaShoppingCart />
                    </span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products found
            </p>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
