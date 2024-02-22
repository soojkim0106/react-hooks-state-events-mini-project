import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewTaskForm({ categories, onFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "",
    id: uuidv4(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.text || !formData.category) {
      alert("Please fill in all the inputs");
      return;
    }
    onFormSubmit(formData);
    setFormData({ text: "", category: "" });
  };

  const handleOnChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };
  

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleOnChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleOnChange}
        >
          {categories.map(
            (category) =>
              category !== "All" && <option key={category}>{category}</option>
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
