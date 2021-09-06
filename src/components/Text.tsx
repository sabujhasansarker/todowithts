import React, { ReactElement } from "react";

interface Props {}

export default function Text({}: Props): ReactElement {
  return (
    <div>
      <h1 className="bg-primary">Hi</h1>
    </div>
  );
}
