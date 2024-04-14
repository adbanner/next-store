"use client"
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const ProductRating = (props) => {
  return (
    <>
      <div className='card-rating'>
         {props.rating ? showRating(props.rating.rate): showRating(3)}
        <span className="card-rating-number link">&nbsp;&nbsp;  {props.rating? props.rating.count: "100"}</span>
      </div>
      {}
    </>
  )
};

export default ProductRating


export function showRating(rate){
  let rating = Math.round(rate)
  let stars = []
  for(let i=0; i<5;i++){
    i<rating ? 
    stars.push(<AiFillStar size="18px" color="orange" />)
    :
    stars.push( <AiOutlineStar size="18px" color="orange" />)
  }
  return  stars
}