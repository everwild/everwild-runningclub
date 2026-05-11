import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        margin: 0,
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(circle at 16% 18%, rgba(255, 0, 100, 0.12), transparent 22%), radial-gradient(circle at 82% 12%, rgba(160, 80, 160, 0.12), transparent 24%), linear-gradient(180deg, #06070b 0%, #0b0e14 100%)",
        color: "#ffffff",
        fontFamily: "system-ui, sans-serif"
      }}
    >
      <div
        style={{
          width: "min(40rem, calc(100vw - 2rem))",
          padding: "2rem",
          borderRadius: "2rem",
          background: "rgba(13, 17, 24, 0.82)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 26px 70px rgba(0, 0, 0, 0.28)",
          textAlign: "center"
        }}
      >
        <p style={{ letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.66)" }}>
          404
        </p>
        <h1 style={{ margin: "0.5rem 0 1rem", fontSize: "clamp(1.5rem, 4vw, 2rem)" }}>Page not found</h1>
        <p style={{ color: "rgba(255,255,255,0.72)", marginBottom: "1.5rem" }}>
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/ja/"
          style={{
            display: "inline-flex",
            padding: "0.75rem 1.25rem",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #ff0064, #a050a0)",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600
          }}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
