import Link from "next/link"
import ProductCard from "../../components/ProductCard"
import ProductRating from "../../components/ProductRating"
import { GoLocation } from "react-icons/go";

import { Button, Badge } from "react-bootstrap";

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
                        <img src={product.image} />
                    </div>
                    <div className="product-info">
                    <p>{product.description}</p>


                        <ProductRating></ProductRating>
                        <p className='card-price'><sup></sup>£{product.price}</p>
                    </div>
                    <div className="product-order-panel">

                        <p className='card-price'><sup></sup>£{product.price}</p>
                        <div className="grid gap-0 text-sm">
                            <span>Or fastest delivery <b>Tomorrow</b>.</span>
                            <span>Order within <b>17 hrs 40 mins</b>.</span>
                        </div>
                        <div className="flex gap-1">
                            <GoLocation /><span className="text-sm">Deliver to User - Worldwide</span>
                        </div>

                        <span class="font-bold">Only 3 left in stock.</span>
                        <div className="grid gap-2">
                            <Button variant="warning" className="cart-btn">Add to Basket</Button>
                            <Button variant="warning" className="cart-btn buy-now-btn">Buy now</Button>
                        </div>
                        <div className="grid gap-1 text-xs">
                            <div className="grid grid-cols-2 gap-1 ">
                                <span>Dispatches from</span>
                                <span>Fake Store</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1 ">
                                <span>Sold by</span>
                                <span>Jerco Micro</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1 ">
                                <span>Returns</span>
                                <span>Returnable within 30 days of receipt</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1 ">
                                <span>Payment</span>
                                <span>Secure transaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
