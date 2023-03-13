import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Suspense, use } from "react";
import { ClientPromise } from "./client-promise";

import { wait } from "./functions";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: any;
}): Promise<Metadata> {
  // await wait(1000);
  if (searchParams.notFound === "1") {
    notFound();
  }
  if (searchParams.redirect) {
    redirect(searchParams.redirect);
  }
  // redirect("/robots.txt");
  return {};
}
/** Add your relevant code here for the issue to reproduce */
export default async function Home({ searchParams }: { searchParams: any }) {
  const tl = [1000, 2500, 2000, 6000, 1500, 3000, 5000, 6950];
  return (
    <>
      <h1>@Vercel/OG</h1>

      {/* <ActionButton increment={increment} /> */}
      <img
        src="/og"
        alt="Image"
        loading="lazy"
        width={400}
        height={400}
        style={{
          backgroundColor: "gray",
        }}
      />

      <ClientPromise />
      {/* <Form action={action} /> */}
      {/* <ul>
        {tl.map((t) => (
          <li key={t}>
            <Suspense fallback={<>Waiting for {t} ms...</>}>
              <Awaited timeout={t} />
            </Suspense>
          </li>
        ))}
      </ul> */}
    </>
  );
}

function Awaited({ timeout }) {
  use(wait(timeout));
  return <>Finished</>;
}
