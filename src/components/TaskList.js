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
