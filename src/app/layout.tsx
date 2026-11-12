
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://sugaroilshop.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Jayesh Jayantilal Doshi | Sugar & Oil Wholesale in Lonand",
    template: "%s | Sugar Oil Wholesale",
  },

  description:
    "Jayesh Jayantilal Doshi Sugar & Oil Wholesale in Lonand, Satara, Maharashtra. Contact us for wholesale sugar and cooking oil supply. Enquire about products, bulk quantities and pricing.",

  applicationName: "Sugar Oil Wholesale",

  alternates: {
    canonical: "/",
  },

  // verification: {
  //   google: "gzz9nFW7hW1yiom8xKgSM9crWVSeJnCUCghF7wBtVzU",
  // },

  openGraph: {
    title:
      "Jayesh Jayantilal Doshi | Sugar & Oil Wholesale in Lonand",
    description:
      "Your wholesale partner for sugar and cooking oil in Lonand, Satara, Maharashtra.",
    url: siteUrl,
    siteName: "Sugar Oil Wholesale",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
