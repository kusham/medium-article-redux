import React, { useState } from "react";
import {useDispatch} from 'react-redux';

const AddTodo = () => {
  const [input, setInput] = useState("");

const dispatch = useDispatch();
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) {
      return;
    }
    // dispatch(addTodo(input.value));
    setInput("");
  };
  return (
    <div className="form">
      <form onSubmit={handleOnSubmit}>
        <input
          placeholder="Type here"
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
