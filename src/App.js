import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';
import cart from "./cart";

function App() {

  const [products] =  useState([
    {
        id : 1,
        img : "",
        name : "Garnier Skin Naturals, Facewash, Cleansing and Brightening, Bright Complete, 100 g",
        price : 161,
        details : "Use by: 24 OCT 2027",
        brand : "Garnier",
        weight : "100 Grams",
        dimension : "L x W x H 6 x 3.1 x 15.7 Centimeters",
        sent : "Lemon",
        agerange : "Adult",
        skintype : "All",
        quantity : "1",
        productbenefits : "Brightening",
        specialfeature :  "Natural Ingredients",
        activeingredients : "Yuzu Lemon Essence",

        aboutitem : ""
    },
]);

const [cart, setCart] = useSate([]);

const addToCart = (index) => {
  const product =products[index];
  const cartitem = cart.find((item) => item.name === product.name);
  if(cartitem) {
    cartitem.quantity++;
  }else{
    setCart([...cart, {...product, quantity: 1 }]);
  }
}
const removeFromCart = (index) =>{
  const newCart = [...cart];
  newCart.splice(index, 1);
  setCart(newCart);
}


  return (
    <div className="App">
      <header className="App-header">
        <h1>E-commerce Store</h1>
      </header>
      <main>
        <ProductList products={products} addToCart={addToCart} />
        <cart cart= {cart} removeFromCart = {removeFromCart} />
      </main>
      <div id='product-model' className="model hidden">
        <div className="modal-content">
          <span className='close'>&times;</span>
          <div className="modal-details"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
