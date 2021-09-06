import React, { ReactElement } from "react";
import Layouts from "./components/Layouts";
import Nav from "./components/Nav";

interface Props {}

export default function App({}: Props): ReactElement {
  return (
    <Layouts>
      <Nav />
    </Layouts>
  );
}
