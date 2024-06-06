
import Image from 'next/image'
import Link from "next/link"
import CartPageItemMenu from "@/components/cart/CartPageItemMenu"
import { IProduct } from '@/models/IProduct'

interface IProps {
    item: IProduct
}

const CartPageItem = (props:IProps) => {
    const checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
       console.log((event.target  as Element).id)
      }
    return (
        <>
            <div className="cart-page-item flex">
                <div className="cart-page-item-grid justify-center w-full">
                    <input id={`checkbox_${props.item.id}`} type="checkbox" defaultChecked onChange={checkHandler}></input>
                    <Link href={`/product/${props.item.id}`}> <img className="img" src={props.item.image} style={{ width: "180px", height: "180px" }} alt={props.item.title} /></Link>
                    <div className="cart-page-item-info text-xs w-full">

                        <div className="flex justify-between ">
                            <div>
                                <span className="a-clr-base text-base font-medium">{props.item.title}</span>
                                <div className="text-xs grid gap-1 py-1">
                                    <li>In stock</li>
                                    <li>Eligible for FREE Shipping</li>
                                    <li className="flex gap-1 items-center"><input type="checkbox" id={`checkbox_gift_${props.item.id}`}/><span>This will be a gift <span className="a-clr-main">Learn more</span></span></li>
                                    <li><b>Color Name:</b> Vanta black</li>
                                    <li><b>Size Name:</b> 1.8kg Bag</li>
                                </div>
                            </div>
                            <div className="text-right flex flex-col gap-2" style={{ width: "105px" }}>
                                <div className="font-bold text-base">£{props.item.price}</div>
                                <div className="grid gap-2">
                                    <span className="text-xs">(£2.67 / 100 g)</span>
                                    <p className="a-clr-main">Save 5% now with Subscribe & Save</p>
                                </div>
                            </div>
                        </div>

                        <CartPageItemMenu item={props.item}></CartPageItemMenu>

                    </div>
                </div>
            </div>
        </>
    )
};

export default CartPageItem
