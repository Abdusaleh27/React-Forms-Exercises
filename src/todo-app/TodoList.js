import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import DeleteTodo from "./DeleteTodo";
const TodoList = () => {
  const initialState = [];
  const [todos, setTodos] = useState(initialState);
  const makeTodo = (todo) => {
    setTodos((todoList) => [...todoList, { ...todo, id: uuid() }]);
  };
  const removeTodo = (todo) => {
    console.log(todo);
    const updatedTodos = todos.filter((task) => task !== todo);
    setTodos(() => updatedTodos);
  };
  return (
    <div>
      <NewTodoForm makeTodo={makeTodo} />
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo todo={todo.task} />
          <DeleteTodo handleClick={() => removeTodo(todo)} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
