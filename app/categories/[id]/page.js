import ProductCard from "../../components/ProductCard"
import Link from "next/link"

async function getProducts(categoryId) {
    const res = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
    return res.json()
}

export default async function Category({ params }) {
    const products = await getProducts(params.id)
    return (
        <>
            <div className="flex gap-3 flex-wrap p-3">
                {
                    products ?
                        products.map(card =>
                            <Link href={`/product/${card.id}`}>
                                <ProductCard className="card" key={card.id} card={card}></ProductCard>
                            </Link>
                        )
                        :
                        <div>No products</div>
                }
            </div>
        </>

    )
}