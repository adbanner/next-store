import Card from "@/components/home/cards/Card"

import { GoChevronLeft } from "react-icons/go";
import Slider from "@/components/home/slider/Slider"

const Page = () => {
    return (
        <>
            <div className="home-page wrapper-container pb-4">
                <div className="wrapper">
                   <Slider/>
                    <div className='home-cards flex flex-col w-full gap-4'>
                        <div className='flex gap-4 px-4 relative'>
                            <Card header={""} />
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
