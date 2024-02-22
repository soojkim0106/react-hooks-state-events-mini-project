import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

function TaskList({ filteredTasks, handleDelete }) {
  const allTasks = filteredTasks?.map((task, index) => (
    <Task
      key={uuidv4()}
      category={task.category}
      text={task.text}
      deleteTask={() => handleDelete(index)}
    />
  ));

  return <div className="tasks">{allTasks}</div>;
}

export default TaskList;
