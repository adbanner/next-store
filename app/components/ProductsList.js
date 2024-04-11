import Link from "next/link"
import ProductCard from "./ProductCard"


async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products?limit=20')
    return res.json()
}

export default async function ProductsList() {
    const products = await getProducts()
    return (
        <> 
        <div className="flex gap-3 flex-wrap p-3">
            {
                products?
                products.map(product =>
                    <Link key={product.id} href={`/product/${product.id}`}><ProductCard className="card" key={product.id} product={product}></ProductCard></Link>
                )
                :
                <div>No products</div>
            }
        </div>
        </>

    )
}
