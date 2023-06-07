import React, { useState } from "react";

const NewTodoForm = ({ makeTodo }) => {
  const initialState = { task: "" };
  const [todo, setTodo] = useState(initialState);
  const handleSubmit = (e) => {
    if (todo.task !== "") {
      e.preventDefault();
      makeTodo(todo);
      setTodo(() => initialState);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((dos) => ({ ...dos, [name]: value }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <br />
      <label htmlFor="todo">New Todo: </label>
      <br />
      <input
        type="text"
        id="todo"
        name="task"
        value={todo.task}
        onChange={handleChange}
        placeholder="todo!"
      />
      <br />
      <br />
      <button type="submit">Add todo!</button>
    </form>
  );
};

export default NewTodoForm;
