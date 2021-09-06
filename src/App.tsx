import React, { Fragment, ReactElement, useState } from "react";
import Layouts from "./components/Layouts";
import Nav from "./components/Nav";
import Form from "./components/todo/Form";
import { Todos } from "./components/todo/Todos";

interface Props {}

export default function App({}: Props): ReactElement {
  const [todos, setTodos] = useState<Array<todoType>>([]);
  const addTodo = (value: todoType) => {
    setTodos([...todos, value]);
  };
  return (
    <Layouts>
      <Fragment>
        <Nav />
        <main className="container ">
          <div className="row ">
            <div className="col-md-6">
              <Form addTodo={(e: todoType) => addTodo(e)} />
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
