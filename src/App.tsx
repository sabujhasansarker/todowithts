import React, { Fragment, ReactElement, useState } from "react";
import Layouts from "./components/Layouts";
import Nav from "./components/Nav";
import Form from "./components/todo/Form";
import { Todos } from "./components/todo/Todos";

interface Props {}

export default function App({}: Props): ReactElement {
  const [todos, setTodos] = useState<
    Array<{
      id: Number;
      title: String;
      description: String;
    }>
  >([]);
  const addTodo = (value: {
    id: Number;
    title: String;
    description: String;
  }) => {
    setTodos([...todos, value]);
  };
  return (
    <Layouts>
      <Fragment>
        <Nav />
        <main className="container ">
          <div className="row ">
            <div className="col-md-6">
              <Form
                addTodo={(e: {
                  id: Number;
                  title: String;
                  description: String;
                }) => addTodo(e)}
              />
            </div>
            <div className="col-md-6">
              <Todos todos={todos} />
            </div>
          </div>
        </main>
      </Fragment>
    </Layouts>
  );
}
