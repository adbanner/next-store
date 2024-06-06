import Link from "next/link"
import ProductCard from "@/components/ProductCard"


async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products?limit=20')
    return res.json()
}

export default async function ProductsList() {
    let products = await getProducts()
    products.map(item => item.rnd = Math.random() * 1)
    products =  products.sort((a, b) => a.rnd - b.rnd)
    
    return (
        <>
            <div className="flex gap-3 flex-wrap p-3 justify-center">
                {
                    products ?
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
