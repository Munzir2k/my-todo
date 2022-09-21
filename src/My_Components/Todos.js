import React from "react";
import { TodoItem } from "./TodoItem";

export default function Todos(props) {
  return (
    <div className="container">
      <h3 className=" my-3">To do's List</h3>
      {props.todos.length === 0
        ? "No to do to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}
