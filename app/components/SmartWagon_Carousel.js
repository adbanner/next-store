"use client"
import { useQuery } from '@tanstack/react-query'
import fetchData from "@/app/fetchFunctions/fetchData.ts"
import Card_Img_Top from "@/app/components/cards/Card_Img_Top"
import { GoChevronLeft } from "react-icons/go";
import { useEffect, useState } from 'react';

const SmartWagon_Carousel = (props) => {
  const carouselItemWidth = 194
  const [carouselGap, setCarouselGap] = useState("3rem")
  
  const resizeCarousel = () => {

    const smartWagonCarousel = document.querySelector("#smartWagonCarousel")
    let itemsAmount = Math.floor(smartWagonCarousel.clientWidth / carouselItemWidth)
    smartWagonCarousel.style.gap = (smartWagonCarousel.clientWidth - carouselItemWidth * itemsAmount) / itemsAmount + "px"
  }
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      resizeCarousel()
    })
    setTimeout(resizeCarousel, 500)
  }, [])

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
      <div className="smart-wagon | w-full bg-white px-main py-4 border-main">
        <div className='flex justify-between w-full'>
          <p className='text-medium mb-3 font-bold'>{props.title}</p>
          <span className='text-sm align-right '>Page 1 of 3</span>
        </div>
        
        <div className='smart-wagon-grid items-center'>
          <button className='arrow-btn'><GoChevronLeft size="25" /></button>
          <div id="smartWagonCarousel" className="carousel items flex">
            {products ?
              products.map(product =>
                <Card_Img_Top key={product.id} product={product} />
              )
              :
              <p></p>
            }
          </div>
          <button className='arrow-btn'><GoChevronLeft size="25" className='flip-h' /></button>
        </div>
      </div>
    </>
  )
};

export default SmartWagon_Carousel
