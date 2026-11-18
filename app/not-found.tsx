import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container not-found">
      <h1>404</h1>
      <p>We couldn&apos;t find that product. It may have sailed away.</p>
      <Link href="/" className="back-link">
        ← Back to catalog
      </Link>
    </main>
  );
}
