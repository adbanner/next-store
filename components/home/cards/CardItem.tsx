import Link from "next/link"
import { IProduct } from "@/models/IProduct";

type Props = {
  product: IProduct
}

const CardItem = ({product}: Props) => {
  return (
    <>
       <Link key={product.id} href={`/product/${product.id}`}>
            <div>
              <div className="card-img">
                <img src={product.image} style={{ height: "130px", objectFit: "contain" }} ></img>
              </div>
              <p className="card-txt">{`${product.title.substring(0, 15)}...`}</p>
            </div>
          </Link>
    </>
  )
};

export default CardItem
