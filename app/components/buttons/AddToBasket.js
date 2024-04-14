"use client"
import { _useAppDispatch} from "@/lib/hooks";
import { addToCart } from "@/lib/features/cartSlice";

import { Button, Badge } from "react-bootstrap";


const AddToBasket = (props) => {
    const dispatch = _useAppDispatch();

  return (
    <>
      <Button onClick={()=>dispatch(addToCart(props.product))} variant="warning" >Add to Basket</Button> 
    </>
  )
};

export default AddToBasket
