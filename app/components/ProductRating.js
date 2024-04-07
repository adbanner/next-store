import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const ProductRating = () => {
  return (
    <>
      <div className='card-rating'> <AiFillStar size="18px" color="orange" /> <AiFillStar size="18px" color="orange" /><AiOutlineStar size="18px" color="orange" /> <span class="card-rating-number">{Math.round(Math.random() * 1000)}</span></div>
    </>
  )
};

export default ProductRating
