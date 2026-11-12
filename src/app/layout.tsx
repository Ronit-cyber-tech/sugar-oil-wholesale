
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { business } from "@/lib/business";

const siteUrl = "https://sugaroilshop.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Sugar & Oil Wholesale in Lonand, Satara | Jayesh Jayantilal Doshi",
    template: "%s | Jayesh Jayantilal Doshi",
  },

  description:
    "Jayesh Jayantilal Doshi is a sugar and cooking oil wholesale business in Lonand, Satara, Maharashtra. Contact us for wholesale products, bulk quantities and enquiries.",

  applicationName: "Jayesh Jayantilal Doshi Sugar & Oil Wholesale",

  openGraph: {
    title:
      "Jayesh Jayantilal Doshi | Sugar & Oil Wholesale in Lonand",
    description:
      "Wholesale sugar and cooking oil supply in Lonand, Satara, Maharashtra. Contact us for product and bulk order enquiries.",
    url: siteUrl,
    siteName: "Jayesh Jayantilal Doshi Sugar & Oil Wholesale",
    locale: "en_IN",
    type: "website",
    images: ["/images/sugar-oil-placeholder.svg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  url: "https://sugaroilshop.netlify.app",
  description:
    "Wholesale supplier of sugar and cooking oil in Lonand, Satara, Maharashtra.",
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Navi Peth, opposite of Jain Mandir, Khandala Road",
    addressLocality: "Lonand",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
    }}
  />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
