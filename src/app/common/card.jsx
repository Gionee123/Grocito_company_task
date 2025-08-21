import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Card({ products, setProducts }) {
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
                    src={v.images}
                  />
                </Link>

                <h2 className="text-sm sm:text-base font-semibold mt-2 line-clamp-2">
                  {v.title}
                </h2>

                <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-2">
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Price: ${v.price}
                  </p>

                  <button className="mt-2 sm:mt-0 flex justify-end cursor-pointer hover:bg-red-200 rounded-full p-2">
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
    </>
  );
}
