"use client"
import {_useAppDispatch} from "@/lib/hooks";
import {changeSearchCategory} from "@/lib/reducers/searchSlice"
import {addBrowsedItem} from "@/lib/reducers/historySlice"
import { IProduct } from "../models/IProduct";


const HistoryDispatcher = (props:IProduct) => {
    const dispatch = _useAppDispatch()
    const historyDispatch = _useAppDispatch()
    dispatch(changeSearchCategory(props.category))
    historyDispatch(addBrowsedItem(props))
   
};

export default HistoryDispatcher
