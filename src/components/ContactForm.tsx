
"use client";

import { FormEvent, useEffect, useState } from "react";
import { products } from "@/lib/products";

const WEB3FORMS_ACCESS_KEY = "509d91d1-353d-4388-a4d7-9f5d210835a0";

type State = {
  kind: "idle" | "sending" | "success" | "error";
  message: string;
};

export default function ContactForm() {
  const [state, setState] = useState<State>({
    kind: "idle",
    message: "",
  });

  const [product, setProduct] = useState("");

  useEffect(() => {
    const requested = new URLSearchParams(
      window.location.search
    ).get("product");

    if (requested) setProduct(requested);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (state.kind === "sending") return;

    const form = event.currentTarget;

    if (
!WEB3FORMS_ACCESS_KEY.trim()    ) {
      setState({
        kind: "error",
        message: "Please configure the enquiry form first.",
      });
      return;
    }

    setState({ kind: "sending", message: "" });

    try {
      const formData = new FormData(form);

      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append(
        "subject",
        `New Wholesale Enquiry - ${formData.get("customerName")}`
      );
      formData.append(
        "from_name",
        "Sugar & Oil Wholesale Website"
      );

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send enquiry."
        );
      }

      form.reset();
      setProduct("");

      setState({
        kind: "success",
        message:
          "Thank you! Your enquiry has been sent successfully. We will contact you soon.",
      });
    } catch (error) {
      setState({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      {/* Spam protection */}
      <input
        type="checkbox"
        name="botcheck"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <label>
        Your name *
        <input
          name="customerName"
          autoComplete="name"
          required
          maxLength={100}
        />
      </label>

      <label>
        Phone number *
        <input
          name="phoneNumber"
          type="tel"
          autoComplete="tel"
          required
          maxLength={25}
        />
      </label>

      <label>
        Email (optional)
        <input
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
        />
      </label>

      <label>
        Product interested in *
        <select
          name="productInterested"
          value={product}
          onChange={(event) => setProduct(event.target.value)}
          required
        >
          <option value="">Select a product</option>
          <option value="Sugar">Sugar</option>
          <option value="Oil">Oil</option>
        </select>
      </label>

      <label>
        Required quantity (optional)
        <input
          name="requiredQuantity"
          maxLength={100}
          placeholder="For example, bags or litres"
        />
      </label>

      <label className="form-wide">
        Message *
        <textarea
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={2000}
        />
      </label>

      <button
        className="button form-wide"
        type="submit"
        disabled={state.kind === "sending"}
      >
        {state.kind === "sending"
          ? "Sending..."
          : "Send Enquiry"}
      </button>

      <p
        className={`form-message ${state.kind}`}
        role="status"
        aria-live="polite"
      >
        {state.message}
      </p>
    </form>
  );
}
