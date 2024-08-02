import React from "react";

function Product({ product }) {
  return (
    // outer class div for product component
    <div className="grid grid-cols-4   ">
       
        {/* indiviual  card ki div */}
      <div className="w-[400px]  p-3 border border-black">
        <div>
          <p className="text-gray-700 font-semibold text-left truncate w-40 mt-1">{product.title}</p>
        </div>
        <div>
          <p className="w-40 text-gray-400 font-normal text-[10px] text-left ">{product.description}</p>
        </div>
        <div className="h-[180px]">
          <img src={product.image} alt={product.title} className="h-full mx-auto" 
            
           />
        </div>
        {/* price and button div */}
        <div className="flex justify-items-center gap-14 mt-5 ">
        <div>
          <p>{product.price}</p>
        </div>
        <div>
          <button className="text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in px-3 ">{false ? <p>Remove Item</p> : <p>Add to Cart</p>}</button>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
