
import Link from "next/link"
import ProductsList from "@/components/ProductsList"
import ProductRating from "@/components/ProductRating"
import QuantitySelector from "@/components/QuantitySelector"

import { GoLocation } from "react-icons/go";
import { GoOrganization } from "react-icons/go";
import { GoReport } from "react-icons/go";

import { Button, Badge } from "react-bootstrap";
import AddToBasket from "@/components/buttons/AddToBasket"

import Banner_Fullx45 from "@/components/banners/Banner_Fullx45"
import Banner_Fullx250 from "@/components/banners/Banner_Fullx250"

import Sponsored from "@/components/Sponsored"

import { IProduct } from "@/models/IProduct";
import { IParams } from  "@/models/IParams"

import Gallery from "@/components/product/Gallery"
import AddToBrowsedHistory from "@/components/browsed-history/AddToBrowsedHistory";



async function getProducts(productId:number) {
   
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
    return res.json()
}

export default async function ProductPage({params}:IParams) {
    const product: IProduct = await getProducts(params.id)
    const productSeller = product.title.split(" ")[0]
    return (
         <>
             <AddToBrowsedHistory {...product}></AddToBrowsedHistory>
            <div className="product-page flex flex-col gap-0 px-main">

                <Banner_Fullx45 />

                <div className="wrapper">
                    <br></br>
                    {/* <span className="text-xs" style={{ width: "100%", color: "#565959 !important", textTransform: "capitalize" }}>{`${product.category} > ${productSeller}`}</span> */}

                    <div className="product-page-main">
                        <Gallery product={product}/>

                        {/* Product Info */}
                        <div className="product-info">
                            <p>{product.description}</p>
                            <p className="text-sm">{product.title}</p>
                            <p className="text-sm link">Visit the {productSeller} Store</p>
                            <ProductRating rating={product.rating} />

                            <Badge bg="danger" className="limited-deal">Limited time deal</Badge>
                            <div className="horizontal-line"></div>
                            <p className='card-price'><sup></sup>£{product.price}</p>
                            <div className="text-sm grid gap-1">
                                <p className="text-base font-bold">About this item</p>
                                <ul className="grid gap-1">
                                    <li>{product.description}</li>
                                    <li>{product.description}</li>

                                    <li>{product.description}</li>
                                    <li>{product.description}</li>

                                </ul>
                            </div>
                            <div className="horizontal-line"></div>
                            <div className="text-sm grid gap-1">
                                <p className="text-base font-bold">Additional details</p>
                                <div className="flex gap-2 items-center">
                                    <GoOrganization size="40" />
                                    <div>
                                        <div>Small Business</div>
                                        <span>This product is from a small and medium business brand based in the U.K. Support small. <a>Learn more</a></span>
                                    </div>
                                </div>

                            </div>
                            <div></div>
                            <Link href="/">
                                <div className="text-sm flex gap-2 ff-clr-primary-1"><GoReport size="24" /> <span >Report an issue with this product</span></div>
                            </Link>
                        </div>

                        {/* Right Panel */}
                        <div className="right-panel">
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

                                <span className="font-bold">Only {Math.round(5 + Math.random() * 10)} left in stock.</span>


                                <div className="grid gap-2 point w-full">

                                    {/* Counter */}

                                    <QuantitySelector quantity={5}></QuantitySelector>

                                    <AddToBasket product={product}></AddToBasket>
                                    {/* <Button  variant="warning" className="cart-btn">Add to Basket</Button> */}
                                    <Button variant="warning" className="buy-now-btn | radius-round | text-sm w-full">Buy now</Button>
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
                            <div>
                                <Banner_Fullx250></Banner_Fullx250>
                                <Sponsored></Sponsored>
                            </div>
                        </div>
                    </div>

                    <div className="horizontal-line"></div>
                    <ProductsList></ProductsList>
                </div>

            </div>

            {/* <HistoryDispatcher product:IProduct={product}></HistoryDispatcher> */}

        </>

    )
}

