"use client"
import { GoSearch } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import { Button, Badge } from "react-bootstrap";
import Link from "next/link";

import { _useAppSelector } from "@/lib/hooks";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import type { RootState } from '@/lib/store'



const SearchBar = () => {
    const [searchStr, setSearchStr] = useState("")
    //const cartList = _useAppSelector((state: RootState) => state.cart.cartList);
    //const searchCategory = useAppSelector((state) => state.cart.searchCategory);  
    const searchCategory = _useAppSelector((state: RootState) => state.searchStore.searchCategory);

    const {push} = useRouter()

    const onSearchClick = () =>{
        push(`/search?str=${searchStr}`)
    }

    const [items, setItems] = useState([]);

    useEffect(() => {
     window.addEventListener("keypress", (e)=>{
        if(e.key === "Enter" && (document.activeElement as HTMLElement).id=="search_input"){
            
            push(`/search?str=${searchStr}`)
        }
     })

    });


    return (
        <>
            <div className="search-bar | flex gap-0">
                <Button variant="warning" className="search-category-btn">{searchCategory}<GoChevronDown size="12px" /></Button>
                <input id="search_input" placeholder="Search item" onChange={(e)=>setSearchStr(e.target.value)}></input>
                <Button variant="warning" className="search-btn h-full" onClick={()=> onSearchClick()}><GoSearch className="go-search" size='1.8rem' /></Button>
                {/* <Link href={`/search?str=${searchStr}`}><Button variant="warning" className="search-btn h-full"><GoSearch className="go-search" size='1.8rem' /></Button></Link> */}
            </div>
        </>
    )
};

export default SearchBar
