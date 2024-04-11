"use client"

import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from "react-bootstrap";

const Counter = () => {
    const count = 10
    return (
        <>
            <div className="flex" style={{ width: "100%" }}>
                <select id="value" style={{ width: "100%" }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        </>
    )
};

export default Counter

