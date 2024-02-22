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
  }; //! I NEED TO VALIDATE THIS DATA!!!
  //! extractedData = new FormData(e.target) - IF NEED TO NOT TRACK VALUE (FORMIK) VIA DOM instead of STATE
  //! for (let val of extractedData){console.log(val)} <--- need to iterate the data to extract the above way

  // const [formData, setFromData] = useState({
  //   name:''
  //   about:''
  // }) //! Maybe can use initialTasks instead of the object itself for this
  //! Above replaces 5/6 and below replaces handleFormSubmit but without validation
  // const handleChange = ({target: {name, value}}) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //     [e.target.categorySelect]: e.target.value
  //   })
  // onTaskFormSubmit(formData)
  // setFromData(initialTasks)
  // }

  //! can change onChange(setFromData) and use on the parent form element , before onSubmit or after
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

// import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// function NewTaskForm({ categories, handleOnSubmit }) {
//   const [formData, setFormData] = useState({
//     text: "",
//     category: "",
//     id: uuidv4(),
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.text || !formData.category) {
//       alert("Please fill in all the inputs");
//       return;
//     }
//     handleOnSubmit(formData);
//     setFormData({ text: "", category: "", id: uuidv4() });
//   };

//   const handleOnChange = ({ target: { name, value } }) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <form
//       className="new-task-form"
//       onSubmit={handleSubmit}
//     >
//       <label>
//         Details
//         <input type="text" name="text" value={formData.text} onChange={handleOnChange}/>
//       </label>
//       <label>
//         Category
//         <select name="category" value={formData.category} onChange={handleOnChange}>
//           {categories.map(
//             (category) =>
//               category !== "All" && <option key={category}>{category} </option>
//           )}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;
