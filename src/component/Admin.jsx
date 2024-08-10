import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";


function Admin() {
  const [allData, setAllData] = useState([]);
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Price",
      selector: (row) =>`₹${row.price}` ,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Image",
      selector: (row) => (
        <img src={row.image} alt={row.title} className="h-auto w-[50px]" />
      ),
    },
    {
      name: "Delete",
      cell: (row) => <button className="text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 hover:bg-red-500
           hover:text-white transition-all duration-300 ease-in px-3">Delete</button>,
    },
  ];

  const getData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setAllData(result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="outline w-[1120px] rounded-md mb-10 mx-auto p-6 mt-9">
    <Link to="/addnewProduct">
    <button className="rounded outline ml-2 p-1 cursor-pointer hover:bg-gray-500 transition duration-200 border w-[150px] ">
Add new Product +
    </button>
    </Link>
      {/* <div className="rounded outline ml-2 p-1 cursor-pointer hover:bg-gray-500 transition duration-200 border w-[150px] ">
        <button></button>Add new Product +</div> */}
      <h1 className="text-4xl text-center  mb-5 underline mt-3 ">
        
        
        All Product Details
      </h1>
      <DataTable data={allData} columns={columns} />
    </div>
  );
}

export default Admin;
