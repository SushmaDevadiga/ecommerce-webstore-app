import React from "react";

const Product = ({ product, addToCart }) => (
  <div className="product">
    <h3>{product.name}</h3>
    <img src={product.image} alt={product.name} />
    <p>{product.description}</p>
    <p>Price: ₹{product.price.toFixed(2)}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
);

export default Product;
