import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Shop from "./component/Shop";
import Admin from "./component/Admin";
import Cart from "./component/Cart";
import Navbar from "./component/Navbar";
import { Routes,Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Navbar path="/" />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
