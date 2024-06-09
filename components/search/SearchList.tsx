"use client"
import Link from "next/link"
import { IProduct } from "@/models/IProduct"
//import { useSearchParams } from 'next/navigation'

import { Suspense } from 'react'
import { useQuery } from "@tanstack/react-query"

import ProductCard from "@/components/ProductCard"
import fetchData from "@/lib/fetchFunctions/fetchData"

export default function ProductsList() {
    //const searchParams = useSearchParams()
    let { data, isPending, isError, error } = useQuery({ queryKey: ['searchList'], queryFn: () => fetchData("") })
    if (data) {
        //data = data.filter((obj) => Object.values(obj).toString().toLowerCase().includes(searchParams.get("str") || ""))
        //data = data.filter(((obj)) => Object.values(obj).toString().toLowerCase().includes("men" || ""))
    }

    return (
        <>
            <Suspense>
                <div className="flex gap-3 flex-wrap p-3">
                    {/* <h1>{...params}</h1> */}
                    {
                        data ?
                            data.map((product:IProduct) =>
                                <Link key={product.id} href={`/product/${product.id}`}><ProductCard key={product.id} product={product}></ProductCard></Link>
                            )
                            :
                            <div>No products</div>
                    }
                </div>
            </Suspense>
        </>

    )
}
