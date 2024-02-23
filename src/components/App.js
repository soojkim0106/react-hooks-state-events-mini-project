import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS as initialTasks } from "../data";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    initialTasks.map((task) => ({ ...task, id: uuidv4() }))
  );
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleCategoryFilter = (e) => {
    const newFilteredCategory = e.target.textContent;
    setFilteredCategory(newFilteredCategory);
  };

  const onTaskFormSubmit = (formData) => {
    setTasks((prevTasks) => [...prevTasks, formData]);
  };

  const handleRemoveTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((prevTask) => prevTask.id !== id));
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleCategoryFilter={handleCategoryFilter}
        filteredCategory={filteredCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={tasks}
        filteredCategory={filteredCategory}
        handleRemoveTask={handleRemoveTask}
      />
    </div>
  );
}

export default App;
