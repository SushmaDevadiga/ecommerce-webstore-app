import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      )}
      <div className="cart-total">
        <strong>Total: ₹{total.toFixed(2)}</strong>
      </div>
      {cart.length > 0 && <button>Checkout</button>}
    </section>
  );
};

export default Cart;
