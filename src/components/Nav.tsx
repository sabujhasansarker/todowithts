import React, { ReactElement } from "react";
import logo from "../logo.png";

interface Props {}

export default function Nav({}: Props): ReactElement {
  return (
    <header className="header px-4">
      <a href="#" onClick={(e) => e.preventDefault()}>
        <img src={logo} alt="" />
      </a>
    </header>
  );
}
