import React from "react";

function Form(prop) {
  return (
    <form className="form-container" onSubmit={prop.onSubmit}>
      <label htmlFor="todo">To Do:</label>
      <input
        name=""
        type="text"
        id="todo"
        placeholder="e.g. cook Lunch"
        value={prop.todo}
        onChange={prop.onChangeToDo}
      />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={prop.date}
        onChange={prop.onChangeDate}
      />

      <label htmlFor="todo">Category:</label>
      <select
        id="category"
        value={prop.category}
        onChange={prop.onChangeCategory}
      >
        <option value="Daily">Daily</option>
        <option value="Urgent">Urgent</option>
        <option value="Not Frequent">Not Frequent</option>
      </select>

      <label htmlFor="description">Description (optional)</label>
      <textarea
        name=""
        id="description"
        cols="30"
        rows="10"
        placeholder="write some description for the todo"
        value={prop.desc}
        onChange={prop.onChangeDesc}
      ></textarea>

      <button>Add to list</button>
    </form>
  );
}

export default Form;
