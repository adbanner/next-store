import { useQuery } from '@tanstack/react-query'
import fetchData from "@/lib/fetchFunctions/fetchData"
import Link from "next/link"
import CardItem from '@/components/home/cards/CardItem'
import { IProduct } from '@/models/IProduct'

type Props = {
  header: string;
};

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products?limit=20')
  return res.json()
}



const Card = async ({ header }:Props) => {
  let products = await getProducts()
  products.map((item:IProduct) => item.rnd = Math.random() * 1)
  products = products.sort((a:IProduct, b:IProduct) => a.rnd! - b.rnd!)

  return (
    <>
      <div className="home-card | p-4  bg-white w-full h-full">
        <div className="card-header font-bold text-xl pb-3">
          <p>{header || ``}</p>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-1 pb-3" >
          <CardItem product={products[0]} />
          <CardItem product={products[1]} />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-1 ">
          <CardItem product={products[2]} />
          <CardItem product={products[3]} />
        </div>
      </div>
    </>
  )
};

export default Card
