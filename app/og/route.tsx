import { ImageResponse } from "@vercel/og";
import { Logo } from "./logo";

export const runtime = "experimental-edge";

export function GET(req: Request) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
        }}
      >
        <img
          src="https://locaci.fredkiss.dev/_next/image?url=https://pub-60aa47e513094a29a0dd9ff300c7ff35.r2.dev/ffwAuQa7saiPfekoBVc8rP.webp&w=1080&q=75"
          width={400}
          height={400}
          style={{
            width: `100%`,
            height: `100%`,
            objectFit: "cover",
            objectPosition: "center",
            position: "relative",
            zIndex: `10`,
          }}
        />
        <Logo
          style={{
            position: "absolute",
            width: `400px`,
            height: `160px`,
            right: `50%`,
            bottom: `50%`,
            transform: `translate(50%,50%)`,
            opacity: 0.3,
            zIndex: `20`,
            color: `#f1f5f9`,
          }}
        />
      </div>
    ),
    {
      width: 500,
      height: 500,
      status: 200,
    }
  );
}
