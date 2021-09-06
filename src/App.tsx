import React, { Fragment, ReactElement } from "react";
import Layouts from "./components/Layouts";
import Nav from "./components/Nav";
import Form from "./components/todo/Form";

interface Props {}

export default function App({}: Props): ReactElement {
  return (
    <Layouts>
      <Fragment>
        <Nav />
        <main className="container ">
          <div className="row ">
            <div className="col-md-6">
              <Form />
            </div>
            <div className="col-md-6"></div>
          </div>
        </main>
      </Fragment>
    </Layouts>
  );
}
