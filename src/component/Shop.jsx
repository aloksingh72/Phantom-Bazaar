import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./pages/users/Category";
import Product from "./pages/users/Product";

function Shop() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  // API fetching for categories-------------------
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
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
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-row ">
      <div className="w-[190px]">
        <h2>Categories</h2>
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
      <div className="grid grid-cols-4 py-5  ml-[90px] gap-y-3">
       
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
