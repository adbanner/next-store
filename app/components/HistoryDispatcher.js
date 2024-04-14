"use client"
import {_useAppDispatch, useAppSelector } from "@/lib/hooks";
import {changeSearchCategory} from "@/lib/features/searchSlice"
import {addBrowsedProduct} from "@/lib/features/historySlice"


const HistoryDispatcher = (props) => {
    const dispatch = _useAppDispatch()
    const historyDispatch = _useAppDispatch()
    dispatch(changeSearchCategory(props.product.category))
    historyDispatch(addBrowsedProduct(props.product))
   
};

export default HistoryDispatcher
