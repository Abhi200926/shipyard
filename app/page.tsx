import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>ShipYard</h1>
        <p>Gear for the coast, the deck and the trail.</p>
      </section>

      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
