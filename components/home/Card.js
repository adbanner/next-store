import { useQuery } from '@tanstack/react-query'
import fetchData from "@/lib/fetchFunctions/fetchData"
import Link from "next/link"

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products?limit=20')
  return res.json()
}


const Card = async ({ header }) => {
  let products = await getProducts()
  products.map(item => item.rnd = Math.random() * 1)
  products = products.sort((a, b) => a.rnd - b.rnd)

  return (
    <>
      <div className="home-card | p-4  bg-white w-full">
        <div className="card-header font-bold text-xl pb-3">
          <p>{header || `Pick up where you left off`}</p>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-1 pb-3" >
          <Link key={products[0].id} href={`/product/${products[0].id}`}>
            <div>
              <div className="card-img">
                <img src={products[0].image} style={{ height: "130px", objectFit: "contain" }} ></img>
              </div>
              <p className="card-txt">{`${products[0].title.substring(0, 15)}...`}</p>
            </div>
          </Link>

          <Link key={products[1].id} href={`/product/${products[1].id}`}>
            <div>
              <div className="card-img">
                <img src={products[1].image} style={{ height: "130px", objectFit: "contain" }} ></img>
              </div>
              <p className="card-txt">{`${products[1].title.substring(0, 15)}...`}</p>
            </div>
          </Link>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-1 ">
          <Link key={products[2].id} href={`/product/${products[2].id}`}>
            <div>
              <div className="card-img">
                <img src={products[2].image} style={{ height: "130px", objectFit: "contain" }} ></img>
              </div>
              <p className="card-txt">{`${products[2].title.substring(0, 15)}...`}</p>
            </div>
          </Link>
          <Link key={products[3].id} href={`/product/${products[3].id}`}>
            <div>
              <div className="card-img">
                <img src={products[3].image} style={{ height: "130px", objectFit: "contain" }} ></img>
              </div>
              <p className="card-txt">{`${products[3].title.substring(0, 15)}...`}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
};

export default Card
