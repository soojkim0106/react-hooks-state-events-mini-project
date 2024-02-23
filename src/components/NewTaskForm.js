import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [inputText, setInputText] = useState("");
  const [categorySelect, setCategorySelect] = useState("");
  const [, Code, Food, Money, Misc] = categories;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!inputText || !categorySelect) {
      alert("please fill in all form inputs");
      return;
    }
    const formData = {
      text: inputText,
      category: categorySelect,
      id: uuidv4(),
    };
    onTaskFormSubmit(formData);
    setInputText("");
  };

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          required
        />
      </label>
      <label>
        Category
        <select
          name="category"
          text="Select a Category"
          value={categorySelect}
          onChange={(e) => setCategorySelect(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value={Code}>{Code}</option>
          <option value={Food}>{Food}</option>
          <option value={Money}>{Money}</option>
          <option value={Misc}>{Misc}</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
