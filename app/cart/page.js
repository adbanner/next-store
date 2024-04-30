"use client"
import CartPageItem from "../components/cart/CartPageItem"
import CartBuyBox from "@/app/components/cart/CartBuyBox"
import totalPrice from "../helpers/totalPrice"

import MissionCategory from "@/app/components/buttons/MissionCategory"
import Banner_Fullx45 from "../components/banners/Banner_Fullx45"
import Banner_BasketRelated from "@/app/components/banners/Banner_BasketRelated"
import { _useAppSelector } from "@/lib/hooks";
import Link from "next/link"
import ProductCard from "@/app/components/cart/YourItems/ProductCard"
import { useEffect } from "react"
// import { Metadata } from "next"


// export const metadata = {
//     title: {
//         default: "Cart"
//     }
// }

const page = () => {
    const categorieItems =[]
    let total = 0
    //const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
    const cartItems = _useAppSelector(state => state.cart.cartItems)
    cartItems.length ? total = totalPrice(cartItems) : total = 0


    const savedItems = _useAppSelector(state => state.cart.savedItems)
    useEffect(() => {
        console.log(savedItems)
    })

    return (
        <>
            <div className="cart-page | wrapper-container | flex flex-col gap-2 pb-6">
                <Banner_Fullx45 />
                <div className="wrapper cart-grid px-4">
                    <div className="w-full flex flex-col gap-4">
                        {/* Shopping Basket */}
                        <div className="cart-page-main flex flex-col w-full gap-2 px-main">
                            <div>
                                <h1 className="text-2xl">{cartItems.length ? "Shopping Basket" : "Your Shopping Cart is empty."}</h1>
                                {cartItems.length ? <div className="a-clr-main text-sm">Deselect all items</div> : false}
                            </div>
                            <div>
                                {cartItems.map(cartItem =>
                                    <CartPageItem key={cartItem.id} item={cartItem} />
                                )}

                            </div>
                            {cartItems.length ?
                                <p className="text-base text-right font-medium">Subtotal ({cartItems.length} items): <b>£{total}</b></p>
                                : false
                            }
                        </div>

                        {/* Your Items */}
                        <div className="px-main bg-white py-4">
                            <div >
                                <span className="text-2xl font-bold">Your Items</span>
                            </div>
                            <div className="flex gap1  px-3">
                                <div className="px-3 py-2 text-sm font-semibold border-b-active">
                                   {savedItems.length ? `Saved for later (${savedItems.length} items)` : "No items saved for later"}
                                </div>
                                <div className="px-3 py-2 text-sm a-clr-main font-medium">
                                    Buy it again
                                </div>
                            </div>
                            <div className="horizontal-line"></div>


                            <div className="flex gap-2 pt-3">
                                {categorieItems.map(item =>
                                    <MissionCategory key={item.name}/>
                                )
                                }
                            </div>



                            <div className="flex flex-wrap flex-row-reverse gap-3 pt-3 justify-end">
                                {savedItems.map(savedItem =>
                                    <ProductCard key={savedItem.id} item={savedItem} />
                                )}

                            </div>

                        </div>


                        <div className="text-xs font-medium">The price and availability of items at Amazon.co.uk are subject to change. The shopping basket is a temporary place to store a list of your items and reflects each item's most recent price.<br></br>
                            Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</div>
                    </div>

                    {/* Right panel */}
                    <div className="right-panel ">
                        {cartItems.length ? <CartBuyBox total={total} subtotal={cartItems.length} /> : false}
                        <div>
                            {/* <Banner_Fullx250></Banner_Fullx250> */}
                            <Banner_BasketRelated></Banner_BasketRelated>
                            {/* <Sponsored></Sponsored> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="horizontal-line"></div>
            <ProductsItems></ProductsItems> */}
        </>
    )
};

export default page
