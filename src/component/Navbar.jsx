import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gradient-to-r rounded-b-lg from-blue-500 to-purple-500 text-white  top-0  shadow-lg z-50">
      <div className="flex  flex-row justify-between  p-4">
        <Link
          to="/"
          className="text-lg font-semibold hover:scale-125 hover:text-yellow-300 transition duration-200 ease-in-out "
        >
          Shop
        </Link>

        <Link
          to="/admin"
          className="text-lg font-semibold hover:scale-125 hover:text-yellow-300 transition duration-200 ease-in-out"
        >
          Admin
        </Link>

        <Link
          to="/cart"
          className="text-lg font-semibold hover:scale-125 hover:text-yellow-300 transition duration-200 ease-in-out"
        >
          Cart
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
