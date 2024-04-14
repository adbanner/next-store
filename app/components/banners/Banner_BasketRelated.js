import Sponsored from "../Sponsored"

import Link from "next/link"
import ProductRating from "../ProductRating"
import Banner_Col_Img_Left from "./Banner_Col_Img_Left"

import { useQuery} from '@tanstack/react-query'
import fetchData from "../../fetchFunctions/fetchData"


const Banner_BasketRelated = () => {
    let products
    const {data, isPending, isError, error} = useQuery({queryKey: ['productsList'], queryFn: ()=>fetchData("")})
    if(isError) return <p>Error</p>
    if(data) {
        data.map(item => item.rnd = Math.random() * 1)
        products =  data.sort((a, b) => a.rnd - b.rnd).slice(0,4)
    }
  return (
    <>
      <div className="basket-realted p-3 rounded-lg bg-white border-main">
        <span className="text-sm font-bold">Products related to items in your basket</span>
        <Sponsored></Sponsored>
        <div className="items">
          {products ?
            products.map(product =>
              <Link key={product.id} href={`/${product.id}`}>
                <Banner_Col_Img_Left product={product}/>
              </Link>
            )
            :
            <p></p>
          }
          
        </div>
      </div>
    </>
  )
};

export default Banner_BasketRelated
