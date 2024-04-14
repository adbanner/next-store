"use client"
import Link from "next/link"
import ProductCard from "../components/BrowsedHistory/ProductCard"
import banner_650x45 from "@/app/assets/images/banner/banner_650x45.jpg"
import { useAppSelector } from "@/lib/hooks"


export default function Page() {
    const products = useAppSelector(state => state.historyStore.browsedProducts)

    return (
        <>
            <div className="wrapper-container | flex flex-col gap-2 pb-6">
                <div className="flex justify-center flex-col ">
                    <div className="flex justify-center">
                        <img src={banner_650x45.src} width="650" height="45"></img>
                    </div>
                </div>

                <div className="cart-grid px-4  w-full">
                    <div className="cart-page-main grid gap-2">
                        <div>
                            <h1 className="text-2xl">Your Browsing History</h1>
                            <div className="text-sm">These items were viewed recently. We use them to personalise recommendations.</div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        {
                            products ?
                                products.toReversed().map(product =>
                                    <ProductCard key={product.id} className="card" product={product}>
                                    </ProductCard>
                                )
                                :
                                <div>No products</div>
                        }
                    </div>
                </div>
            </div>
        </>

    )
}
