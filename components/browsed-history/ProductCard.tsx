import Link from "next/link"
import Image from 'next/image'

import ProductRating from "@/components/ProductRating"
import RemoveFromViewBtn from "@/components/buttons/RemoveFromViewBtn"

import { IProduct } from "@/models/IProduct"

type Props = {
    product: IProduct
}

const ProductCard = ({product}:Props) => {

    return (
        <>
            <div className="" style={{
                width: "210px",
                height: "390px", 
                padding: "0.5rem", 
                border: "1px solid var(--clr-neutral-3)", 
                marginLeft: "-1px", 
                marginRight: "0", 
                marginBottom: "-1px", 
                color: "#333"
            }}>
                <Link href={`/product/${product.id}`}>
                    <div className="" style={{}}></div>
                    <div style={{ padding: "1rem 1rem 0", height: "180px" }}>
                        <img src={product.image} className="img" />
                    </div>
                    <div className="py-1"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-sm a-link-main text-center">
                            {`${product.title.substring(0, 25)}...`}
                        </span>
                        <ProductRating rating={product.rating}></ProductRating>
                        <div className="text-center">
                            <div className="text-sm a-clr-price">£{product.price}</div>
                            <span className="text-xs text-black">Get it <b>20 - 23 Apr</b></span>
                        </div>
                    </div>
                </Link>
                <div className="w-full flex justify-center">
                    <RemoveFromViewBtn productId={product.id} />
                </div>
            </div>

        </>
    )
};

export default ProductCard
