import React, { useState } from "react";
import "./FormTodo.css";
const FormTodo = ({ addTask }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTask(value);
    }
    setValue("");
  };
  const handleInputTask = (e) => {
    e.preventDefault();

    setValue(e.target.value);
  };
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="form">
        <input
          onChange={handleInputTask}
          value={value}
          type="text"
          placeholder="Note Your Task"
          className="formInput"
        />
        <button className="formButton">Add</button>
      </form>
    </div>
  );
};

export default FormTodo;
