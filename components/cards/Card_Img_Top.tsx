import Link from "next/link"
import ProductRating from "@/components/ProductRating"
import { Button } from "react-bootstrap";
import AddToBasket from "@/components/SmartWagon/AddToBasket"
import { IProduct } from "@/models/IProduct";

type Props = {
    product: IProduct
}

const Card_Img_Top = ({ product }: Props) => {
    return (
        <>

            <div className="banner" style={{ width: "194px", height: "384px", minWidth: "194px", maxHeight: "384px", padding: "0rem", color: "#333", background: "white" }}>
                <Link href={`/product/${product.id}`}>
                    <div className="" ></div>
                    <div >
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
