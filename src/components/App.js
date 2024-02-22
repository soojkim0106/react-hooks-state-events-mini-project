import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const onSelectedCategory = (e) => {
    setSelectedCategory(e.target.innerText);
  };

  const handleDelete = (key) => {
    setTasks(tasks.filter((task, i) => i !== key));
  };

  const handleOnSubmit = (formData) => {
    setTasks([...tasks, formData]);
  };

  const filteredTasks = tasks.filter(
    (task) => task.category === selectedCategory || selectedCategory === "All"
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onSelectedCategory={onSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onFormSubmit={handleOnSubmit} />
      <TaskList
        filteredTasks={filteredTasks}
        handleDelete={handleDelete}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;
