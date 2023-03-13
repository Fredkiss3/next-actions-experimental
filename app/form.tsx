"use client";
export function Form({ action }) {
  console.log({ action });
  return (
    <form method="POST">
      <input type="text" />
      <button type="submit">hello</button>
    </form>
  );
}
