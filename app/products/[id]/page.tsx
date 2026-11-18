import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "../../data/products";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = getProduct(id);
  return { title: product ? `${product.name} | ShipYard` : "Not found | ShipYard" };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container">
      <Link href="/" className="back-link">
        ← Back to catalog
      </Link>

      <article className="detail">
        <div className="detail-art" style={{ backgroundColor: product.color }}>
          <span aria-hidden="true">{product.emoji}</span>
        </div>
        <div className="detail-info">
          <span className="card-category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="detail-price">${product.price}</p>
          <p className="card-rating">★ {product.rating.toFixed(1)}</p>
          <p className="detail-description">{product.description}</p>
          <span className={product.inStock ? "badge in-stock" : "badge sold-out"}>
            {product.inStock ? "In stock" : "Sold out"}
          </span>
        </div>
      </article>
    </main>
  );
}
