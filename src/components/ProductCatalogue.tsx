"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products, type Product } from "@/lib/products";

type Filter = "All" | Product["category"];

const filters: Filter[] = ["All", "Sugar", "Oil"];
const categories: Product["category"][] = ["Sugar", "Oil"];

export default function ProductCatalogue() {
  const [filter, setFilter] = useState<Filter>("All");

  const visibleCategories =
    filter === "All" ? categories : [filter];

  return (
    <>
      <div className="filter-row" aria-label="Filter products">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            className={filter === item ? "filter active-filter" : "filter"}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
            {item !== "All" && (
              <span className="filter-count">
                {products.filter((product) => product.category === item).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {visibleCategories.map((category) => {
        const categoryProducts = products.filter(
          (product) => product.category === category,
        );

        return (
          <section className="product-category-section" key={category}>
            <div className="product-category-heading">
              <div>
                <p className="eyebrow">OUR CATALOGUE</p>
                <h2>{category}</h2>
              </div>
              <span className="category-count">
                {categoryProducts.length} products
              </span>
            </div>

            <div className="product-grid">
              {categoryProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-image">
  <Image
    src={product.image}
    alt={product.name}
    fill
    sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
  />
</div>

                  <div className="product-info">
                    <p className="eyebrow">{product.category}</p>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p className="packaging">{product.packaging}</p>
                    <p className="price-note">Contact for price</p>

                    <Link
                      className="button"
                      href={`/contact?product=${encodeURIComponent(product.name)}`}
                    >
                      Enquire now
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}