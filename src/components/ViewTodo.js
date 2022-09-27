import React from "react";
import { useSelector } from "react-redux";

const ViewTodo = () => {
  const todoList = useSelector((state) => state.todoReducer.todoData);
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewTodo;
