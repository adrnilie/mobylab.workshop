import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import "./App.scss";
import Welcome from "./components/Welcome";
import axios from "./axios";
import { isNull } from "underscore";
import PostTodo from "./components/PostTodo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [selectedToDo, setSelectedToDo] = useState(null);

  const onEditTodo = todo => {
    setSelectedToDo(todo);
  };

  const getTodos = () =>
    axios
      .get("/todos")
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => console.error(error));

  // componentDidMount
  useEffect(() => {
    getTodos();
  }, []);

  const onFormSubmit = todo => {
    if (!isNull(selectedToDo)) {
      axios
        .put(`/todos/${selectedToDo.id}`, todo)
        .then(() => getTodos())
        .catch(error => console.error(error));

      return;
    }

    axios
      .post("/todos", todo)
      .then(() => getTodos())
      .catch(error => console.error(error));
  };

  const onDeleteTask = id =>
    axios
      .delete(`/todos/${id}`)
      .then(() => getTodos())
      .catch(error => console.error(error));

  return (
    <>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => onEditTodo(todo)}>
            {todo.task} | {todo.done ? "I was resolved" : "I wasn't resolved"}
            <button type="button" onClick={() => onDeleteTask(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <PostTodo onSubmit={onFormSubmit} selected={selectedToDo} />
    </>
  );
};

export default App;
