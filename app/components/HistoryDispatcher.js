"use client"
import {useAppDispatch, useAppSelector } from "@/lib/hooks";
import {changeSearchCategory} from "@/lib/features/searchSlice"
import {addBrowsedProduct} from "@/lib/features/historySlice"


const HistoryDispatcher = (props) => {
    const dispatch = useAppDispatch()
    const historyDispatch = useAppDispatch()
    dispatch(changeSearchCategory(props.product.category))
    historyDispatch(addBrowsedProduct(props.product))
   
};

export default HistoryDispatcher
