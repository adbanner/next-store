"use client"
import Link from "next/link"
import ProductCard from "./ProductCard"
import { useSearchParams } from 'next/navigation'
import fetchData  from "@/app/fetchFunctions/fetchData"
import { useQuery } from "@tanstack/react-query"


export default function ProductsList() {
    const searchParams = useSearchParams()
    let { data, isPending, isError, error } = useQuery({ queryKey: ['searchList'], queryFn: () => fetchData("") })
    if (data) {
        console.log(searchParams.get("str"))
        data = data.filter((obj)=> Object.values(obj).toString().toLowerCase().includes(searchParams.get("str") || ""))
    }

    return (
        <>
            <div className="flex gap-3 flex-wrap p-3">
                {/* <h1>{...params}</h1> */}
                {
                    data ?
                        data.map(product =>
                            <Link key={product.id} href={`/product/${product.id}`}><ProductCard className="card" key={product.id} product={product}></ProductCard></Link>
                        )
                        :
                        <div>No products</div>
                }
            </div>
        </>

    )
}
