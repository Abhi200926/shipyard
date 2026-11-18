export type Product = {
  id: string; // lowercase-with-dashes, used as React key and URL segment
  name: string;
  price: number;
  category: "Footwear" | "Apparel" | "Gear" | "Accessories";
  description: string;
  rating: number; // 0 to 5
  inStock: boolean;
  emoji: string;
  color: string; // hex, used for the card artwork background
};

export const products: Product[] = [
  {
    id: "wave-runner",
    name: "Wave Runner Sneakers",
    price: 129,
    category: "Footwear",
    description:
      "Lightweight running shoes with a responsive foam sole and breathable knit upper. Built for long coastal miles.",
    rating: 4.6,
    inStock: true,
    emoji: "👟",
    color: "#dbeafe",
  },
  {
    id: "harbor-jacket",
    name: "Harbor Rain Jacket",
    price: 189,
    category: "Apparel",
    description:
      "Waterproof, taped-seam shell with an adjustable hood and packable design. Keeps the squall out.",
    rating: 4.8,
    inStock: true,
    emoji: "🧥",
    color: "#dcfce7",
  },
  {
    id: "anchor-backpack",
    name: "Anchor 25L Backpack",
    price: 99,
    category: "Gear",
    description:
      "A 25-litre daypack with a padded laptop sleeve, water-resistant fabric and quick-access side pockets.",
    rating: 4.4,
    inStock: true,
    emoji: "🎒",
    color: "#fef3c7",
  },
  {
    id: "sailor-cap",
    name: "Sailor Knit Cap",
    price: 29,
    category: "Accessories",
    description:
      "A soft merino-blend beanie with a classic fold-over cuff. Warm, stretchy and itch-free.",
    rating: 4.2,
    inStock: true,
    emoji: "🧢",
    color: "#fce7f3",
  },
  {
    id: "deck-sandals",
    name: "Deck Sandals",
    price: 59,
    category: "Footwear",
    description:
      "Quick-dry sandals with a grippy non-marking sole, ideal for boats, docks and beaches.",
    rating: 4.1,
    inStock: false,
    emoji: "🩴",
    color: "#e0e7ff",
  },
  {
    id: "compass-watch",
    name: "Compass Field Watch",
    price: 249,
    category: "Accessories",
    description:
      "A rugged field watch with a built-in compass bezel, sapphire glass and 100 m water resistance.",
    rating: 4.9,
    inStock: true,
    emoji: "⌚",
    color: "#fee2e2",
  },
  {
    id: "lighthouse-lantern",
    name: "Lighthouse Lantern",
    price: 45,
    category: "Gear",
    description:
      "A rechargeable LED camping lantern with three brightness modes and up to 40 hours of runtime.",
    rating: 4.5,
    inStock: true,
    emoji: "🏮",
    color: "#ffedd5",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
