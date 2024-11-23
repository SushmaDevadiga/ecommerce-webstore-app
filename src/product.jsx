import React from "react";

const product = ({ product, addToCard } ) => (
    <div className="product">
        <img src={product.img} alt={product.name} width="100" />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <p>{product.details}</p>
        <p>{product.brand}</p>
        <p>{product.weight}</p>
        <p>{product.dimension}</p>
        <button onClick={addToCard}>ADD TO CART</button>
    </div>
)

export default  product;   