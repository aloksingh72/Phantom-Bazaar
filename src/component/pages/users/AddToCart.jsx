import React from 'react';

function AddToCart({ product, cartItems, handleAddToCart }) {
  const isInCart = cartItems.includes(product);

  return (
    <button onClick={() => handleAddToCart(product)}
      className="text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 hover:bg-gray-700
           hover:text-white transition-all duration-300 ease-in px-3">
      {isInCart ? <p>Remove Item</p> : <p>Add to Cart</p>}
    </button>
  );
}

export default AddToCart;
