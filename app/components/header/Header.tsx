"use client"

import { GoLocation } from "react-icons/go";
import GB from "@/app/assets/images/flags/GB.svg"
import Link from "next/link"

import { Button, Badge } from "react-bootstrap";
import MainMenu from "./MainMenu"
import SubMenu from "./SubMenu"
import SearchBar from "../search/SearchBar"

import { _useAppSelector } from "@/lib/hooks";
import { _useAppDispatch } from "@/lib/hooks";

import { getCartItems, 
         getSavedItems } from "@/lib/reducers/cartSlice";

import { getBrowsedItems} from "@/lib/reducers/historySlice";

import { useEffect} from "react";
import { IProduct } from "@/app/models/IProduct";

interface ICartReducer {
    cartItems: string[]
}

interface ICartState {
    cart: ICartReducer
}

const Header = () => {
    const dispatch = _useAppDispatch();
    useEffect(()=>{
        dispatch(getCartItems([JSON.parse(localStorage.getItem("cartItems") ?? '[]')]))
        dispatch(getSavedItems([JSON.parse(localStorage.getItem("savedItems") ?? '[]')]))
        dispatch(getBrowsedItems([JSON.parse(localStorage.getItem("browsedItems") ?? '[]')]))
    }, [])
    
   
    const cartItems:any = _useAppSelector((state: ICartState) => state.cart.cartItems);
    const itemsAmount = Object.keys(cartItems).reduce((previous, key:any) => {
        return previous + cartItems[key].amount;
    }, 0) || 0
    return (
        <>
            <header>
                <div className="header-top | px-main flex gap-1">

                    <Link href="/"><div className="logo">Next Store </div></Link>

                    <div className="flex justify-between gap-3 items-center" style={{ width: "100%", height: "40px" }}>

                        <div className="delivery-info | flex items-center gap-1 cursor-pointer" style={{}}>
                            <GoLocation size="18px" style={{ minWidth: "18px" }} />
                            <div style={{ whiteSpace: "nowrap" }}>
                                <p className="text-xs m-0" style={{ color: "rgba(255,255,255,0.8)" }}>Deliver to</p>
                                <p className="text-xs m-0 font-bold">Worldwide IP18 6</p>
                            </div>
                        </div>

                        <SearchBar></SearchBar>
                        <div>
                            <img src={GB.src} alt="" width="40px" />
                        </div>
                        <div className="flex gap-4 justify-end items-center" >
                            <div style={{ whiteSpace: "nowrap" }} className="cursor-pointer">
                                <p className="text-xs m-0">Hello, User</p>
                                <p className="text-xs m-0 font-bold">Accout & Itemss</p>
                            </div>

                            <div style={{ whiteSpace: "nowrap" }} className=" cursor-pointer">
                                <p className="text-xs m-0">Returns</p>
                                <p className="text-xs m-0 font-bold">& Orders</p>
                            </div>
                            <Link href="/cart"><Button variant="outline-light" className="cart-btn">Basket <Badge bg="dark">{itemsAmount}</Badge></Button></Link>
                        </div>
                    </div>
                </div>
                <nav>
                    <MainMenu></MainMenu>
                </nav>
                <SubMenu></SubMenu>
            </header>
        </>
    )
};

export default Header
