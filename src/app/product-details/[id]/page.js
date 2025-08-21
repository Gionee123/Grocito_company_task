"use client"
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [product, setProduct] = useState();

    let params = useParams()
    let paramsId = params.id
    console.log("paramsId", paramsId)

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${paramsId}`)
            .then((res) => {
                console.log("res", res.data)
                setProduct(res.data)
            }).catch((error) => {
                console.log("error", error)

            })

    }, [paramsId])

    return (

        <div className="max-w-[1170px] mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
            {/* Image + Info Grid */}
            <div className="grid md:grid-cols-2 gap-6">


                <div className="flex flex-col md:flex-row gap-4">
                    {/* Thumbnails */}

                    {/* Main Image */}
                    <div className="flex-1 flex items-center justify-center">
                        <img
                            src={product?.thumbnail || product?.images?.[0]}
                            alt={product?.title}
                            className="w-full max-h-[350px] object-contain rounded-lg shadow"
                        />
                    </div>
                    <div className="flex md:flex-col gap-2">
                        {product?.images?.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                className={`w-16 h-16 object-cover rounded-md border cursor-pointer ${product?.thumbnail === img ? "border-blue-500 ring-2 ring-blue-300" : "border-gray-200"}`}
                                onClick={() => setProduct({ ...product, thumbnail: img })}
                            />
                        ))}
                    </div>
                </div>



                <div>
                    <ul className='p-[12px] md:text-[16px] text-[10px]'>

                        <li className='text-red-800 my-[2px]'>title: <span className='text-[green]'>{product?.title}</span></li>
                        <li className='text-red-800 my-[2px]'>description: <span className='text-[green]'>{product?.description}</span></li>
                        <li className='text-red-800 my-[2px]'>price: <span className='text-[green]'>{product?.price}</span></li>
                        <li className='text-red-800 my-[2px]'>discountPercentage: <span className='text-[green]'>{product?.discountPercentage}</span></li>
                        <li className='text-red-800 my-[2px]'>rating: <span className='text-[green]'>{product?.rating}</span></li>
                        <li className='text-red-800 my-[2px]'>stock: <span className='text-[green]'>{product?.stock}</span></li>
                        <li className='text-red-800 my-[2px]'>category: <span className='text-[green]'>{product?.category}</span></li>

                        <li className='text-red-800 my-[2px]'>rating: <span className='text-[green]'>{product?.rating}</span></li>
                        <li className='text-red-800 my-[2px]'>stock: <span className='text-[green]'>{product?.stock}</span></li>

                    </ul>


                </div>
            </div>
        </div>


    )
}
