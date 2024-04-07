"use client"
import { useState } from "react";
import { Button } from "react-bootstrap";
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { GoColumns } from "react-icons/go";

const MainMenu = () => {
  
  const pathname = usePathname();
  const [menuObj, setMenuObj] = useState(["electronics", "jewelery", "men's clothing", "women's clothing"])
  return (
    <>
      <div className="main-menu">
      <Link href="/categories"><button className="menu-btn">  <GoColumns /> All</button></Link>
        {menuObj ?
          menuObj.map(menu =>
            <Link key={menu} href={`/categories/${menu}`}>
              <button className="menu-btn">{menu}</button>
            </Link>
          )
          :
          <p>Empty menu</p>
        }
        <div></div>
        <Link href={`/favorites`}>
          <button className="menu-btn"><span>Your Store</span></button>
          </Link>
      </div>
    </>
  )
};

export default MainMenu
