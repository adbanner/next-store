import Image from 'next/image'
import banner_top from "@/assets/images/home/banner_top_1.jpg"
import Card from "@/components/home/Card"

import { GoChevronLeft } from "react-icons/go";

const Page = () => {
    return (
        <>
            <div className="home-page wrapper-container pb-4">
                <div className="wrapper">
                    <div className='arrows flex justify-between'>
                          <div className='arrow-left'>
                            <button className='arrow-btn'><GoChevronLeft size="60" color='white'/></button>
                        </div>
                        <div className='arrow-right'>
                            <button className='arrow-btn'><GoChevronLeft size="60" color='white'/></button>
                        </div>
                    </div>
                    <div className="banner-top">
                      
                        <div className="banner">
                            <img src="https://m.media-amazon.com/images/I/71CTkwWUOHL._SX3000_.jpg" />
                        </div>
                        
                    </div>
                    <div className='flex flex-col w-full gap-4'>
                        <div className='flex gap-4 px-4 relative'>
                            <Card />
                            <Card header={"Keep shopping for"} />
                            <Card header={"Top offers"} />
                            <Card header={"Popular categories"} />
                        </div>
                        <div className='flex gap-4 px-4 relative'>
                            <Card header={"Men's fashion sale"} />
                            <Card header={"Women's shoes sale"} />
                            <Card header={"Electronics"} />
                            <Card header={"Refurbished products"} />
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
};

export default Page
