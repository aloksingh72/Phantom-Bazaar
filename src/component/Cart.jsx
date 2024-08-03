import React from 'react';

function Cart({ cartItems = [] }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="mb-2 flex items-center justify-between">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-cover mr-2" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p>₹{item.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
