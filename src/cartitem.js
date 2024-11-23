import React from "react";

const cartitem = ({ item, removeFromCart }) => (
    <div className="cart-item">
        <h4>{item.name}</h4>
        <h4>Price : {item.price} /-</h4>
        <h4>brand : {item.brand}</h4>
        <button onClick={removeFromCart}>Remove</button>
    </div>
);



export default cartitem;
