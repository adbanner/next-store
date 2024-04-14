"use client"
import { _useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/features/cartSlice";

import { Button, Badge } from "react-bootstrap";


const AddToBasket = (props) => {
  const dispatch = _useAppDispatch();

  const addToBasketClick = () => {
    dispatch(addToCart([props.product, 5]))
    const quantitySelector = document.querySelector('#quantitySelector')
    console.log("quantitySelector", quantitySelector.value)
  }


  return (
    <>
      <Button className="radius-round text-sm" onClick={() => addToBasketClick()} variant="warning" >Add to Basket</Button>
    </>
  )
};

export default AddToBasket

