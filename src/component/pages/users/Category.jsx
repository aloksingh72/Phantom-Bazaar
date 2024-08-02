import React from "react";

function Category({ category }) {
  return (
    <div className="w-full ">
      <h3 className="w-[90px]">{category}</h3>
    </div>
  );
}

export default Category;