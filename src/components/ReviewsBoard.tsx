"use client";

import { FormEvent, useEffect, useState } from "react";

type Review = {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
};

const STORAGE_KEY = "business-customer-reviews";
const REVIEWS_PER_PAGE = 6;

function readSavedReviews(): Review[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];

    const parsed: unknown = JSON.parse(saved);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is Review =>
        typeof item === "object" &&
        item !== null &&
        "id" in item &&
        "name" in item &&
        "text" in item &&
        "rating" in item &&
        "date" in item,
    );
  } catch {
    return [];
  }
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
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(REVIEWS_PER_PAGE);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setReviews(readSavedReviews());
    setReady(true);
  }, []);

  function saveReviews(nextReviews: Review[]) {
    setReviews(nextReviews);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextReviews));
    } catch {
      setMessage("Could not save reviews in this browser.");
    }
  }

  function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanText = text.trim();

    if (cleanName.length < 2) {
      setMessage("Please enter a name with at least 2 characters.");
      return;
    }

    if (cleanText.length < 10) {
      setMessage("Please write at least 10 characters for your review.");
      return;
    }

    if (editingId) {
      const updated = reviews.map((review) =>
        review.id === editingId
          ? { ...review, name: cleanName, text: cleanText, rating }
          : review,
      );

      saveReviews(updated);
      setMessage("Your review was updated.");
    } else {
      const newReview: Review = {
        id: crypto.randomUUID(),
        name: cleanName,
        text: cleanText,
        rating,
        date: new Date().toISOString(),
      };

      saveReviews([newReview, ...reviews]);
      setVisibleCount((count) => Math.max(count, REVIEWS_PER_PAGE));
      setMessage("Your review was saved in this browser.");
    }

    setName("");
    setText("");
    setRating(5);
    setEditingId(null);
  }

  function editReview(review: Review) {
    setEditingId(review.id);
    setName(review.name);
    setText(review.text);
    setRating(review.rating);
    setMessage("");

    document
      .getElementById("review-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function deleteReview(id: string) {
    if (!window.confirm("Delete this review?")) return;

    saveReviews(reviews.filter((review) => review.id !== id));

    if (editingId === id) {
      cancelEdit();
    }

    setMessage("Review deleted.");
  }

  function cancelEdit() {
    setEditingId(null);
    setName("");
    setText("");
    setRating(5);
    setMessage("");
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
            <span className="empty-star" aria-hidden="true">★</span>
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
                <div className="review-actions">
                  <button type="button" onClick={() => editReview(review)}>
                    Edit
                  </button>
                  <button type="button" onClick={() => deleteReview(review.id)}>
                    Delete
                  </button>
                </div>
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
        <p className="eyebrow">
          {editingId ? "EDIT YOUR REVIEW" : "SHARE YOUR EXPERIENCE"}
        </p>
        <h2>{editingId ? "Update your review" : "Write a review"}</h2>

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

          <button className="button" type="submit">
            {editingId ? "Save changes" : "Submit review"}
          </button>

          {editingId && (
            <button
              className="review-cancel"
              type="button"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          )}
        </form>

        {message && (
          <p className="review-message success" role="status">
            {message}
          </p>
        )}
      </aside>
    </section>
  );
}