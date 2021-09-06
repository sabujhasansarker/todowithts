import React, { Fragment, ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export default function Layouts({ children }: Props): ReactElement {
  return <Fragment>{children}</Fragment>;
}
