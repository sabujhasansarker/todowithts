import React, { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export default function Layouts({ children }: Props): ReactElement {
  return <div className="hi">{children}</div>;
}
