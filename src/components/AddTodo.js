import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/Todo";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    id: Math.random() * 1000,
    task: "",
    completed: false,
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!input) {
      return;
    }
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div className="form">
      <form onSubmit={handleOnSubmit}>
        <input
          value={input.task}
          placeholder="Type here"
          onChange={(event) => setInput({ ...input, task: event.target.value })}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
