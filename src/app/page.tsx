import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    absolute:
      "Jayesh Jayantilal Doshi | Sugar & Oil Wholesale in Lonand",
  },
  description:
    "Looking for sugar or oil wholesale in Lonand, Satara? Contact Jayesh Jayantilal Doshi for product details, bulk quantities and wholesale enquiries.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="home-hero home-hero-background">
        <div className="home-hero-content">
          <p className="eyebrow">SUGAR &amp; OIL WHOLESALER</p>

          <h2>
            The Sweetness of Quality.
            <br />
            <em>The trust of Every Drop.</em>
          </h2>

          <p className="home-hero-description">
            Looking for sugar or oil? You Are at the Right Place.
          </p>

          <div className="home-hero-actions">
            <Link className="button" href="/products">
              Explore our products
            </Link>
            <Link className="home-secondary-link" href="/contact">
              Talk to us <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="home-hero-note">
            <span className="home-note-dot" aria-hidden="true" />
            Product details and pricing are available by enquiry.
          </div>
        </div>

        
<div className="home-hero-visual">
  <Image
    src="/images/Front2.jpeg"
    alt="Jayesh Jayantilal Doshi sugar and oil wholesale shop in Lonand"
    fill
    priority
    sizes="(max-width: 800px) 100vw, 52vw"
  />
</div>

      </section>


       <section className="home-story section">
        <div className="home-story-heading">
          <p className="eyebrow">A LOCAL WHOLESALE BUSINESS</p>
          <h2>
            Good supply starts
            <br />
            <em>with a conversation.</em>
          </h2>
        </div>

        <div className="home-story-copy">
          <p>
            We supply sugar and oil to customers. Get in
            touch with product and quantity requirements, and we can
            discuss the available options with you.
          </p>
          <Link className="home-secondary-link" href="/about">
            Learn about our business <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* <section className="home-product-feature">
        <div className="home-product-feature-inner">
          <div>
            <p className="eyebrow">SUGAR &amp; OIL</p>
            <h2>Find the right products for your order.</h2>
            <p>
              Browse our sugar and oil categories, then send us an enquiry for
              product details, packaging, and pricing.
            </p>
          </div>

          <Link className="button home-feature-button" href="/products">
            Explore our products <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section> */}

      <section className="home-contact section">
        <div>
          <p className="eyebrow">NEED A WHOLESALE ORDER?</p>
          <h2>
            Tell us what
            <br />
            <em>you’re looking for.</em>
          </h2>
        </div>

        <div className="home-contact-action">
          <p>
            Send your enquiry and include the product and quantity you need.
            We’ll get in touch to discuss it.
          </p>
          <Link className="button" href="/contact">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}