import React from "react";
import product from './product';


const ProductList = ({ product, addToCart }) => (
    <section className='product-list' id='product-list'>
          <h2>Products</h2>
    <div className="products">
    {products.map((product, index) => (
      <product key = {index} product = {product} addToCart ={() => addToCart(index)} />
    ) ) }
    </div>
    </section>
    );

export default ProductList;