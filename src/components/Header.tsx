"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/products", "Products"],
  ["/reviews", "Reviews"],
  ["/contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" onClick={() => setOpen(false)}>
        <Image
  src="/images/jjd4.png"
  alt="Jayesh Jayantilal Doshi"
  width={50}
  height={50}
  className="brand-logo"
/>
        <span>JAYESH JAYANTILAL DOSHI <small>SUGAR & OIL WHOLESALE</small></span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav className={open ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
        {links.map(([href, label]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
        ))}
        <Link className="button button-small" href="/contact" onClick={() => setOpen(false)}>
          Request a quote
        </Link>
      </nav>
    </header>
  );
}