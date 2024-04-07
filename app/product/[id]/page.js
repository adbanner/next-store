import Link from "next/link"
import ProductCard from "../../components/ProductCard"
import ProductRating from "../../components/ProductRating"

async function getProducts(productId) {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
    return res.json()
}

export default async function Category({ params }) {
    const product = await getProducts(params.id)
    return (
        <>
            <div className="flex gap-3 p-3">
                {/* {
                    product ?
                        <ProductCard className="card" key={product.id} card={product}></ProductCard>
                        
                        :
                        <div>Product not found</div>
                } */}
                <div className="product-page">
                    <div class="product-img">
                        <img src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" />
                    </div>
                    <div className="product-info">
                        <p>Logitech H390 Wired Headset for PC/Laptop, Stereo Headphones
                            with Noise Cancelling Microphone, USB-A, In-Line Controls, Works with Chromebook - Black</p>
                        
                        
                        <ProductRating></ProductRating>
                        <p className='card-price'><sup></sup>£{`23`}</p>
                    </div>
                    <div className="product-order-panel"></div>
                </div>
            </div>
        </>

    )
}
