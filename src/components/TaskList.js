import React from "react";
import Task from "./Task";

function TaskList({ filteredTasks, handleDelete }) {
  const allTasks = filteredTasks?.map((task) => (
    <Task
      key={task.id}
      category={task.category}
      text={task.text}
      deleteTask={() => handleDelete(task.id)}
    />
  ));

  return <div className="tasks">{allTasks}</div>;
}

export default TaskList;
