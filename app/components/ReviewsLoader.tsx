"use client";

import dynamic from "next/dynamic";
import type { Review } from "../data/reviews";

// Reviews is below the fold and interactive, so it is not needed for first
// paint. `ssr: false` is only allowed inside a Client Component, which is why
// this small wrapper exists: the product page (a Server Component) renders it.
const Reviews = dynamic(() => import("./Reviews"), {
  ssr: false,
  loading: () => (
    <div className="reviews-skeleton" aria-busy="true" aria-live="polite">
      Loading reviews…
    </div>
  ),
});

type ReviewsLoaderProps = {
  reviews: Review[];
};

export default function ReviewsLoader({ reviews }: ReviewsLoaderProps) {
  return <Reviews reviews={reviews} />;
}
