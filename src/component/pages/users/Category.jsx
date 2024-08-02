import React from "react";

function Category({ category, onCategoryClick }) {
  const clickHandler = () => {
    onCategoryClick(category);
  };


  return (
    <div onClick={clickHandler} className=" ml-5 cursor-pointer flex items-center w-full background  border border-red-500 gap-4 rounded-lg p-4 mb-4 shadow-lg">
      <h3  className="text-lg font-semibold capitalize cursor-pointer">{category}</h3>
    </div>
  );
}

export default Category;
