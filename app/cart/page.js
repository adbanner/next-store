"use client"
import CartPageItem from "../components/CartPageItem"
import CartBuyBox from "@/app/components/CartBuyBox"
import totalPrice from "../helpers/totalPrice"
import Banner_Fullx45 from "../components/banners/Banner_Fullx45"
import Banner_BasketRelated from "@/app/components/banners/Banner_BasketRelated"
import { _useAppSelector } from "@/lib/hooks";
// import { Metadata } from "next"


// export const metadata = {
//     title: {
//         default: "Cart"
//     }
// }

const page = () => {
    let total = 0
    //const cartList = JSON.parse(localStorage.getItem("cartList")) || []
    const cartList = _useAppSelector(state => state.cart.cartList)
    cartList.length ? total = totalPrice(cartList) : total = 0

    return (
        <>
            <div className="cart-page | wrapper-container | flex flex-col gap-2 pb-6">
                <Banner_Fullx45 />
                <div className="wrapper cart-grid px-4">
                    <div className="cart-page-main flex flex-col w-full gap-2 px-main">
                        <div>
                            <h1 className="text-2xl">{cartList.length ? "Shopping Basket" : "Your Shopping Cart is empty."}</h1>
                            {cartList.length ? <div className="a-clr-main text-sm">Deselect all items</div> : false}
                        </div>
                        <div>
                            {cartList.map(cartItem =>
                                <CartPageItem key={cartItem.id} item={cartItem} />
                            )}

                        </div>
                        {cartList.length ?
                            <p className="text-base text-right font-medium">Subtotal ({cartList.length} items): <b>£{total}</b></p>
                            : false
                        }
                    </div>


                    <div className="right-panel">
                        {cartList.length ? <CartBuyBox total={total} subtotal={cartList.length} /> : false}
                        <div>
                            {/* <Banner_Fullx250></Banner_Fullx250> */}
                            <Banner_BasketRelated></Banner_BasketRelated>
                            {/* <Sponsored></Sponsored> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="horizontal-line"></div>
            <ProductsList></ProductsList> */}
        </>
    )
};

export default page
