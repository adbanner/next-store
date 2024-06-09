import Card from "@/components/home/cards/Card"
import VideoCard from "@/components/home/cards/VideoCard"

import { GoChevronLeft } from "react-icons/go";
import Slider from "@/components/home/slider/Slider"

const Page = () => {
    return (
        <>
            <div className="home-page wrapper-container pb-4">
                <div className="wrapper">
                    <Slider />
                    <div className='home-cards | home-grid | w-full gap-4 px-4'>

                        <div className="home-grid-1">
                            <Card header={"Pick up where you left off"} />
                        </div>
                        <div className="home-grid-2">
                            <Card header={"Keep shopping for"} />
                        </div>
                        <div className="home-grid-3">
                            <Card header={"Top offers"} />
                        </div>
                        <div className="home-grid-4">
                            <Card header={"Electronics"} />
                        </div>
                        <div className="home-grid-AB">
                            <VideoCard header={"Video: Recommended for you"} />
                        </div>
                        <div className="home-grid-5">
                            <Card header={"Popular categories"} />
                        </div>
                        <div className="home-grid-6">
                            <Card header={"Must have products"} />
                        </div>
                        <div className="home-grid-7">
                            <Card header={"Beauty & Wellness"} />
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
