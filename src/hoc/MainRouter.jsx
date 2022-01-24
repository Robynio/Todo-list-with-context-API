import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../views/Landing/Landing";
import Category from "../views/Category/Category";
import TodoView from "../views/TodoView/TodoView";
import NotFound from "../views/NotFound/NotFound";
import TodoProvider from "../context/ToDoProvider";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <main className="mainContainer">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/category/:category" element={<Category />} />
            //* add two params */
            <Route path="/category/:category/:todoid" element={<TodoView />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </TodoProvider>
    </BrowserRouter>
  );
}
