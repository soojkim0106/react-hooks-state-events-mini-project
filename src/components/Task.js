import React from "react";

function Task({ text, category, handleRemoveTask, id }) {
  const handleRemoveClick = (e) => {
    handleRemoveTask(id);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleRemoveClick}>
        X
      </button>
    </div>
  );
}

export default Task;

// import React from "react";

// function Task({ category, text, deleteTask }) {
//   return (
//     <div className="task">
//       <div className="label">{category}</div>
//       <div className="text">{text}</div>
//       <button className="delete" onClick={deleteTask}>
//         X
//       </button>
//     </div>
//   );
// }

// export default Task;
