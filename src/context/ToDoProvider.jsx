//* the todo provider will create a wrapper for my app. So every component in my app can access the context

import React, { useState } from "react";
import TodoContext from "./TodoContext";

export default function TodoProvider({ children }) {
  //I create here the state variables that will be needed by my components
  const [todoList, setTodoList] = useState([]); //array bc its a list

  const onSubmitTodo = (e, todo, date, category, desc) => {
    e.preventDefault();

    setTodoList((prevState) => {
      let id =
        prevState.length > 0 ? prevState[prevState.length - 1].id + 1 : 1;

      return [...prevState, { id, todo, date, category, desc }];
    });
  };

  const deleteTodo = (id) => {
    setTodoList((prevState) => {
      return prevState.filter((element) => element.id !== id);
    });
  };

  const getFromCategory = (category) => {
    return todoList.filter((element) => element.category === category);
  };

  const providedData = {
    todoList,
    onSubmitTodo,
    deleteTodo,
    getFromCategory,
  };
  return (
    <TodoContext.Provider value={providedData}>{children}</TodoContext.Provider>
  );
}
