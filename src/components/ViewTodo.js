import React from "react";
import { useSelector } from "react-redux";

const ViewTodo = () => {
  const todoList = useSelector((state) => state.todoReducer.todoData);
  return (
    <div className="view">
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewTodo;
