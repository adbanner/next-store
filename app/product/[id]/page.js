
import Link from "next/link"
import ProductsList from "../../components/ProductsList"
import ProductRating from "../../components/ProductRating"
import Counter from "../../components/Counter"

import { GoLocation } from "react-icons/go";
import { GoShare } from "react-icons/go";

import { Button, Badge } from "react-bootstrap";
import banner_650x45 from "../../assets/images/banner/banner_650x45.jpg"
import AddToBasket from "../../components/buttons/AddToBasket"


async function getProducts(productId) {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
    return res.json()
}

export default async function Category({ params }) {
    const product = await getProducts(params.id)
    const productSeller = product.title.split(" ")[0]

    return (
        <>
            <div className="product-page flex flex-col gap-0 ">
                <div className="flex justify-center flex-col ">
                    <div className="flex justify-center">
                        <img src={banner_650x45.src} width="650" height="45"></img>
                    </div>

                </div>

                <div className="wrapper">
                    <span className="text-xs" style={{ width: "100%", color: "#565959 !important", textTransform: "capitalize" }}>{`${product.category} > ${productSeller}`}</span>

                    <div className="product-page-main">
                        {/* Product Image  */}
                        <div className="product-img flex">
                            <div className="product-gallery">
                                <img src={product.image} />
                                <span className="align-center text-sm">Roll over image to zoom</span>
                                <div className="product-img-tmb flex gap-2 justify-between">
                                    <img src={product.image}></img>
                                    <img src={product.image}></img>
                                    <img src={product.image}></img>
                                    <img src={product.image}></img>
                                    <img src={product.image}></img>
                                    <img src={product.image}></img>
                                    <img src={product.image}></img>
                                </div>
                            </div>

                            <div className="product-img-share">
                                <GoShare size="24px" />
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="product-info">
                            <p>{product.description}</p>
                            <p className="text-sm">{product.title}</p>
                            <p className="text-sm link">Visit the {productSeller} Store</p>
                            <ProductRating></ProductRating>

                            <Badge bg="danger" className="limited-deal">Limited time deal</Badge>
                            <div className="horizontal-line"></div>
                            <p className='card-price'><sup></sup>£{product.price}</p>
                            <div className="text-sm">
                                <p className="text-base font-bold">About this item</p>
                                <ul className="grid gap-1">
                                    <li>{product.description}</li>
                                    <li>{product.description}</li>

                                    <li>{product.description}</li>
                                    <li>{product.description}</li>

                                </ul>

                            </div>

                        </div>

                        {/* Panel Right*/}
                        <div className="panel-right">
                            <div className="grid grid-cols-2 text-xs font-semibold">
                                <button className="delivery-option py-3 active">Delivery</button>
                                <button className="delivery-option py-3">Pickup</button>
                            </div>
                            <div className="product-order-panel">
                                <p className='card-price'><sup></sup>£{product.price}</p>
                                <div className="grid gap-0 text-sm">
                                    <span>Or fastest delivery <b>Tomorrow</b>.</span>
                                    <span>Order within <b>{Math.round(Math.random() * 20)} hrs {Math.round(Math.random() * 60)} mins</b>.</span>
                                </div>
                                <div className="flex gap-1">
                                    <GoLocation /><span className="text-sm">Deliver to User - Worldwide</span>
                                </div>

                                <span className="font-bold">Only {Math.round(1 + Math.random() * 10)} left in stock.</span>


                                <div className="grid gap-2 point">

                                    {/* Counter */}
                                   
                                    <Counter></Counter>

                                    <AddToBasket productId={product.id}></AddToBasket>
                                    {/* <Button  variant="warning" className="cart-btn">Add to Basket</Button> */}
                                    <Button variant="warning" className="buy-now-btn">Buy now</Button>
                                </div>
                                <div className="grid gap-1 text-xs">
                                    <div className="grid grid-cols-2 gap-1 ">
                                        <span>Dispatches from</span>
                                        <span>Fake Store</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-1 ">
                                        <span>Sold by</span>
                                        <span>{productSeller}</span>
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

                    <div className="horizontal-line"></div>
                    <ProductsList></ProductsList>
                </div>

            </div>

        </>

    )
}

