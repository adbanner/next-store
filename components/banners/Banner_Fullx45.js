import Link from "next/link"
import banner_650x45 from "@/assets/images/banner/banner_650x45.jpg"
import Image from 'next/image'

const Banner_Fullx45 = () => {
    return (
        <>
            <div className="flex justify-center flex-col ">
                <div className="flex justify-center">
                <Link href="/categories/electronics"><Image src={banner_650x45.src} width="650" height="45" alt="banner_650x45" priority/></Link>
                </div>
            </div>
        </>
    )
};

export default Banner_Fullx45
