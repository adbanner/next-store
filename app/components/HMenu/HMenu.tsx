"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation';

import { useQuery } from '@tanstack/react-query'
import fetchData from "../../fetchFunctions/fetchData"


const HMenu = () => {
    const { data, isPending, isError, error } = useQuery({ queryKey: ['categoriesList'], queryFn: () => fetchData("categories") })

    return (
        <>
            <div className="hmenu">
                <div className="hmenu-customer | pl-9 py-2">
                    <div className="flex gap-2 items-center font-white">
                        <span className="text-xl font-bold text-white">Hello, User</span>
                    </div>

                </div>
                <div className="hmenu-content pt-3 flex flex-col w-full gap-2">
                    <div className=" flex flex-col w-full gap-2">
                        <span className="text-base font-bold pl-9">Categories</span>
                        <ul className="">
                            {data ?
                                data.map((menu: []) =>
                                    <Link key={menu.toString()} href={`/categories/${menu}`}>
                                        <li className="hmenu-item text-sm text-black" style={{ textTransform: "capitalize" }}><span className="pl-9 ">{menu}</span></li>
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

        </>
    )
};

export default HMenu
