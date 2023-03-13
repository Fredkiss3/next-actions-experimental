"use server";

export async function increment(n: number) {
  return n + 1;
}

export async function action(res) {
  console.dir(
    {
      res,
    },
    { depth: null }
  );
}
