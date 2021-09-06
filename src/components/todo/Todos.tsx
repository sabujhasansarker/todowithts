import React from "react";
import { Todo } from "./Todo";

interface Props {}

const todoList = [
  {
    id: 1,
    title: "hi",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae necessitatibus assumenda, fugiat ratione totam unde fuga at doloribus omnis, dolorem quae. Reiciendis corporis aspernatur natus saepe voluptas asperiores illo minima?",
  },
  {
    id: 2,
    title: "hi",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae necessitatibus assumenda, fugiat ratione totam unde fuga at doloribus omnis, dolorem quae. Reiciendis corporis aspernatur natus saepe voluptas asperiores illo minima?",
  },
];

export const Todos = (props: Props) => {
  return (
    <div>
      {todoList.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
};
