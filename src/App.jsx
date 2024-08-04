import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./component/Shop";
import Admin from "./component/Admin";
import Cart from "./component/Cart";
import Navbar from "./component/Navbar";


function App() {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from local storage if available
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    // Save cart items to local storage whenever they change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.filter((item) => item.id !== product.id);
      } else {
        return [...prevItems, product];
      }
    });
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route
          path="/"
          element={<Shop cartItems={cartItems} handleAddToCart={handleAddToCart} />}
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </div>
  );
}

export default App;
