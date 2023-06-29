import React from "react";
import { add } from "@nankio/math-helpers";

export const Header = () => {
  const result = add(2, 6);

  return (
    <div>
      <h1>Header</h1>
      <p>The add result: {result}</p>
    </div>
  );
};
