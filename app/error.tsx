"use client"; // Error boundaries must be Client Components.

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="container not-found" role="alert">
      <h1>Oops</h1>
      <p>Something went wrong while loading this page.</p>
      <button type="button" className="retry-button" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
