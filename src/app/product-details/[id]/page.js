"use client"
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Page() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let params = useParams()
    let paramsId = params.id
    console.log("paramsId", paramsId)

    useEffect(() => {
        setLoading(true);
        setError(null);

        axios.get(`https://dummyjson.com/products/${paramsId}`)
            .then((res) => {
                console.log("res", res.data)
                setProduct(res.data)
                setLoading(false)
            }).catch((error) => {
                console.log("error", error)
                setError(error.response?.status === 404 ? 'Product not found' : 'Failed to load product')
                setLoading(false)
            })
    }, [paramsId])

    if (loading) {
        return (
            <div className="max-w-[1170px] mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
                <div className="flex items-center justify-center p-8">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading product details...</p>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="max-w-[1170px] mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
                <div className="flex items-center justify-center p-8">
                    <div className="text-center">
                        <div className="text-red-500 text-6xl mb-4">⚠️</div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Error Loading Product</h2>
                        <p className="text-gray-600 mb-4">{error}</p>
                        <button
                            onClick={() => window.history.back()}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    if (!product) {
        return (
            <div className="max-w-[1170px] mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
                <div className="flex items-center justify-center p-8">
                    <div className="text-center">
                        <p className="text-gray-600">No product data available</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-[1170px] mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
            {/* Image + Info Grid */}
            <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Thumbnails */}

                    {/* Main Image */}
                    <div className="flex-1 flex items-center justify-center">
                        <Image
                            src={product.thumbnail || product.images?.[0]}
                            alt={product.title}
                            width={400}
                            height={350}
                            className="w-full max-h-[350px] object-contain rounded-lg shadow"
                        />
                    </div>
                    <div className="flex md:flex-col gap-2">
                        {product.images?.map((img, idx) => (
                            <Image
                                key={idx}
                                src={img}
                                alt={`${product.title} thumbnail ${idx + 1}`}
                                width={64}
                                height={64}
                                className={`w-16 h-16 object-cover rounded-md border cursor-pointer ${product.thumbnail === img ? "border-blue-500 ring-2 ring-blue-300" : "border-gray-200"}`}
                                onClick={() => setProduct({ ...product, thumbnail: img })}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <ul className='p-[12px] md:text-[16px] text-[10px]'>
                        <li className='text-red-800 my-[2px]'>title: <span className='text-[green]'>{product.title}</span></li>
                        <li className='text-red-800 my-[2px]'>description: <span className='text-[green]'>{product.description}</span></li>
                        <li className='text-red-800 my-[2px]'>price: <span className='text-[green]'>{product.price}</span></li>
                        <li className='text-red-800 my-[2px]'>discountPercentage: <span className='text-[green]'>{product.discountPercentage}</span></li>
                        <li className='text-red-800 my-[2px]'>rating: <span className='text-[green]'>{product.rating}</span></li>
                        <li className='text-red-800 my-[2px]'>stock: <span className='text-[green]'>{product.stock}</span></li>
                        <li className='text-red-800 my-[2px]'>category: <span className='text-[green]'>{product.category}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
