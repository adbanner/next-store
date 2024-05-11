import Link from "next/link"
import { _useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/reducers/cartSlice";
import { removeFromSaved } from "@/lib/reducers/cartSlice";
import { IProduct } from "@/app/models/IProduct";


const ProductCard = (props: { item: IProduct }) => {
    const dispatch = _useAppDispatch()
    const discount = 5 + Math.round(Math.random() * 50)
    let discountPrice = props.item.price / (100 - discount) * discount
    let fullPrice: number | string = Number(props.item.price) + Number(discountPrice)
    fullPrice = fullPrice.toFixed(2)

    const onAddToBasketClick = () => {
        dispatch(addToCart([props.item, props.item.amount]))
        dispatch(removeFromSaved([props.item.id]))
    }
    return (
        <>

            <div className="banner cursor-pointer" style={{ width: "250", maxWidth: "250px", padding: "1rem", border: "1px solid var(--clr-neutral-3)", color: "#333", background: "white" }}>
                <Link href={`/product/${props.item.id}`}>
                    <div className="" style={{}}></div>
                    <div style={{ width: "220px", height: "220px" }}>
                        <img src={props.item.image} className="img" alt="" />
                    </div>
                    <div className="py-1"></div>
                    <span className="text-sm font-bold pb-2">
                        {`${props.item.title.substring(0, 50)}...`}
                    </span>
                    <div className="flex gap-2 items-center">
                        <div className="bg-red-700 text-xs font-semibold" style={{ width: "max-content", color: "white", padding: "0.1rem 0.5rem" }}><span>{discount}% off</span></div>
                        <span className="decoration-red-700 text-xs font-semibold">Limited time deal</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="font-bold">£{props.item.price}</span><span style={{ textDecorationLine: "line-through" }}>£{fullPrice}</span>
                    </div>
                    <div className="pb-3"></div>
                    <div className="text-xs flex flex-col gap-1 w-full font-medium">
                        <span>1K+ bought in past month</span>
                        <span className="a-clr-main">In stock</span>
                        <span>Eligible for FREE Shipping</span>
                        <span><b>Flavour Name:</b> Blazin Blue Raz</span>
                        <span><b>Size Name:</b> 45 Servings (Pack of 1)</span>
                    </div>
                </Link>
                <div className="pb-2"></div>
                <button className="btn-outline" onClick={onAddToBasketClick}>Move to basket</button>

                <div className="pb-3"></div>
                <div className="text-xs flex flex-col gap-1 w-full font-medium">
                    <span className="a-clr-main">Delete</span>
                    <span className="a-clr-main">Add to list</span>
                    <span className="a-clr-main">See more like this</span>
                </div>
            </div>

        </>
    )
};

export default ProductCard
