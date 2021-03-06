import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

export default function ToDo({ item }) {
  const { deleteTodo } = useContext(TodoContext);
  return (
    <div className="todo">
      <h3>{item.todo}</h3>
      <h4>
        {item.date}
        {item.category}
      </h4>
      <p>{item.desc.substr(0, 5)}...</p>
      <button onClick={() => deleteTodo(item.id)}>Delete</button>
    </div>
  );
}
