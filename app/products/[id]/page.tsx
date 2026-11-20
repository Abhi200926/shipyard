import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReviewsLoader from "../../components/ReviewsLoader";
import { getProduct, products } from "../../data/products";
import { getReviews } from "../../data/reviews";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return { title: "Product not found" };
  }

  // The layout's title template turns this into "<name> | ShipYard".
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image, width: 800, height: 600, alt: product.name }],
    },
  };
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
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={600}
            sizes="(min-width: 1100px) 540px, (min-width: 700px) 50vw, 100vw"
            priority
          />
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

      <ReviewsLoader reviews={getReviews(product.id)} />
    </main>
  );
}
