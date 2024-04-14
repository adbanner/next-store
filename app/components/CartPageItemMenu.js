import { removeFromCart } from "@/lib/features/cartSlice";
import { _useAppDispatch } from "@/lib/hooks";

const CartPageItemMenu = (props) => {
    const dispatch = _useAppDispatch()
   
    return (
        <>
            <div className="cart-page-item-menu  flex gap-2 items-center">
                <select style={{ width: "80px", border: "1px solid #999", borderRadius: "0.5rem", padding: "0.3rem 0.5rem", background: "#F0F2F2" }}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <span style={{ fontSize: "10px", opacity: "0.5" }}>|</span>
                <button className="a-clr-main a-hover-underline" onClick={()=> dispatch(removeFromCart(props.item.id))}>Delete</button>
                <span style={{ fontSize: "10px", opacity: "0.5" }}>|</span>
                <span className="a-clr-main a-hover-underline">Save for later</span>
                <span style={{ fontSize: "10px", opacity: "0.5" }}>|</span>
                <span className="a-clr-main a-hover-underline">See more like this</span>
                <span style={{ fontSize: "10px", opacity: "0.5" }}>|</span>
                <span className="a-clr-main a-hover-underline">Share</span>
            </div>
        </>
    )
};

export default CartPageItemMenu
