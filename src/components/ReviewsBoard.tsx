"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "../lib/supabase";

type Review = {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
};

type SupabaseReview = {
  id: string;
  name: string;
  text: string;
  rating: number;
  created_at: string;
};

const REVIEWS_PER_PAGE = 6;

function toReview(row: SupabaseReview): Review {
  return {
    id: row.id,
    name: row.name,
    text: row.text,
    rating: row.rating,
    date: row.created_at,
  };
}

function Stars({
  rating,
  onChange,
}: {
  rating: number;
  onChange?: (value: number) => void;
}) {
  return (
    <div
      className={onChange ? "star-picker" : "review-stars"}
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) =>
        onChange ? (
          <button
            key={star}
            type="button"
            className={star <= rating ? "star selected" : "star"}
            aria-label={`Choose ${star} out of 5 stars`}
            aria-pressed={rating === star}
            onClick={() => onChange(star)}
          >
            ★
          </button>
        ) : (
          <span
            key={star}
            className={star <= rating ? "star selected" : "star"}
            aria-hidden="true"
          >
            ★
          </span>
        ),
      )}
    </div>
  );
}

export default function ReviewsBoard() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [ready, setReady] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [visibleCount, setVisibleCount] = useState(REVIEWS_PER_PAGE);
  const [message, setMessage] = useState("");
  const [messageIsError, setMessageIsError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadReviews() {
      const { data, error } = await supabase
        .from("reviews")
        .select("id, name, text, rating, created_at")
        .order("created_at", { ascending: false });

      if (cancelled) return;

      if (error) {
        setMessage("Could not load reviews. Please try again later.");
        setMessageIsError(true);
      } else {
        setReviews((data ?? []).map((row) => toReview(row as SupabaseReview)));
      }

      setReady(true);
    }

    void loadReviews();

    return () => {
      cancelled = true;
    };
  }, []);

  async function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setMessageIsError(false);

    const cleanName = name.trim();
    const cleanText = text.trim();

    if (cleanName.length < 2) {
      setMessage("Please enter a name with at least 2 characters.");
      setMessageIsError(true);
      return;
    }

    if (cleanText.length < 10) {
      setMessage("Please write at least 10 characters for your review.");
      setMessageIsError(true);
      return;
    }

    setSubmitting(true);

    const { data, error } = await supabase
      .from("reviews")
      .insert({
        name: cleanName,
        text: cleanText,
        rating,
      })
      .select("id, name, text, rating, created_at")
      .single();

    setSubmitting(false);

    if (error) {
      setMessage("Could not submit your review. Please try again.");
      setMessageIsError(true);
      return;
    }

    setReviews((current) => [toReview(data as SupabaseReview), ...current]);
    setVisibleCount((count) => Math.max(count, REVIEWS_PER_PAGE));
    setName("");
    setText("");
    setRating(5);
    setMessage("Thank you for sharing your experience!");
  }

  const visibleReviews = reviews.slice(0, visibleCount);

  return (
    <section className="section reviews-layout">
      <div className="reviews-main">
        <div className="reviews-heading">
          <div>
            <p className="eyebrow">REVIEWS</p>
            <h2>Customer experiences</h2>
          </div>
          <span>
            {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
          </span>
        </div>

        {!ready && <p>Loading reviews…</p>}

        {ready && reviews.length === 0 && (
          <div className="empty-state">
            <span className="empty-star" aria-hidden="true">
              ★
            </span>
            <h3>No reviews yet</h3>
            <p>Be the first to share your experience.</p>
          </div>
        )}

        <div className="review-list">
          {visibleReviews.map((review) => (
            <article className="review-card" key={review.id}>
              <div className="review-card-top">
                <Stars rating={review.rating} />
                <time dateTime={review.date}>
                  {new Date(review.date).toLocaleDateString()}
                </time>
              </div>

              <p className="review-text">{review.text}</p>

              <div className="review-card-bottom">
                <strong>{review.name}</strong>
              </div>
            </article>
          ))}
        </div>

        {reviews.length > visibleCount && (
          <button
            className="button load-more-button"
            type="button"
            onClick={() => setVisibleCount((count) => count + REVIEWS_PER_PAGE)}
          >
            Show more reviews
          </button>
        )}
      </div>

      <aside className="review-form-card" id="review-form">
        <p className="eyebrow">SHARE YOUR EXPERIENCE</p>
        <h2>Write a review</h2>

        <form className="review-form" onSubmit={submitReview}>
          <label>
            Your name
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              minLength={2}
              maxLength={80}
              autoComplete="name"
            />
          </label>

          <fieldset className="rating-field">
            <legend>Your rating</legend>
            <Stars rating={rating} onChange={setRating} />
          </fieldset>

          <label>
            Your review
            <textarea
              value={text}
              onChange={(event) => setText(event.target.value)}
              required
              minLength={10}
              maxLength={1500}
              rows={5}
              placeholder="Tell others about your experience…"
            />
          </label>

          <button className="button" type="submit" disabled={submitting}>
            {submitting ? "Submitting…" : "Submit review"}
          </button>
        </form>

        {message && (
          <p
            className={`review-message ${messageIsError ? "error" : "success"}`}
            role="status"
          >
            {message}
          </p>
        )}
      </aside>
    </section>
  );
}