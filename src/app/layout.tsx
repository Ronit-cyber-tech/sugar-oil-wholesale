
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sugaroilhub.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Sugar Oil Hub | Wholesale Sugar & Oil Supplier in Lonand",
    template: "%s | Sugar Oil Hub",
  },

  description:
    "Sugar Oil Hub supplies wholesale sugar, edible oil and bulk oil products in Lonand, Maharashtra. Contact us for reliable wholesale supply.",

  verification: {
    google: "gzz9nFW7hW1yiom8xKgSM9crWVSeJnCUCghF7wBtVzU",
  },

  openGraph: {
    title: "Sugar Oil Hub | Wholesale Sugar & Oil",
    description:
      "Your reliable wholesale partner for sugar and edible oil supply in Lonand, Maharashtra.",
    type: "website",
    url: siteUrl,
    images: ["/images/sugar-oil-placeholder.svg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
