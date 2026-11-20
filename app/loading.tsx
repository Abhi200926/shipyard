// Shown by Next.js while a route segment is loading.
export default function Loading() {
  return (
    <main className="container" aria-busy="true" aria-live="polite">
      <section className="hero">
        <h1>ShipYard</h1>
        <p>Loading…</p>
      </section>
      <div className="grid">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="card skeleton-card" />
        ))}
      </div>
    </main>
  );
}
