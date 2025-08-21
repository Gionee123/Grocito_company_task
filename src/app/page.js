'use client'
import Image from "next/image";
import Card from "./common/card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

  let [products, setProducts] = useState([])
  let [categories, setCategories] = useState([])

  let [catName, setCatName] = useState("")



  let categoryList = () => {

    axios.get("https://dummyjson.com/products/category-list").then((res) => {
      console.log(res.data);
      setCategories(res.data);
    }).catch((err) => {
      console.log(err);
    })

  }

  let getProducts = () => {
    if (catName === "") {

      axios.get("https://dummyjson.com/products").then((res) => {
        setProducts(res.data.products);
      }).catch((err) => {
        console.log(err);
      })
    }
    else {

      axios.get(`https://dummyjson.com/products/category/${catName}`).then((res) => {
        setProducts(res.data.products);
      }).catch((err) => {
        console.log(err);
      })
    }


  }

  useEffect(() => {
    categoryList()
  }, []);

  useEffect(() => {
    getProducts()

  }, [catName]);
  return (
    <>
      <div className="grid md:grid-cols-[18%_auto] grid-cols-1">
        {/* Sidebar */}
        <div className="border-b-2 md:border-b-0 md:border-r-2 border-gray-200 
                        md:min-h-screen overflow-x-auto md:overflow-y-auto">
          <ul className="flex md:flex-col gap-2 p-3 text-[10px] md:text-[16px]">
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => setCatName(category)}
                className={`cursor-pointer whitespace-nowrap hover:bg-gray-100 px-3 py-2 rounded-md ${catName === category ? "bg-gray-200 font-semibold" : ""
                  }`}
              >
                {category}
              </li>
            ))}
            <li
              onClick={() => setCatName("")}
              className={`cursor-pointer whitespace-nowrap hover:bg-gray-100 px-3 py-2 rounded-md ${catName === "" ? "bg-gray-200 font-semibold" : ""
                }`}
            >
              All data
            </li>
          </ul>
        </div>

        {/* Product Grid */}
        <div className="p-3">
          <Card products={products} setProducts={setProducts} />
        </div>
      </div>

    </>
  );
}
