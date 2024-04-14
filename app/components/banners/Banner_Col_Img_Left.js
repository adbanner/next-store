

import Link from "next/link"
import ProductRating from "../ProductRating"

const Banner_Col_Img_Left = (props) => {
    return (
        <>
            <Link href={`/product/${props.product.id}`}>
                <div className="banner-col_img_left cursor-pointer display flex py-2" width="100%" height="250" style={{ padding: "0 1rem", color: "#333", background: "white" }}>

                    <div className="img">
                        <img src={props.product.image} className="" alt="" />
                    </div>
                    <div>
                        <div className="px-1"></div>
                        <span className="text-sm font-medium a-clr-main">
                            {`${props.product.title.substring(0, 12)}...`}
                        </span>
                        <ProductRating rating={props.product.rating}></ProductRating>

                        <div className="flex gap-2 items-center">
                            <span className="text-sm a-clr-price">£{props.product.price}</span>
                        </div>
                        <button className="remove-from-view-btn">See all buying options</button>
                    </div>
                </div>
            </Link>
        </>
    )
};

export default Banner_Col_Img_Left
