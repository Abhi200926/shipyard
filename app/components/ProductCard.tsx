import Link from "next/link";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="card">
      <div className="card-art" style={{ backgroundColor: product.color }}>
        <span aria-hidden="true">{product.emoji}</span>
      </div>
      <div className="card-body">
        <span className="card-category">{product.category}</span>
        <h2 className="card-name">{product.name}</h2>
        <div className="card-meta">
          <span className="card-price">${product.price}</span>
          <span className="card-rating">★ {product.rating.toFixed(1)}</span>
        </div>
        <span className={product.inStock ? "badge in-stock" : "badge sold-out"}>
          {product.inStock ? "In stock" : "Sold out"}
        </span>
      </div>
    </Link>
  );
}
