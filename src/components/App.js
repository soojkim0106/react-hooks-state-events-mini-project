import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);

  const handleDelete = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const handleOnSubmit = (formData) => {
    setTasks([...tasks, formData]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        tasks={tasks}
        setTasks={setTasks}
        categories={categories}
        setCategories={setCategories}
      />
      <NewTaskForm categories={categories} onFormSubmit={handleOnSubmit} />
      <TaskList tasks={tasks} handleDelete={handleDelete} setTasks={setTasks} />
    </div>
  );
}

export default App;
