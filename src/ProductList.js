import React from "react";
import Product from "./Product";

const ProductList = ({ products, addToCart }) => (
  <section className="product-list">
    <h2>Products</h2>
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  </section>
);

export default ProductList;
