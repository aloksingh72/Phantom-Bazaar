import React, { useState } from 'react'



function AddToCart({product}) {
  const [isInCart, setIsInCart] =useState(false);

  const handleAddToCart = () =>{
    setIsInCart(!isInCart);

  }
  console.log(isInCart);




  return (
    <button onClick={handleAddToCart}
    className="text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 hover:bg-gray-700
           hover:text-white transition-all duration-300 ease-in px-3"
    >
      {isInCart ? <p>Remove Items</p>:<p>Add to Cart</p>}

    </button>
  )
}

export default AddToCart
