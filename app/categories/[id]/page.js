import ProductCard from "../../components/ProductCard"
import Link from "next/link"
import SmartWagon_Carousel from "@/app/components/SmartWagon_Carousel"

async function getProducts(categoryId) {
    const res = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
    return res.json()
}

export default async function Category({ params }) {
    const products = await getProducts(params.id)
    return (
        <>
            <div className="categories-list wrapper-container">
                <div className="wrapper flex gap-3 flex-wrap p-3 justify-center">
                    {
                        products ?
                            products.map(product =>
                                <Link href={`/product/${product.id}`} key={product.id}>
                                    <ProductCard className="card" product={product}></ProductCard>
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
