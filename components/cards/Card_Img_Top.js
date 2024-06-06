import Link from "next/link"
import ProductRating from "@/components/ProductRating"
import { Button } from "react-bootstrap";
import AddToBasket from "@/components/SmartWagon/AddToBasket"

const Card_Img_Top = ({ product }) => {
    return (
        <>

            <div className="banner" width="194" height="384" style={{ minWidth: "194px", maxHeight: "384px", padding: "0rem", color: "#333", background: "white" }}>
                <Link href={`/product/${product.id}`}>
                    <div className="" style={{}}></div>
                    <div style={{ width: "194", height: "194px" }}>
                        <img src={product.image} className="img" alt="" />
                    </div>
                    <span className="text-sm font-bold a-clr-main">
                        {`${product.title.substring(0, 35)}...`}
                    </span>
                    <ProductRating rating={product.rating}></ProductRating>
                    <div className="flex gap-2 items-center">
                        <span>£{product.price}</span>
                    </div>
                    <br></br>
                </Link>
                <AddToBasket product={product} />
            </div>

        </>
    )
};

export default Card_Img_Top
