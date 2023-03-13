"use client";

import { useState } from "react";

export function ActionButton(props: {
  increment: (n: number) => Promise<number>;
}) {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Current value : {count} </h2>
      <button onClick={() => props.increment(count).then(setCount)}>
        increment
      </button>
    </>
  );
}
