// src/components/Product.jsx
import React, { useState } from 'react';

const Product = ({ product, onAddToCart, onRemoveFromCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="border p-10 m-4 mx-4 shadow-md flex flex-col items-center max-w-sm bg-slate-200 rounded-lg">
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <div className="flex items-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-700 mr-2 rounded-md"
          onClick={() => onAddToCart({ ...product, quantity })}
        >
          Add to Cart
        </button>
        <div className="flex items-center">
          <button
            className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l"
            onClick={handleRemoveQuantity}
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r"
            onClick={handleAddQuantity}
          >
            +
          </button>
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 hover:bg-red-700 ml-2 rounded-md"
          onClick={() => onRemoveFromCart({ ...product, quantity })}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
