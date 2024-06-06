"use client"
import { _useAppDispatch } from "@/lib/hooks";
import { addUser} from "@/lib/reducers/userSlice";
import { getCartItems, 
         getSavedItems } from "@/lib/reducers/cartSlice";

import { getBrowsedItems} from "@/lib/reducers/historySlice";

import { useEffect} from "react";
import { useSession } from "next-auth/react";

const InitialStateLoader = () => {
    const dispatch = _useAppDispatch();
    useEffect(()=>{
        dispatch(getCartItems([JSON.parse(localStorage.getItem("cartItems") ?? '[]')]))
        dispatch(getSavedItems([JSON.parse(localStorage.getItem("savedItems") ?? '[]')]))
        dispatch(getBrowsedItems([JSON.parse(localStorage.getItem("browsedItems") ?? '[]')]))
       
    }, [])
     const {data: session} = useSession();
        dispatch(addUser(session?.user))
  return (
    <>
      
    </>
  )
};

export default InitialStateLoader
