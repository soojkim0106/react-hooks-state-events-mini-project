import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

function TaskList({ filteredTasks, handleDelete }) {
  const allTasks = filteredTasks?.map((task, key) => (
    <Task
      key={uuidv4()}
      category={task.category}
      text={task.text}
      deleteTask={() => handleDelete(key)}
    />
  ));

  return <div className="tasks">{allTasks}</div>;
}

export default TaskList;
