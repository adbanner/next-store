import Link from "next/link"
import ProductCard from "@/components/ProductCard"
import { IProduct } from "@/models/IProduct";

async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products?limit=20')
    return res.json()
}

export default async function ProductsList() {
    let products = await getProducts()
    products.map((item:IProduct) => item.rnd = Math.random() * 1)
    products =  products.sort((a:IProduct, b:IProduct) => a.rnd! - b.rnd!)
    
    return (
        <>
            <div className="flex gap-3 flex-wrap p-3 justify-center">
                {
                    products ?
                        products.map((product:IProduct) =>
                            <Link key={product.id} href={`/product/${product.id}`}><ProductCard key={product.id} product={product}></ProductCard></Link>
                        )
                        :
                        <div>No products</div>
                }
            </div>
        </>

    )
}
