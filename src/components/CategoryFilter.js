import React from "react";

function CategoryFilter({
  categories: [all, code, food, money, misc],
  handleCategoryFilter,
  filteredCategory,
}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <div onClick={handleCategoryFilter}>
        <button className={filteredCategory === all ? "selected" : ""}>
          {all}
        </button>
        <button className={filteredCategory === code ? "selected" : ""}>
          {code}
        </button>
        <button className={filteredCategory === food ? "selected" : ""}>
          {food}
        </button>
        <button className={filteredCategory === money ? "selected" : ""}>
          {money}
        </button>
        <button className={filteredCategory === misc ? "selected" : ""}>
          {misc}
        </button>
      </div>
    </div>
  );
}

export default CategoryFilter;

// import React, { useState } from "react";

// function CategoryFilter({
//   categories: [all, code, food, money, misc],
//   onSelectedCategory,
//   selectedCategory,
// }) {
//   const [selected, setSelected] = useState("All");

//   const handleOnClick = (e) => {
//     onSelectedCategory(e);
//     setSelected(e.target.innerText);
//   };

//   return (
//     <div className="categories" onClick={handleOnClick}>
//       <h5>Category filters</h5>
//       <button className={selectedCategory === all ? "selected" : ""}>
//         {all}
//       </button>
//       <button className={selectedCategory === code ? "selected" : ""}>
//         {code}
//       </button>
//       <button className={selectedCategory === food ? "selected" : ""}>
//         {food}
//       </button>
//       <button className={selectedCategory === money ? "selected" : ""}>
//         {money}
//       </button>
//       <button className={selectedCategory === misc ? "selected" : ""}>
//         {misc}
//       </button>
//     </div>
//   );
// }

// export default CategoryFilter;
