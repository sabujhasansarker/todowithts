import React, { useState } from "react";

interface Props {
  todo: { title: String; description: String; id: Number };
}

export const Todo = ({ todo }: Props) => {
  const [active, setActive] = useState<Number>(0);
  console.log(active);

  return (
    <div className="card">
      <div className="card-header">
        <h4>Todo List's</h4>
      </div>
      <div className="card-body">
        <ul>
          <li className="bg-light p-2">
            <h5>{todo.title}</h5>
            <p>
              {todo.description.slice(0, active === todo.id ? -1 : 120)}
              <span
                className="text-primary c-pointer"
                onClick={() => setActive(active === todo.id ? 0 : todo.id)}
              >
                {active === todo.id ? " read less" : " read more"}
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
