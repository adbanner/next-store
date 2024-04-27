import Link from "next/link"
import Category from "../components/Category"
import { useContext } from "react"
import { _useAppSelector } from "@/lib/hooks";
import SmartWagon_Carousel from "@/app/components/SmartWagon_Carousel"

export const metadata = {
    title: {
        default: "Categories"
    }
}


async function getCategories() {
    const res = await fetch(`https://fakestoreapi.com/products/categories`)
    return res.json()
}

async function getProducts() {
    const res = await fetch(`https://fakestoreapi.com/products/`)
    return res.json()
}


export default async function Page() {
    const categories = await getCategories()
    const products = await getProducts()
    // const context = useContext(UserContext.browsedHistory)
    return (
        <>
            <div className="categories-list wrapper-container px-main pt-4">
                <div className="wrapper flex gap-3 flex-wrap justify-center">
                    {
                        categories && products ?
                            categories.map(category => {
                                for (let i in products) {
                                    if (products[i].category == category) return <Link href={`/categories/${category}`} key={products[i].name} ><Category image={products[i].image} title={category} ></Category></Link>
                                }
                            })
                            :
                            <div>No categories</div>
                    }
                </div>
            </div>
            
            <SmartWagon_Carousel title={"Customers also viewed these products"}></SmartWagon_Carousel>
        </>
    )
};


