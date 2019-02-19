import React from "react";
import Todos from "./Card";

function TodoList(props) {
  return (
    <div>
      {props.todolist.map((item, index) => (
        <Todos key={index} {...item} delete={() => props.remove(index)} />
      ))}
    </div>
  );
}

export default TodoList;
