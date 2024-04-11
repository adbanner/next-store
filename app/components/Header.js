"use client"
import { GoSearch } from "react-icons/go";
import { GoLocation } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import GB from "../assets/images/flags/GB.svg"
import Link from "next/link"

import { Button, Badge } from "react-bootstrap";
import MainMenu from "./MainMenu"
import SubMenu from "./SubMenu"

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const Header = () => {
    const cartList = useAppSelector((state) => state.cart.cartList);    
    return (
        <>
            <header>
                <div className="header-top | flex gap-1">

                    <Link href="/"><div className="logo">Fake Store </div></Link>

                    <div className="flex justify-between gap-3 items-center" style={{ width: "100%", height: "40px" }}>

                        <div className="delivery-info | flex items-center gap-1 cursor-pointer" style={{}}>
                            <GoLocation size="18px" style={{ minWidth: "18px" }} />
                            <div style={{ whiteSpace: "nowrap" }}>
                                <p className="text-xs m-0" style={{ color: "rgba(255,255,255,0.8)" }}>Deliver to User</p>
                                <p className="text-xs m-0 font-bold">Worldwide IP18 6</p>
                            </div>
                        </div>

                        <div className="search-bar | flex gap-0">
                            <Button variant="warning" className="search-category-btn">Electronics</Button>
                            <input placeholder="Search item"></input>
                            <Button variant="warning" className="search-btn"><GoSearch className="go-search" size='1.4rem' /></Button>
                        </div>
                        <div>
                            <img src={GB.src} alt="" width="40px" />
                        </div>
                        <div className="flex gap-4 justify-end items-center" >
                            <div style={{ whiteSpace: "nowrap" }} className="cursor-pointer">
                                <p className="text-xs m-0">Hello, User</p>
                                <p className="text-xs m-0 font-bold">Accout & Lists</p>
                            </div>

                            <div style={{ whiteSpace: "nowrap" }} className=" cursor-pointer">
                                <p className="text-xs m-0">Returns</p>
                                <p className="text-xs m-0 font-bold">& Orders</p>
                            </div>
                            <Button variant="outline-light" className="cart-btn">Basket <Badge bg="dark">{cartList.length}</Badge></Button>
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
