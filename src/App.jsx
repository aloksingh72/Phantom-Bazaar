import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./component/Shop";
import Admin from "./component/Admin";
import Cart from "./component/Cart";
import Navbar from "./component/Navbar";
import { useCart } from "./component/pages/cart/useCart";


function App(){
  const {cartItems,handleAddToCart,handleRemoveFromCart} =useCart();
 
  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route
          path="/"
          element={<Shop cartItems={cartItems} handleAddToCart={handleAddToCart} />}
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
      </Routes>
    </div>
  );
}

export default App;
