'use client'
import Image from "next/image";
import Card from "./common/card";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "./context/CartContext";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  let { cart, setCart } = useContext(cartContext) // context api

  let [products, setProducts] = useState([]) // all product api
  let [categories, setCategories] = useState([]) // category list api
  let [catName, setCatName] = useState("")
  let [searchQuery, setSearchQuery] = useState("") // search query state

  let categoryList = () => {
    axios.get("https://dummyjson.com/products/category-list").then((res) => {
      console.log(res.data);
      setCategories(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  let getProducts = () => {
    if (searchQuery.trim()) {
      // Use search API when there's a search query
      axios.get(`https://dummyjson.com/products/search?q=${encodeURIComponent(searchQuery.trim())}`).then((res) => {
        console.log("Search results:", res.data);
        setProducts(res.data.products);
      }).catch((err) => {
        console.log(err);
      })
    } else if (catName === "") {
      // Get all products when no search and no category
      axios.get("https://dummyjson.com/products").then((res) => {
        setProducts(res.data.products);
      }).catch((err) => {
        console.log(err);
      })
    } else {
      // Get products by category when no search
      axios.get(`https://dummyjson.com/products/category/${catName}`).then((res) => {
        setProducts(res.data.products);
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    getProducts();
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Clear search when input is empty
    if (e.target.value.trim() === "") {
      getProducts();
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
                        md:min-h-screen overflow-x-auto md:overflow-y-auto bg-white md:bg-transparent">
          <div className="p-2 md:p-3">
            <h3 className="text-sm md:text-base font-semibold text-gray-700 mb-2 md:mb-3 px-2 md:px-0">Categories</h3>
            <ul className="flex md:flex-col gap-1 md:gap-2 text-[10px] md:text-[16px] overflow-x-auto md:overflow-x-visible">
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => setCatName(category)}
                  className={`cursor-pointer whitespace-nowrap hover:bg-gray-100 px-2 md:px-3 py-1 md:py-2 rounded-md transition-colors ${catName === category ? "bg-gray-200 font-semibold" : ""
                    }`}
                >
                  {category}
                </li>
              ))}
              <li
                onClick={() => setCatName("")}
                className={`cursor-pointer whitespace-nowrap hover:bg-gray-100 px-2 md:px-3 py-1 md:py-2 rounded-md transition-colors ${catName === "" ? "bg-gray-200 font-semibold" : ""
                  }`}
              >
                All data
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-2 md:p-3">
          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-md p-3 md:p-4 mb-4 md:mb-6">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm md:text-base" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-9 md:pl-10 pr-4 py-2 md:py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-2 bg-blue-600 text-white text-sm md:text-base font-medium rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Search
              </button>
            </form>
          </div>

          {/* Product Grid */}
          <Card products={products} setProducts={setProducts} />
        </div>
      </div>
    </>
  );
}
