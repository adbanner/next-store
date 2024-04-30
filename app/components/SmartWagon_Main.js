"use client"
import Link from "next/link"
import { GoCheckCircleFill } from "react-icons/go";
import { Button } from "react-bootstrap";
import totalPrice from "@/app/helpers/totalPrice"

import { _useAppSelector } from "@/lib/hooks";


const SmartWagon_Main = () => {
    const cartItems = _useAppSelector(state => state.cart.cartItems)
    const lastItem = cartItems[cartItems.length - 1]
    let total

    if (cartItems.length) {
        total = totalPrice(cartItems)
    } else {
        total = 0
        return <div></div>
    }



    return (
        <>
            <div className="grid gap-3 grid-cols-2 w-full  px-main min-h-min">
                <div className="flex gap-4 items-center justify-center   bg-white p-6">
                    <Link href={`/product/${lastItem.id}`}>
                        <div className="img" style={{ width: "100px", height: "100px" }}>
                            <img src={lastItem.image} className="img" style={{ width: "100px", height: "100px" }} alt="" />
                        </div>
                    </Link>
                    <div>
                        <div className="flex items-center gap-2">
                            <GoCheckCircleFill size="16px" style={{ color: "green" }} />
                            <h1 className="text-base">Added to Basket</h1>
                        </div>
                        <div className="text-xs"><b>Size Name:</b> Combo /4-Pack</div>
                    </div>
                </div>
                <div className="flex  bg-white p-6">
                    <div className="flex gap-2 items-center p-2 w-full ">
                        <p className="text-xs">Part of your order qualifies for FREE Delivery. <br></br><span className="a-clr-main">Delivery Details</span> <br></br>Select <b>FREE Delivery</b> at checkout.</p>
                    </div>
                    <div className="" style={{ borderRight: "1px solid var(--clr-neutral-3)" }}></div>
                    <div className="flex flex-col gap-2 px-4 w-full items-center justify-center">
                        <p className="text-base text-left font-medium pb-1">Basket Subtotal: <b>£100</b></p>
                        <Link href={"/cart"} className="w-full"><Button variant="warning" className="w-full text-sm">Proceed to Checkout</Button></Link>
                        <Link href={"/cart"} className="w-full"><Button variant="light" className="w-full text-sm border-1-grey">Go to Basket</Button></Link>
                        <p className="text-xs ">For best experience <span className="a-clr-main">sign in to your account</span></p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SmartWagon_Main
