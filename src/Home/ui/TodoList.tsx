import React from "react";
import TodoItem from "./TodoItem";
import { State as HomeState } from "Home/HomePage";

export default function TodoList({ todos }: HomeState) {
  return (
    <ul>
      {todos.map((todo, key) => (
        <TodoItem todo={todo} key={key} />
      ))}
    </ul>
  );
}
