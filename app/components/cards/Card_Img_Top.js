import Link from "next/link"
import ProductRating from "../ProductRating"
import { Button} from "react-bootstrap";

const Card_Img_Top = (props) => {
    return (
        <>
            <Link href={`/product/${props.product.id}`}>
                <div className="banner" width="194" height="384" style={{minWidth: "194px", maxHeight: "384px",padding: "0rem", color: "#333", background:"white" }}>
                    <div className="" style={{}}></div>
                    <div style={{width:"194", height: "194px" }}>
                        <img src={props.product.image} className="img" alt=""/>
                    </div>
                    <span className="text-sm font-bold a-clr-main">
                        {`${props.product.title.substring(0, 35)}...`}
                    </span>
                    <ProductRating rating={props.product.rating}></ProductRating>
                    <div className="flex gap-2 items-center">
                        <span>£{props.product.price}</span>
                    </div>
                    <br></br>
                    <Button className="radius-round text-sm" variant="warning" >Add to Basket</Button>
                </div>
            </Link>
        </>
    )
};

export default Card_Img_Top
