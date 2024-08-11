import React from "react";
import AddToCart from "./AddToCart";

function Product({ product,handleAddToCart, cartItems }) {
  return (
    // outer class div for product component
    <div className="grid grid-cols-4   ">
       
        {/* indiviual  card ki div */}
      <div className="w-[270px]  items-center justify-center hover:scale-110 transition duration-300 ease-in  gap-3  p-4 mt-10 ml-5   border border-orange-950  rounded-lg
      hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <div>
          <p className="text-gray-700 font-semibold text-left truncate w-40 mt-1">{product.title}</p>
        </div>
        <div>
          <p className="w-40 text-gray-400 font-normal text-[10px] text-left ">
            
            {product.description.length>20?
            (product.description.substring(0,70)) + "...":(product.description)}</p>
        </div>
        <div className="h-[180px] mt-3">
          <img src={product.image} alt={product.title} className="h-full mx-auto" 
            
           />
        </div>
        {/* price and button div */}
        <div className="flex justify-between gap-14 mt-5 ">
        <div>
          <p><span>₹</span>{product.price}</p>
        </div>
        <div>
         <AddToCart product={product} handleAddToCart={handleAddToCart} cartItems={cartItems}/>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
