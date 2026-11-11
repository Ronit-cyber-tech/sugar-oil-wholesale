import type { Metadata } from "next";
import ReviewsBoard from "../../components/ReviewsBoard";

export const metadata: Metadata = {
  title: "Customer reviews",
  description: "Read and share customer reviews.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">CUSTOMER FEEDBACK</p>
        <h1>
          Your experience.
          <br />
          <em>Your words.</em>
        </h1>
        <p>
          Read customer feedback or share your experience with our business.
        </p>
      </section>

      <ReviewsBoard />
    </>
  );
}