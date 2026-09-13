import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <div>
        <p
          style={{
            fontSize: "14px",
            letterSpacing: "4px",
            opacity: 0.5,
            marginBottom: "20px",
          }}
        >
          ERROR 404
        </p>

        <h1
          style={{
            fontSize: "clamp(60px, 12vw, 140px)",
            lineHeight: 1,
            margin: 0,
            fontWeight: 700,
          }}
        >
          404
        </h1>

        <p
          style={{
            fontSize: "18px",
            opacity: 0.7,
            margin: "25px 0 35px",
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            border: "1px solid #fff",
            color: "#fff",
            textDecoration: "none",
            fontSize: "14px",
            letterSpacing: "1px",
          }}
        >
          BACK TO HOME
        </Link>
      </div>
    </main>
  );
}