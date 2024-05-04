"use client"

import { useRouter } from 'next/navigation';

import { _useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/reducers/cartSlice";

import { Button, Badge } from "react-bootstrap";


const AddToBasket = (props) => {
  const {push} = useRouter()
  const dispatch = _useAppDispatch();

  const addToBasketClick = () => {
    dispatch(addToCart([props.product, 1]))
    const quantitySelector = document.querySelector('#quantitySelector')
    push("/cart/smart-wagon")
  }


  return (
    <>
      <Button className="radius-round text-sm" onClick={() => addToBasketClick()} variant="warning" >Add to Basket</Button>
    </>
  )
};

export default AddToBasket
