import React, { useState, useEffect } from "react";
import axios from "../axios";
import { isEmpty, isNull, isUndefined } from "underscore";

const initialState = {
  task: "",
  done: false,
};

const PostTodo = ({ onSubmit, selected }) => {
  const [todo, setTodo] = useState(initialState);

  useEffect(() => {
    if (!isEmpty(selected) && !isNull(selected) && !isUndefined(selected)) {
      setTodo(selected);
    }
  }, [selected]);

  const handleFormSubmit = event => {
    event.preventDefault();

    onSubmit(todo);
  };

  const handleInputChange = event => {
    const { name, value, checked } = event.target;

    if (name === "done") {
      setTodo({
        ...todo,
        [name]: checked,
      });

      return;
    }

    setTodo({
      ...todo,
      [name]: value,
    });
  };

  return (
    <form noValidate onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="task">Task name: </label>
        <input
          id="task"
          name="task"
          type="text"
          value={todo.task}
          onChange={handleInputChange}
          placeholder="Task name"
        />
      </div>
      <div>
        <label htmlFor="done">Is task done?</label>
        <input
          type="checkbox"
          id="done"
          name="done"
          checked={todo.done}
          onChange={handleInputChange}
        />
      </div>

      <button>Submit</button>
    </form>
  );
};

export default PostTodo;
