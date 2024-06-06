import { Suspense } from 'react'
import SmartWagon_Main from "@/components/SmartWagon_Main"
import SmartWagon_Carousel from "@/components/SmartWagon_Carousel"

const page = () => {
    return (
        <>
            <div className="cart-page | wrapper-container | flex flex-col gap-4 pb-6 pt-6 jusify-start px-main">
                <div className="wrapper px-4 h-full">
                    <Suspense>
                        <SmartWagon_Main></SmartWagon_Main>
                    </Suspense>
                </div>
                <SmartWagon_Carousel title={"Customers also viewed these products"}></SmartWagon_Carousel>
                <SmartWagon_Carousel title={"Inspired by your browsing history"}></SmartWagon_Carousel>

            </div>
            {/* <div className="horizontal-line"></div>
            <ProductsList></ProductsList> */}
        </>
    )
};

export default page
