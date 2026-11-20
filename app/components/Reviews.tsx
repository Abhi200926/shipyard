"use client";

import { useMemo, useState } from "react";
import type { Review } from "../data/reviews";

type SortKey = "newest" | "highest" | "lowest";

type ReviewsProps = {
  reviews: Review[];
};

const stars = (n: number) => "★".repeat(n) + "☆".repeat(5 - n);

// A below-the-fold, interactive panel. It is loaded on demand through
// next/dynamic (see ReviewsLoader.tsx), so it ships in its own chunk.
export default function Reviews({ reviews }: ReviewsProps) {
  const [sort, setSort] = useState<SortKey>("newest");
  const [helpful, setHelpful] = useState<Record<string, boolean>>({});

  const sorted = useMemo(() => {
    const copy = [...reviews];
    if (sort === "newest") copy.sort((a, b) => b.date.localeCompare(a.date));
    if (sort === "highest") copy.sort((a, b) => b.rating - a.rating);
    if (sort === "lowest") copy.sort((a, b) => a.rating - b.rating);
    return copy;
  }, [reviews, sort]);

  const average = reviews.length
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;

  const counts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
  }));

  if (reviews.length === 0) {
    return <p className="reviews-empty">No reviews yet.</p>;
  }

  return (
    <section className="reviews" aria-labelledby="reviews-heading">
      <div className="reviews-head">
        <h2 id="reviews-heading">Customer reviews</h2>
        <label className="reviews-sort">
          Sort by{" "}
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
          >
            <option value="newest">Newest</option>
            <option value="highest">Highest rated</option>
            <option value="lowest">Lowest rated</option>
          </select>
        </label>
      </div>

      <div className="reviews-summary">
        <p className="reviews-average">
          {average.toFixed(1)} <span>out of 5 ({reviews.length} reviews)</span>
        </p>
        <ul className="reviews-bars">
          {counts.map(({ star, count }) => (
            <li key={star}>
              <span>{star}★</span>
              <span className="bar">
                <span
                  className="bar-fill"
                  style={{ width: `${(count / reviews.length) * 100}%` }}
                />
              </span>
              <span>{count}</span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="reviews-list">
        {sorted.map((review) => (
          <li key={review.id} className="review">
            <p className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
              {stars(review.rating)}
            </p>
            <h3>{review.title}</h3>
            <p>{review.body}</p>
            <p className="review-meta">
              {review.author} · {review.date}
            </p>
            <button
              type="button"
              className="review-helpful"
              aria-pressed={!!helpful[review.id]}
              onClick={() =>
                setHelpful((prev) => ({ ...prev, [review.id]: !prev[review.id] }))
              }
            >
              {helpful[review.id] ? "Marked helpful" : "Helpful?"}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
