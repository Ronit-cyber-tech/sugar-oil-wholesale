import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import { business } from "../../lib/business";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us about sugar and edible oil wholesale orders.",
};

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
    >
      <path
        d="M5 3.5h3l1.5 4-2 1.5a15 15 0 0 0 7.5 7.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A18 18 0 0 1 3 5.7 2 2 0 0 1 5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
    >
      <path d="M12.04 2a9.9 9.9 0 0 0-8.47 15.03L2 22l5.12-1.52A9.93 9.93 0 1 0 12.04 2Zm0 18.08a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.04.9.91-2.96-.2-.31a8.12 8.12 0 1 1 6.76 3.68Zm4.45-6.08c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.3.98 2.46c.12.16 1.68 2.56 4.07 3.59.57.25 1.01.4 1.36.51.57.18 1.09.16 1.5.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export default function ContactPage() {
  const phoneLink = business.phone.replace(/[^\d+]/g, "");
  const whatsappNumber = business.whatsappNumber.replace(/\D/g, "");
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    business.address,
  )}&output=embed`;

  return (
    <section className="section contact-layout">
      <div className="contact-copy">
        <p className="eyebrow">CONTACT</p>

        <h1>
          Let’s talk
          <br />
          <em>about your order.</em>
        </h1>

        <p>
          Tell us what you’re looking for. We can follow up to discuss
          product and order details.
        </p>

        <div className="contact-detail">
          <span>PHONE</span>
          <a className="contact-action" href={`tel:${phoneLink}`}>
            <span className="contact-icon phone-icon">
              <PhoneIcon />
            </span>
            <span>{business.phone}</span>
          </a>
        </div>

        <div className="contact-detail">
          <span>WHATSAPP</span>
          <a
            className="contact-action"
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
          >
            <span className="contact-icon whatsapp-icon">
              <WhatsAppIcon />
            </span>
            <span>Chat with us on WhatsApp</span>
          </a>
        </div>

        <div className="contact-detail">
          <span>EMAIL</span>
          <a className="contact-action" href={`mailto:${business.email}`}>
            {business.email}
          </a>
        </div>

        <div className="contact-detail">
          <span>ADDRESS</span>
          <p>{business.address}</p>
        </div>

        {/* <div className="map-embed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.694944683077!2d74.18339837495073!3d18.039355482963494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc253ec7d45f829%3A0xcc4442ff77e99c45!2sJayesh%20Jayantilal%20Doshi!5e0!3m2!1sen!2sin!4v1794097715877!5m2!1sen!2sin"
            title="Map showing our business location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div> */}
      </div>

      <div className="form-card">
        <h2>Send an enquiry</h2>
        <p>Fields marked * are required.</p>
        <ContactForm />
      </div>
      <div className="map-embed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.694944683077!2d74.18339837495073!3d18.039355482963494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc253ec7d45f829%3A0xcc4442ff77e99c45!2sJayesh%20Jayantilal%20Doshi!5e0!3m2!1sen!2sin!4v1794097715877!5m2!1sen!2sin"
            title="Map showing our business location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
    </section>
  );
}