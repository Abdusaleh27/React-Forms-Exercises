import React from "react";
import "./Todo.css";
const Todo = ({ todo }) => {
  return (
    <ul className="todo-ul">
      <li>{todo}</li>
    </ul>
  );
};

export default Todo;
