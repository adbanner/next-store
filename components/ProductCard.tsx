"use client"
import Card from 'react-bootstrap/Card';
import ProductRating from "@/components/ProductRating"
import { IProduct } from "@/models/IProduct";

type Props = {
  product: IProduct
}



const ProductCard = ({ product }:Props) => {
    //const [rating, setRating] = useState([1,2,3,4,5])
   
    return (
        <>
            <Card className="product-card | card" style={{ width: '220px', border: "none" }}>
                <Card.Img variant="top" className='cardImg' src={product.image} />
                <Card.Body className='m-0'>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text style={{ lineHeight: "1.3", color: "#007185", maxHeight: "105px", overflow: "hidden" }}>
                        {product.description}
                    </Card.Text>
                    <ProductRating rating={product.rating}></ProductRating>
                    <p className='card-price text-base a-clr-price'><sup></sup>£{product.price}</p>
                    {/* <Button variant="warning">Add to Cart</Button> */}
                </Card.Body>
            </Card>
        </>
    )
};

export default ProductCard
