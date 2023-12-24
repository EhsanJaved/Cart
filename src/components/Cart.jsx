// src/components/Cart.jsx
import React from 'react';

const Cart = ({ cart, onRemoveFromCart, onDecreaseQuantity, onAddToCart }) => {
  return (
    <div className="border p-4  bg-slate-200 shadow-2xl">
      <h2 className="text-xl font-bold mb-4">Shopping Cart {cart.length}</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.name}</span>
              <div className="flex items-center">
                <button
                  className="bg-red-600 text-white px-2 py-1 rounded-md m-2"
                  onClick={() => onRemoveFromCart(item)}
                >
                  Remove
                </button>
                <button
                  className="bg-gray-300 text-gray-700 px-2 py-1 m-2"
                  onClick={() => onDecreaseQuantity(item)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r m-2"
                  onClick={()=>onAddToCart(item)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
