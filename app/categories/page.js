
import Link from "next/link"
import Category from "../components/Category"
import { useContext } from "react"


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
            <div className="categories-list wrapper-container px-main">
                <div className="wrapper flex gap-3 flex-wrap justify-center">
                    {
                        categories && products ?
                            categories.map(category => {
                                for (let i in products) {
                                    if (products[i].category == category) return <Link href={`/categories/${category}`}><Category key={products[i].name} image={products[i].image} title={category} ></Category></Link>
                                }
                            })
                            :
                            <div>No categories</div>
                    }
                </div>
            </div>
        </>
    )
};


