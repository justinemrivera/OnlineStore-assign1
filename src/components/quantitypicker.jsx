import React, { useState } from "react";

function QuantityPicker(){
    const [quantity, setQuantity] =useState(1);

    const handleIncrease = () => {
        console.log("Button Clicked");
        setQuantity(quantity+1);
    }
const handleDecrease = () => {
    if(quantity === 1) return;
        setQuantity(quantity - 1);
    }
  

    return (
<div className="quantity-picker">
    <button className="btn btn-sm btn-primary" onClick={handleIncrease}>+</button>
    <label>{quantity}</label>
    <button className="btn btn-sm btn-primary" disabled={quantity === 1} onClick={handleDecrease}>-</button>
</div>
    );
}

export default QuantityPicker;

