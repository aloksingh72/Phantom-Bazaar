import React, { useState, useEffect } from "react";
import axios from "axios";

function AddNewProduct() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/categories");
        setCategories(["All", ...response.data]);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    getCategories();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleSubmit = async (e) => { 
    e.preventDefault();// prevent default form submission

    const newProduct = {
        title:productName,
        desciption:productDesc,
        price:productPrice,
        image:productImage,
        category:selectedCategory
    };
    try {
        const response = await axios.post("'https://fakestoreapi.com/products", newProduct);
        console.log("Product added:", response.data);
        //  Form fields ko reset kar denge  after successful submission
        setProductName("");
        setProductDesc("");
        setProductPrice("");
        setProductImage("");
        setSelectedCategory("");
      } catch (err) {
        console.error("Error in adding product:", err);
      }
};

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold text-center mt-6">
        Add New Product Here
      </h1>
      <form
        action="submit"
        className="flex flex-col text-center mt-7 gap-y-6 border border-purple-600 p-4 rounded-xl"
      >
        <div>
          <label htmlFor="product-name">
            Product Name:
            <input
              name="product-name"
              type="text"
              placeholder="Enter Product Name"
              className="border border-black rounded-md ml-6"
              value={productName} // Bind to state
              onChange={(e) => setProductName(e.target.value)}// update state on input change
            />
          </label>
        </div>
        <div>
          <label htmlFor="product-desc">
            Product Desc:
            <input
              type="text"
              placeholder="Enter the Description"
              className="border border-black rounded-md ml-6"
              value={productDesc}// bind the state
              onChange={(e) => setProductDesc(e.target.value)}// update the description on input change
            />
          </label>
        </div>
        <div>
          <label htmlFor="product-price">
            Product Price:
            <input
              type="number"
              placeholder="Enter the Price"
              className="border border-black rounded-md ml-7"
              value={productPrice}
              onChange={(e)=> setProductPrice(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="product-image">
            Product Image:
            <input
              type="url"
              placeholder="Enter the Product Url"
              className="border border-black rounded-md ml-7"
              value={productImage}
              onChange={(e)=>setProductImage(e.target.value)}
            />
          </label>
        </div>
        <div className="">
          <p>Enter Category:</p>
          <select
            className="outline rounded-md ml-4"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        <button className="border hover:scale-125   transition duration-200 ease-in-out border-black w-[200px] ml-[650px] rounded-lg px-4 py-2 font-bold">
          Post Data
        </button>
      </form>
    </div>
  );
}

export default AddNewProduct;
