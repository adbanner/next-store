"use client"
import { useQuery } from '@tanstack/react-query'
import fetchData from "@/app/fetchFunctions/fetchData"
import Card_Img_Top from "@/app/components/cards/Card_Img_Top"
import { GoChevronLeft } from "react-icons/go";

const SmartWagon_Carousel = (props) => {

  let products
  const { data, isPending, isError, error } = useQuery({ queryKey: ['productsList'], queryFn: () => fetchData("") })

  if (isPending) return <div></div>
  if (isError) return <p>Error</p>
  if (data) {
    data.map(item => item.rnd = Math.random() * 1)
    products = data.sort((a, b) => a.rnd - b.rnd)//.slice(0,4)
  }

  return (
    <>
      <div className="smart-wagon | w-full bg-white px-main py-4">
        <p className='text-medium mb-3'>{props.title}</p>
        <div className='smart-wagon-grid items-center'>
          <button className='arrow-btn'><GoChevronLeft size="25"/></button>
          <div className="carousel items flex gap-4">
            {products ?
              products.map(product =>
                <Card_Img_Top key={product.id} product={product} />
              )
              :
              <p></p>
            }
          </div>
          <button className='arrow-btn'><GoChevronLeft size="25" className='flip-h'/></button>
        </div>
      </div>
    </>
  )
};

export default SmartWagon_Carousel
