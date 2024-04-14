"use client"

import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from "react-bootstrap";

const QuantitySelector = (props) => {
    const quantity = props.quantity || 5
    return (
        <>
            <div  className="quantity-selector flex" style={{ width: "100%" }}>
                <select id="quantitySelector" style={{ width: "100%" }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        </>
    )
};

export default QuantitySelector
