"use client"
import {removeBrowsedItem} from "@/lib/reducers/historySlice"
import { _useAppDispatch } from "@/lib/hooks";

type Props = {
  productId: number | string
}

const RemoveFromView = ({productId}:Props) => {
  const dispatch = _useAppDispatch()
  return (
    <>
      <button className="remove-from-view-btn" onClick={()=>dispatch(removeBrowsedItem(productId))}>Remove from view</button>
    </>
  )
};

export default RemoveFromView

