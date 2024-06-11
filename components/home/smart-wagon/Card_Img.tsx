import Link from "next/link"
import ProductRating from "@/components/ProductRating"
import { Button } from "react-bootstrap";
import AddToBasket from "@/components/SmartWagon/AddToBasket"
import { IProduct } from "@/models/IProduct";

type Props = {
    product: IProduct
}

const Card_Img = ({ product }: Props) => {
    return (
        <>
            <div className="" style={{ width: "180px", height: "200px", padding: "0rem", background: "white" }}>
                <Link href={`/product/${product.id}`}>
                    <div >
                        <img src={product.image} className="img" alt="" style={{ width: "100%", height: "200px", objectFit: "contain" }} />
                    </div>
                </Link>
            </div>
        </>
    )
};

export default Card_Img
