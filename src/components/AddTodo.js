import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/Todo";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) {
      return;
    }
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div className="form">
      <form onSubmit={handleOnSubmit}>
        <input
        value={input}
          placeholder="Type here"
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
