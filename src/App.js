import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
import Cart from "./Cart";

function App() {
  const products = [
    {
      id: 1,
      name: "Garnier Skin Naturals, Facewash, Cleansing and Brightening",
      price: 161.0,
      description: "Brightens and cleanses skin with Yuzu Lemon Essence.",
      details: {
        weight: "100g",
        dimensions: "6 x 3.1 x 15.7 cm",
        scent: "Lemon",
        skinType: "All",
      },
      benefits: "Brightening",
      image: "/images/facewash1.jpg",
    },
    {
      id: 2,
      name: "Garnier Men, Face Wash, Brightening & Anti-Pollution",
      price: 148.0,
      description: "Removes dust and pollution for brighter-looking skin.",
      details: {
        weight: "100g",
        dimensions: "4.9 x 7.6 x 12.8 cm",
        scent: "Citrus",
        skinType: "All",
      },
      benefits: "Brightening",
      image: "/images/facewash2.jpg",
    },
    {
      id: 3,
      name: "Garnier Men, Anti-Pimple Face Wash, Repairs Skin",
      price: 137.0,
      description: "Combats pimples and balances skin oils.",
      details: {
        weight: "100g",
        dimensions: "15.2 x 5.6 x 3.8 cm",
        scent: "Mint",
        skinType: "All",
      },
      benefits: "Oil Control",
      image: "/images/facewash3.jpg",
    },
    {
      id: 4,
      name: "Garnier Men Oil Clear Clay D-Tox Deep Cleansing",
      price: 401.0,
      description: "Removes excessive oil and keeps skin clean.",
      details: {
        weight: "200g",
        dimensions: "7 x 5 x 14 cm",
        scent: "Aloe Vera",
        skinType: "Oily",
      },
      benefits: "Oil Control",
      image: "/images/facewash4.jpg",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-commerce Store</h1>
      </header>
      <main>
        <ProductList products={products} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </main>
    </div>
  );
}

export default App;
