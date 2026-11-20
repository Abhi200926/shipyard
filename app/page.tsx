import type { Metadata } from "next";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export const metadata: Metadata = {
  title: { absolute: "ShipYard | Gear for the coast, the deck and the trail" },
  description:
    "Browse the ShipYard catalog: footwear, apparel, gear and accessories built for the coast, the deck and the trail.",
};

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>ShipYard</h1>
        <p>Gear for the coast, the deck and the trail.</p>
      </section>

      <div className="grid">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={index < 4} // first row is above the fold
          />
        ))}
      </div>
    </main>
  );
}
