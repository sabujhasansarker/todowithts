import React, { ReactElement } from "react";
import logo from "../logo.png";

export default function Nav(): ReactElement {
  return (
    <header className="header px-4">
      <a href="#" onClick={(e) => e.preventDefault()}>
        <img src={logo} alt="" />
      </a>
    </header>
  );
}
