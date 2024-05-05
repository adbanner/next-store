"use client"
import {removeBrowsedItem} from "@/lib/reducers/historySlice"
import { _useAppDispatch } from "@/lib/hooks";


const RemoveFromView = (props) => {
  const dispatch = _useAppDispatch()
  return (
    <>
      <button className="remove-from-view-btn" onClick={()=>dispatch(removeBrowsedItem(props.productId))}>Remove from view</button>
    </>
  )
};

export default RemoveFromView

