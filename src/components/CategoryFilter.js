import React, { useState } from "react";

function CategoryFilter({ tasks, setTasks, categories }) {
  const [selected, setSelected] = useState("All");

  const handleOnClick = (category) => {
    setSelected(category);
    setTasks(
      category === "All"
        ? tasks
        : tasks.filter((task) => task.category === category)
    );
  };

  const filterButton = categories.map((category) => (
    <button
      key={category}
      className={category === selected ? "selected" : ""}
      onClick={() => handleOnClick(category)}
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
