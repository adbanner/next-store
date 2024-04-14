
import banner_650x45 from "@/app/assets/images/banner/banner_650x45.jpg"
import Image from 'next/image'

const Banner_Fullx45 = () => {
    return (
        <>
            <div className="flex justify-center flex-col ">
                <div className="flex justify-center">
                    <Image src={banner_650x45.src} width="650" height="45"/>
                </div>
            </div>
        </>
    )
};

export default Banner_Fullx45