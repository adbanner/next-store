import Link from "next/link"

import ProductRating from "../ProductRating"

async function getProducts(productId) {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
    return res.json()
}

const Banner_250x250 = async () => {
    const productId = Math.round(Math.random() * 20)
    const discount = 5 + Math.round(Math.random() * 50)
    const product = await getProducts(productId)
    let discountPrice = product.price / (100 - discount) * discount
    let fullPrice = Number(product.price) + Number(discountPrice)
    fullPrice = fullPrice.toFixed(2)
    return (
        <>
            <Link href={`/product/${productId}`}>
                <div className="banner cursor-pointer" style={{ width: "250px", height: "250px", padding: "0.5rem", border: "1px solid var(--clr-neutral-3)", color: "#333" }}>
                    <div className="" style={{}}></div>
                    <div style={{ height: "130px" }}>
                        <img src={product.image} className="img" />
                    </div>
                    <div className="py-1"></div>
                    <span className="text-sm font-bold">
                        {`${product.title.substring(0, 25)}...`}
                    </span>
                    <ProductRating></ProductRating>
                    <div className="flex gap-2 items-center">
                        <div className="bg-red-700 text-xs font-semibold" style={{ width: "max-content", color: "white", padding: "0.1rem 0.5rem" }}><span>{discount}% off</span></div>
                        <span className="decoration-red-700 text-xs font-semibold">Limited time deal</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span>£{product.price}</span><span style={{ textDecorationLine: "line-through" }}>£{fullPrice}</span>
                    </div>
                </div>
            </Link>
        </>
    )
};

export default Banner_250x250
