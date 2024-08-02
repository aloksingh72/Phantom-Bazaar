import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./pages/users/Category";
import Product from "./pages/users/Product";

function Shop() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // API fetching for categories-------------------
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(["All",...response.data]);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    getCategories();
  }, []);

  // API fetching for products---------------------
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  // handle categories function 
  const handleCategoryClick = (category) => {
    if(category === "All"){
      setFilteredProducts(products);
    }else{
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
    
  };
  // const filter = product.filter(product => product.category === category);
  //  setfilteredproducts(filtered);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-row ">
      <div className="w-[190px]">
        <h2 className="font-bold text-lg mt-7 mb-3 ml-5">Categories</h2>
        {categories.map((category, index) => (
          <Category key={index} category={category} onCategoryClick={handleCategoryClick} />
        ))}
      </div>
      <div className="grid grid-cols-4 py-5  ml-[90px] gap-y-3">
       
      {filteredProducts.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
