import React from "react";
import { Todo } from "./Todo";

interface Props {
  todos: Array<todoType>;
}

export const Todos = ({ todos }: Props) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Todo List's</h4>
      </div>
      <div className="card-body">
        <ul>
          {todos.map((todo, i) => (
            <Todo key={i} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};
