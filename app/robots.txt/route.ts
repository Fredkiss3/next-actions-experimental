export function GET(req: Request) {
  const body = `user-agent: *
  Disallow: /profile/*
  Disallow: /owner/*
  `;
  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=31536000, stale-while-revalidate",
    },
  });
}
