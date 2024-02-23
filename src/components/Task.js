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

