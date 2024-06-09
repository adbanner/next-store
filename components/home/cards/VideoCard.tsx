import { useQuery } from '@tanstack/react-query'
import fetchData from "@/lib/fetchFunctions/fetchData"
import Link from "next/link"
import CardItem from '@/components/home/cards/CardItem'
import { IProduct } from '@/models/IProduct'

type Props = {
  header: string;
};



const Card = async ({ header }: Props) => {

  return (
    <>
      <div className="home-video-card |   bg-black w-full h-full grid justify-center">
        <div className='home-video-card-ui text-white p-4 absolute'>
          <div className="card-header  ">
            <p className='font-bold text-xl pb-0'>{header || ``}</p>
            <span className='text-sm'>Titanic II</span>
          </div>
          <div className='home-video-card-footer'>
            <p className='text-sm'>Start watching on Next Video</p>
          </div>

        </div>
        <div className='card-img'>
          <div className='card-img-gradient'></div>
          <img src="https://m.media-amazon.com/images/S/pv-target-images/14c4abfaa0898e08995b11c98fb18ae8f1dfc3f6b46e0d85cdef05356ee2c684._AC_SL792_.png" />

        </div>
        {/* <img className='card-bg'/> */}

      </div>
    </>
  )
};

export default Card
