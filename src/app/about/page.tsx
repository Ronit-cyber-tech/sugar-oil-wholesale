import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About us",
  description: "Learn about our wholesale sugar and edible oil business.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-intro about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">ABOUT US</p>
          <h1>
            A supply partner
            <br />
            <em>you can talk to.</em>
          </h1>
          <p>We’re a wholesale supplier of sugar and edible oil.</p>
        </div>

        <div className="about-hero-art" aria-label="Our business began in Lonand">
          <div className="about-editorial-card">
            <span className="about-editorial-label">OUR STORY BEGINS</span>
            <strong className="about-editorial-year">1978</strong>
            <span className="about-editorial-rule" />
            <span className="about-editorial-place">LONAND</span>
            <span className="about-editorial-subtitle">
              A family wholesale business
            </span>
          </div>

          <span className="about-editorial-side-note">SUGAR · COOKING OIL</span>
        </div>
      </section>

      <section className="section split-section">
        {/* <div className="photo-panel">
          <Image
            src="/images/Shop.jpeg"
            alt="Placeholder for a photograph of your shop or products"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div> */}

        <div>
          <p className="eyebrow">OUR STORY</p>
          <h2>A business built on service.</h2>
          <p>
            <strong>
              Our shop&apos;s journey began in 1978 in Lonand, Shri Jayantilal
              Sundardas Doshi, started the business with dedication and strong
              values, initially trading in gul (jaggery). With changing market
              demands and growing experience, the business later expanded into
              sugar trading, building strong relationships with customers and
              suppliers. Carrying forward this legacy, Shri Jayesh Jayantilal
              Doshi, further developed the business and strengthened its
              reputation for trust and quality service. Today, our shop proudly
              operates as a wholesale supplier of sugar and cooking oil, serving
              retailers and customers with reliable products and fair pricing.
              With more than four decades of experience, our business continues
              to grow while maintaining the same commitment to honesty, quality,
              and customer satisfaction that laid its foundation in Lonand many
              years ago.
            </strong>
          </p>
        </div>
        <div className="photo-panel">
          <Image
            src="/images/Shop.jpeg"
            alt="Placeholder for a photograph of your shop or products"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="section values-grid">
        <article className="value-card">
          <p className="eyebrow">OUR MISSION</p>
          <h3>
            Our mission is to provide quality sugar and cooking oil at fair
            prices, while building lasting relationships through honesty, trust,
            and reliable service.
          </h3>
        </article>

        <article className="value-card">
          <p className="eyebrow">OUR VALUES</p>
          <h3>Trust &amp; Honesty, Quality First and Fair Pricing</h3>
        </article>

        {/* <article className="value-card">
          <p className="eyebrow">PRODUCTS</p>
          <h3>Details confirmed directly</h3>
        </article> */}
      </section>
      <hr className="section-divider" />

      <section className="dark-band about-cta-band">
        <h2>Let&apos;s discuss your requirements.</h2>
        <Link className="button button-light" href="/contact">
          Contact Us
        </Link>
      </section>
    </>
  );
}