import { GoCheckCircleFill } from "react-icons/go";
import { Button } from "react-bootstrap";

const CartBuyBox = (props) => {
    return (
        <>
            <div className="bg-white p-3 w-full">
                <div className="flex gap-2 items-start pb-3">
                    <GoCheckCircleFill size="32px" style={{ color: "green" }} />
                    <p className="text-xs">Part of your order qualifies for FREE Delivery. <span className="a-clr-main">Delivery Details</span> <br></br>Select <b>FREE Delivery</b> at checkout.</p>
                </div>
                <div className="grid gap-3">
                    <div>
                        <p className="text-base text-left font-medium pb-1">Subtotal ({props.subtotal} items): <b>£{props.total}</b></p>
                        <div className="flex gap-1 items-center text-xs"><input type="checkbox" /><span>This order contains a gift</span></div>
                    </div>
                    <Button variant="warning" className="w-full text-sm">Proceed to Checkout</Button>
                </div>
            </div>
        </>
    )
};

export default CartBuyBox
