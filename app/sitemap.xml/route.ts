// export const revalidate = 31536000;

export function GET(req: Request) {
  // const origin = new URL(req.url).origin;

  const body = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
    <loc>${process.env.BASE_URL ?? "https://locaci.fredkiss.dev"}/</loc>
    </url>
    </urlset>`;
  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=31536000, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}
