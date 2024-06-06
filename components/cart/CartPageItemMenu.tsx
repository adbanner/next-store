import { removeFromCart } from "@/lib/reducers/cartSlice";
import { addToSaved } from "@/lib/reducers/cartSlice";
import { _useAppDispatch } from "@/lib/hooks";
import { IProduct } from '@/models/IProduct'

interface IProps {
    item: IProduct
}

const CartPageItemMenu = (props:IProps) => {
    const dispatch = _useAppDispatch()

    const onSaveClick = () => {
        dispatch(addToSaved([props.item.id]))
        dispatch(removeFromCart([props.item.id]))
    }
    return (
        <>
            <div className="cart-page-item-menu  flex gap-2 items-center">
                <select defaultValue={props.item.amount} style={{ width: "80px", border: "1px solid #999", borderRadius: "0.5rem", padding: "0.3rem 0.5rem", background: "#F0F2F2" }}>
                   {selectOptions()}
                </select>
                <span style={{ fontSize: "10px", opacity: "0.5" }}>|</span>
                <button className="a-clr-main a-hover-underline" onClick={()=> dispatch(removeFromCart(props.item.id))}>Delete</button>
                <span style={{ fontSize: "10px", opacity: "0.5" }}>|</span>
                <span className="a-clr-main a-hover-underline" onClick={onSaveClick}>Save for later</span>
                <span style={{ fontSize: "10px", opacity: "0.5" }}>|</span>
                <span className="a-clr-main a-hover-underline">See more like this</span>
                <span style={{ fontSize: "10px", opacity: "0.5" }}>|</span>
                <span className="a-clr-main a-hover-underline">Share</span>
            </div>
        </>
    )
};

export default CartPageItemMenu

const selectOptions = () => {
    const obj = []
    for (let i=1; i<=10; i++){
        obj.push(
            <option key={i}>{i}</option>
        )
    }
    return obj
}