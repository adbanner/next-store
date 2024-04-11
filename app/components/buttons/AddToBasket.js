"use client"
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart } from "@/lib/features/cartSlice";
import { useEffect } from "react";

import { Button, Badge } from "react-bootstrap";


const AddToBasket = (props) => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        console.log(props)
    },[])
  return (
    <>
      <Button onClick={()=>dispatch(addToCart(props.product))} variant="warning" >Add to Basket</Button> 
    </>
  )
};

export default AddToBasket
