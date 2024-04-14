"use client"
import { useEffect, useState } from "react";
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { GoColumns } from "react-icons/go";
import Banner_MainMenu from "../assets/images/banner/Banner_MainMenu_400x39.png"

import { useQuery } from '@tanstack/react-query'
import fetchData from "../fetchFunctions/fetchData"

const MainMenu = () => {
  const categories = ["Gift Ideas", "Buy Again"]
  // const {data, isLoading,isPending, isError, error} = useQuery({queryKey: ['categoriesList'], queryFn: ()=>fetchData("categories")})

  // if (isPending) return <span>Loading...</span>
  // if (isError) return <span>Error: {error.message}</span>

  return (
    <>
      <div className="main-menu">
        <div className="items">
          <Link href="/categories"><button className="menu-btn">  <GoColumns /> All</button></Link>
          {categories ?
            categories.map(menu =>
              // <Link key={menu} href={`/categories/${menu}`}>
              <button key={menu} className="menu-btn">{menu}</button>
              // </Link>
            )
            :
            <p></p>
          } 
          <Link href={`/history`}>
            <button className="menu-btn"><span>Browsing History</span></button>
          </Link>
          <Link href={`/favorites`}>
            <button className="menu-btn"><span>Your Store</span></button>
          </Link>
        </div>
        <img className="Banner_MainMenu" src={Banner_MainMenu.src} width="400" height="39"></img>
      </div>
    </>
  )
};

export default MainMenu
