import React from "react";

const CartItem = ({ item, removeFromCart }) => (
  <div className="cart-item">
    <h4>{item.name}</h4>
    <p>Price: ₹{item.price.toFixed(2)} x {item.quantity}</p>
    <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
    <button onClick={() => removeFromCart(item.id)}>Remove</button>
  </div>
);

export default CartItem;
