import { business } from "../lib/business";

export default function Footer() {
  const phoneLink = business.phone.replace(/[^\d+]/g, "");

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <span className="footer-brand-mark" aria-hidden="true">JJD</span>
          <div>
            <strong>JAYESH JAYANTILAL DOSHI</strong>
            <span>SUGAR &amp; OIL WHOLESALE</span>
          </div>
        </div>

        <div className="site-footer-contact">
          <div>
            <span className="footer-label">ADDRESS</span>
            <p>{business.address}</p>
          </div>

          <div>
            <span className="footer-label">EMAIL</span>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </div>

          <div>
            <span className="footer-label">PHONE</span>
            <a href={`tel:${phoneLink}`}>{business.phone}</a>
          </div>
        </div>

        <div className="site-footer-bottom">
          <span>© 2026 Sugar &amp; Oil Wholesale Business</span>
        </div>
      </div>
    </footer>
  );
}