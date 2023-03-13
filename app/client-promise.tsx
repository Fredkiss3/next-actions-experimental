"use client";

import { Suspense, use } from "react";
import { wait } from "./functions";

export function ClientPromise() {
  return (
    <Suspense fallback={<>Waiting for client promise...</>}>
      {/* @ts-expect-error */}
      <PromiseComp />
    </Suspense>
  );
}

async function PromiseComp() {
  const res = await wait(1000).then(() => "ok");
  return <>Result : {res}</>;
}
