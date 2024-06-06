"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation';

import { useQuery } from '@tanstack/react-query'
import fetchData from "@/lib/fetchFunctions/fetchData"
import { GoPersonFill } from "react-icons/go";
import { hideHmenu } from "@/lib/hmenu"
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const HMenu = () => {
    let userName = "User"
    const {data: session} = useSession()
    session ? userName = session.user.name.split(" ")[0] : false 
    const { data, isPending, isError, error } = useQuery({ queryKey: ['categoriesList'], queryFn: () => fetchData("categories") })
    return (
        <>
            <div id="hmenu" className="hmenu">
                <div id="hmenuCloseBtn" onClick={hideHmenu}><p className="rot45">+</p></div>
                <div className="hmenu-customer | pl-9 py-2 flex">
                    <div className="flex gap-2 items-center font-white">
                   
                        {session ?
                            <img src={session.user.image} className="user-img"></img>
                            :
                             <GoPersonFill fill="white" size="20px" />
                        }
                        <span className="text-xl font-bold text-white">Hello, {userName}</span>
                    </div>


                </div>
                <div className="hmenu-content pt-3 flex flex-col w-full gap-2">
                    <div className=" flex flex-col w-full gap-2">
                        <span className="text-base font-bold pl-9">Categories</span>
                        <ul className="">
                            {data ?
                                data.map((menu) =>
                                    <Link key={menu.toString()} href={`/categories/${menu}`}>
                                        <li className="hmenu-item text-sm text-black" style={{ textTransform: "capitalize" }} onClick={hideHmenu}><span className="pl-9 ">{menu}</span></li>
                                    </Link>
                                )
                                :
                                <p></p>
                            }
                        </ul>

                        <div className="horizontal-line"></div>


                    </div>

                </div>
            </div>
            <div id="hmenuFade" className="fader"></div>
        </>
    )
};

export default HMenu
