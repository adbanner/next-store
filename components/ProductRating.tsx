"use client"
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { IRating } from "@/models/IProduct";

type Props = {
  rating: IRating
}

const ProductRating = ({rating}:Props) => {
  return (
    <>
      <div className='card-rating'>
         {rating ? showRating(rating.rate): showRating(3)}
        <span className="card-rating-number link text-xs">&nbsp;  {rating? rating.count: "100"}</span>
      </div>
    </>
  )
};

export default ProductRating


export function showRating(rate:number){
  let rating = Math.round(rate)
  let stars = []
  for(let i=0; i<5;i++){
    i<rating ? 
    stars.push(<AiFillStar key={i} size="18px" color="orange" />)
    :
    stars.push( <AiOutlineStar key={i} size="18px" color="orange" />)
  }
  return  stars
}