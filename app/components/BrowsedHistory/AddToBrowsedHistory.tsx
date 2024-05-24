"use client"
import {_useAppDispatch} from "@/lib/hooks";
import {changeSearchCategory} from "@/lib/reducers/searchSlice"
import {addBrowsedItem} from "@/lib/reducers/historySlice"
import { IProduct } from "@/app/models/IProduct";

const AddToBrowsedHistory = (product:IProduct)=> {
    
    // const dispatch = _useAppDispatch();
    // const historyDispatch = _useAppDispatch()
    // dispatch(changeSearchCategory(product.category))
    // historyDispatch(addBrowsedItem(product))

    return(<></>)
};

export default AddToBrowsedHistory
