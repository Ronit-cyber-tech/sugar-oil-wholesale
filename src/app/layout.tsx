import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sugar & Oil Wholesale | Reliable Bulk Supply",
    template: "%s | Sugar & Oil Wholesale",
  },
  description: "Contact us about wholesale sugar and edible oil supply.",
  openGraph: {
    title: "Sugar & Oil Wholesale",
    description: "A wholesale supply partner for your business.",
    type: "website",
    images: ["/images/sugar-oil-placeholder.svg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}