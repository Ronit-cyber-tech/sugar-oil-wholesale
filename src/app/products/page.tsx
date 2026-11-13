import type { Metadata } from "next";
import ProductCatalogue from "@/components/ProductCatalogue";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Wholesale Sugar and Oil Products",
  description:
    "Explore sugar and oil products from Jayesh Jayantilal Doshi in Lonand, Satara. Contact us for wholesale pricing, packaging details and product availability.",
  alternates: {
    canonical: "/products",
  },
};

const sugarCount = products.filter(
  (product) => product.category === "Sugar",
).length;

const oilCount = products.filter(
  (product) => product.category === "Oil",
).length;

export default function ProductsPage() {
  return (
    <section className="section products-page">
      <div className="page-intro compact-intro">
        <p className="eyebrow">OUR PRODUCTS</p>
        <h1>
          Everyday essentials.
          <br />
          <em>Wholesale supply.</em>
        </h1>
        <p>
          Browse our sugar and oil categories. Contact us for pricing,
          packaging details, and product availability.
        </p>

      </div>

      <ProductCatalogue />
    </section>
  );
}