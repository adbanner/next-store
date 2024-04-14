"use client"
import {removeBrowsedProduct} from "@/lib/features/historySlice"
import { useAppDispatch } from "@/lib/hooks";


const RemoveFromView = (props) => {
  const dispatch = useAppDispatch()
  return (
    <>
      <button className="remove-from-view-btn" onClick={()=>dispatch(removeBrowsedProduct(props.productId))}>Remove from view</button>
    </>
  )
};

export default RemoveFromView

