import React, { ReactElement } from "react";
import Layouts from "./components/Layouts";

interface Props {}

export default function App({}: Props): ReactElement {
  return (
    <Layouts>
      <h1>hi</h1>
    </Layouts>
  );
}
