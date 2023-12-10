// src/App.js
import React, { useState } from "react";
import Product from "./components/Product.jsx";
import Cart from "./components/Cart.jsx";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += product.quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[existingProductIndex].quantity > 1) {
        updatedCart[existingProductIndex].quantity -= 1;
        setCart(updatedCart);
      } else {
        // If quantity is 1, remove the item from the cart
        handleRemoveFromCart(product);
      }
    }
  };

  const products = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 39.99 },
    // Add more products as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-600">
      <h1 className="text-2xl font-bold mb-8">Shopping App</h1>
      <div className="flex flex-wrap justify-center ">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <div className="mt-8">
        <Cart
          cart={cart}
          onRemoveFromCart={handleRemoveFromCart}
          onDecreaseQuantity={handleDecreaseQuantity}
        />
      </div>
    </div>
  );
};

export default App;
