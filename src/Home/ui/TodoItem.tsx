import React from "react";
import { TodoItem as typeTodoItem } from "Home/HomePage";

interface ITodoITem {
  todo: typeTodoItem;
}
export default function TodoItem({ todo }: ITodoITem) {
  return (
    <li>
      <div className="item__innner">{todo.title}</div>
    </li>
  );
}
