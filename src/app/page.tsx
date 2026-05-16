import type { Metadata } from "next";
import Link from "next/link";
import { ROBOTS_NOINDEX } from "@/lib/site";

export const metadata: Metadata = {
  robots: ROBOTS_NOINDEX
};

export default function RootPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(circle at 16% 18%, rgba(255, 0, 100, 0.12), transparent 22%), radial-gradient(circle at 82% 12%, rgba(160, 80, 160, 0.12), transparent 24%), linear-gradient(180deg, #06070b 0%, #0b0e14 100%)",
        color: "#fff",
        fontFamily: "system-ui, sans-serif"
      }}
    >
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p style={{ margin: "0 0 0.8rem", color: "rgba(255,255,255,0.72)" }}>
          Redirecting...
        </p>
        <Link
          href="/ja/"
          style={{
            color: "#fff",
            textDecoration: "underline",
            textUnderlineOffset: "0.2em"
          }}
        >
          Continue to Japanese site
        </Link>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: "window.location.replace('/ja/');"
        }}
      />
    </main>
  );
}
