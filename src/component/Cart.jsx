import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Cart({ cartItems }) {
  return (
    <div className="flex p-4">
      {/* <h2 className="text-xl font-bold mb-4">Cart</h2>   */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
           
            // top level div 
            <div className="flex ">
              {/* left side  top level */}
              <div className="flex ml-20 gap-x-[150px] ">
              {/* image and description wali div */}
              <div className="flex  border-b-4  border-b-slate-800 w-[611px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[160px] h-[220px] object-cover mt-3 mb-3 mr-4"
                />
                <div>
                  <p className="font-semibold ml-3 mt-4"> {item.title}</p>
                  <p className="ml-3">
                    {" "}
                    {item.description.length > 20
                      ? item.description.substring(0, 70) + "..."
                      : item.description}
                  </p>
                  <div className="flex ">
                    <p className=" text-green-600 ml-3 font-bold mt-14">
                      ₹{item.price}
                    </p>
                    <MdDeleteForever className="mt-14 text-2xl ml-[350px] bg-orange-400 rounded-full" />
                  </div>
                </div>
              </div>
              
            </div>

            
            </div>
          ))}
        </ul>
        
      )}
      <div className="flex  ml-[250px] gap-x-[150px] flex-col">
        <p className="text-xl font-semibold text-green-600">Your Cart</p>
        <h2 className="text-[40px] font-semibold text-green-600">Summary</h2>
        <p className="text-[20px] font-bold">Total Items:3</p>

        <div className="mt-[150px]">
        <p className="font-semibold text-[20px]">Total Amount:$560</p>
        <button className="bg-green-700 px-[60px] font-bold py-2 rounded-md text-white hover:scale-110 transition-all duration-200 mt-4">Checkout Now</button>
        </div>


      </div>
    </div>
  );
}

export default Cart;
