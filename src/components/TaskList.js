import Task from "./Task";

function TaskList({ tasks, filteredCategory, handleRemoveTask }) {
  const newFilteredCategories =
    !filteredCategory || filteredCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === filteredCategory);
  const tasksMapped = newFilteredCategories.map((task) => (
    <Task {...task} key={task.text} handleRemoveTask={handleRemoveTask} />
  ));

  return <div className="tasks">{tasksMapped}</div>;
}

export default TaskList;

// import React from "react";
// import Task from "./Task";

// function TaskList({ filteredTasks, handleDelete }) {
//   const allTasks = filteredTasks?.map((task) => (
//     <Task
//       key={task.text}
//       category={task.category}
//       text={task.text}
//       deleteTask={() => handleDelete(task.id)}
//     />
//   ));

//   return <div className="tasks">{allTasks}</div>;
// }

// export default TaskList;
