"use client"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type Props = {
    title: string,
    image: string
}

const Category = ({ title, image }: Props) => {
    return (
        <>
            <Card className="product-card" style={{ width: '220px', border: "none" }}>
                <Card.Img variant="top" className='cardImg' src={image} />
                <Card.Body className='m-0'>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    {/* <Button variant="warning">Add to Cart</Button> */}
                </Card.Body>
            </Card>
        </>
    )
};

export default Category
