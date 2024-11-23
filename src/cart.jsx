import React from "react";
import cartitem from "./cartitem";


const cart = ({ cart, removeFromCart }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <section className='shopping-cart' id='Shoping-cart'>
          <h2>Shopping Cart</h2>
          <div className="cart-items">
            {cart.lenth === 0 ? (
                <p>empty</p>
            ) : (
                cart.map((item, index) => (
                    <cartitem key={index} item={item} removeFromCart={() => removeFromCart(index)} />
                ))
            )}
          </div>
          <div className="cart-total">Total: 0.00/-</div>
          <button id='chechout-btn'>Checkout</button>
        </section>
    )
}

export default cart;

