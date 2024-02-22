import React, { useState } from "react";

function CategoryFilter({ categories, onSelectedCategory }) {
  const [selected, setSelected] = useState("All");

  const handleOnClick = (e) => {
    onSelectedCategory(e);
  };

  const filterButton = categories.map((category) => (
    <button
      key={category}
      className={category === selected ? "selected" : ""}
      onClick={handleOnClick}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {filterButton}
    </div>
  );
}

export default CategoryFilter;
