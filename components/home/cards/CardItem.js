import Link from "next/link"

const CardItem = ({product}) => {
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
