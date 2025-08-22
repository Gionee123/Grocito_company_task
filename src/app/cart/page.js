"use client"
import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../context/CartContext';
import Image from 'next/image';

export default function page() {

    let { cart, setCart } = useContext(cartContext);

    let [totalprice, setTotalprice] = useState(0); // total price ke liye
    let [totaltax, setTotaltax] = useState(0); // tax ke liye state
    let [pqty, setpqty] = useState(); // tax ke liye state


    useEffect(() => {
        let total = 0;

        for (let n of cart) {

            total = total + (n.price * n.qty);
        }
        let tax = (total * 5 / 100)
        setTotaltax(tax);
        setTotalprice(total);


    }, [cart])

    let deleteItem = (id) => {
        if (window.confirm("Are you sure you want to remove this item from cart?")) {
            let xyz = cart.filter((data) => data.id !== id);
            setCart(xyz);
        }
    };
    let quantitychange = (id, type) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                const newQty = type === "increment" ? item.qty + 1 : Math.max(item.qty - 1, 1);
                return { ...item, qty: newQty }; // naya object banao
            }
            return item;
        });
        setCart(updatedCart);
    };


    return (
        <div className="bg-gray-200 min-h-screen p-2">
            <h2 className="text-2xl font-bold py-4 text-center">Shopping Cart</h2>

            <div className="container mx-auto grid md:grid-cols-[75%_auto] grid-cols-1 gap-4">

                {/* Left Section */}
                <div className="p-2">
                    {/* Desktop Table */}
                    <div className="bg-white rounded-lg shadow-md p-4 w-full overflow-x-auto hidden sm:block">
                        <table className="w-full text-left min-w-[500px] md:min-w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-2 px-2">Product</th>
                                    <th className="py-2 px-2">Price</th>
                                    <th className="py-2 px-2">Quantity</th>
                                    <th className="py-2 px-2">Total</th>
                                    <th className="py-2 px-2">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.length > 0 ? cart.map((v, i) => (
                                    <tr className="border-b last:border-b-0" key={i}>
                                        <td className="py-4 px-2 flex items-center gap-3">
                                            <img
                                                src={v.thumbnail}
                                                alt={v.brand}
                                                width={50}
                                                height={50}
                                                className="rounded object-cover"
                                            />
                                            <span className="text-gray-800">{v.brand}</span>
                                        </td>
                                        <td className="py-4 px-2 align-middle">${v.price}</td>
                                        <td className="py-4 px-2 align-middle">
                                            <div className="flex items-center border rounded w-fit">
                                                <button
                                                    className="px-2 py-1 text-gray-500 hover:text-gray-700"
                                                    onClick={() => quantitychange(v.id, "decrement")}
                                                >-</button>
                                                <span className="px-3">{v.qty}</span>
                                                <button
                                                    className="px-2 py-1 text-gray-500 hover:text-gray-700"
                                                    onClick={() => quantitychange(v.id, "increment")}
                                                >+</button>
                                            </div>
                                        </td>
                                        <td className="py-4 px-2 align-middle">${(v.price * v.qty).toFixed(2)}</td>
                                        <td className="py-4 px-2">
                                            <button
                                                className="bg-red-500 text-white px-2 py-1 rounded-md"
                                                onClick={() => deleteItem(v.id)}
                                            >Delete</button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={5} className="text-center py-4">Cart is empty</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    {/* Mobile Card List */}
                    <div className="sm:hidden">
                        {cart.length > 0 ? (
                            <div className="flex flex-col gap-4">
                                {cart.map((v, i) => (
                                    <div key={i} className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={v.thumbnail}
                                                alt={v.brand}
                                                width={50}
                                                height={50}
                                                className="rounded object-cover"
                                            />
                                            <div>
                                                <div className="font-semibold text-gray-800">{v.brand}</div>
                                                <div className="text-gray-600 text-sm">${v.price}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center border rounded w-fit">
                                                <button
                                                    className="px-2 py-1 text-gray-500 hover:text-gray-700"
                                                    onClick={() => quantitychange(v.id, "decrement")}
                                                >-</button>
                                                <span className="px-3">{v.qty}</span>
                                                <button
                                                    className="px-2 py-1 text-gray-500 hover:text-gray-700"
                                                    onClick={() => quantitychange(v.id, "increment")}
                                                >+</button>
                                            </div>
                                            <div className="text-gray-700 font-semibold">
                                                Total: ${(v.price * v.qty).toFixed(2)}
                                            </div>
                                            <button
                                                className="bg-red-500 text-white px-2 py-1 rounded-md"
                                                onClick={() => deleteItem(v.id)}
                                            >Delete</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-lg shadow-md p-4 text-center text-gray-500">
                                Cart is empty
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Section */}
                <div className="p-2">
                    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm mx-auto">
                        <h3 className="text-lg font-semibold mb-4">Summary</h3>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-700">Subtotal</span>
                            <span className="text-gray-900">${totalprice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-700">Taxes</span>
                            <span className="text-gray-900">${totaltax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span className="text-gray-700">Shipping</span>
                            <span className="text-gray-900">$0.00</span>
                        </div>
                        <hr className="mb-4" />
                        <div className="flex justify-between mb-6">
                            <span className="font-semibold text-gray-900">Total</span>
                            <span className="font-bold text-lg text-gray-900">${(totalprice + totaltax).toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-200">
                            Checkout
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
}
