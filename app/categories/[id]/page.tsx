import ProductCard from "@/components/ProductCard"
import Link from "next/link"
import SmartWagon_Carousel from "@/components/SmartWagon_Carousel"
import { IProduct } from "@/models/IProduct"

type IParams = {
    params: {id:number},
}

async function getProducts(categoryId:number) {
    const res = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
    return res.json()
}

export default async function Category({params}:IParams ) {
    const products = await getProducts(params.id)
    return (
        <>
            <div className="categories-list wrapper-container">
                <div className="wrapper flex gap-3 flex-wrap p-3 justify-center">
                    {
                        products ?
                            products.map((product: IProduct) =>
                                <Link href={`/product/${product.id}`} key={product.id}>
                                    <ProductCard product={product}></ProductCard>
                                </Link>
                            )
                            :
                            <div>No products</div>
                    }
                </div>
                
            </div>
            <SmartWagon_Carousel title={"Customers also viewed these products"}></SmartWagon_Carousel>
        </>

    )
}
