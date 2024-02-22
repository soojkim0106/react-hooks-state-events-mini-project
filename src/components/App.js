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

// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";
// import { v4 as uuidv4 } from "uuid";

// import { CATEGORIES, TASKS } from "../data";

// function App() {
//   const [tasks, setTasks] = useState(
//     TASKS.map((task) => ({
//       ...task,
//       id: uuidv4(),
//     }))
//   );
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const onSelectedCategory = (e) => {
//     setSelectedCategory(e.target.innerText);
//   };

//   const handleDelete = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const handleOnSubmit = (formData) => {
//     setTasks([...tasks, formData]);
//   };

//   const filteredTasks = tasks.filter(
//     (task) => selectedCategory === "All" || task.category === selectedCategory
//   );

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter
//         categories={CATEGORIES}
//         onSelectedCategory={onSelectedCategory}
//         selectedCategory={selectedCategory}
//       />
//       <NewTaskForm categories={CATEGORIES} handleOnSubmit={handleOnSubmit} />
//       <TaskList filteredTasks={filteredTasks} handleDelete={handleDelete} />
//     </div>
//   );
// }

// export default App;
