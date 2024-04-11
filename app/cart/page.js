"use client"
import CartPageItem from "@/app/components/CartPageItem"
import banner_650x45 from "@/app/assets/images/banner/banner_650x45.jpg"
import cartSlice from "@/lib/features/cartSlice";
import CartBuyBox from "@/app/components/CartBuyBox"
import { useEffect } from "react";
import totalPrice from "../helpers/totalPrice"

import { useAppSelector } from "@/lib/hooks";

const page = () => {
    const cartList = useAppSelector(state => state.cart.cartList)
    let total
    cartList.length ? total = totalPrice(cartList) : total = 0
    
   
    return (
        <>
            <div className="cart-page | wrapper-container | flex flex-col gap-2 pb-6">
                <div className="flex justify-center flex-col ">
                    <div className="flex justify-center">
                        <img src={banner_650x45.src} width="650" height="45"></img>
                    </div>
                </div>

                <div className="wrapper cart-grid px-4">
                    <div className="cart-page-main grid gap-2">
                        <div>
                            <h1 className="text-2xl">Shopping Basket</h1>
                            <div className="a-clr-main text-sm">Deselect all items</div>
                        </div>
                        <div>
                            {cartList.map(cartItem=>
                                 <CartPageItem key={cartItem.id} item={cartItem}/>
                            )}
                           
                        </div>
                        <p className="text-base text-right">Subtotal ({cartList.length} items): <b>£{total}</b></p>
                    </div>


                    <div className="right-panel">
                        <CartBuyBox total={total} subtotal={cartList.length}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default page
