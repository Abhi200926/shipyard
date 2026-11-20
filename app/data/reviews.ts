export type Review = {
  id: string;
  productId: string;
  author: string;
  rating: number; // 1 to 5
  title: string;
  body: string;
  date: string; // ISO date
};

export const reviews: Review[] = [
  { id: "r1", productId: "wave-runner", author: "Meera K.", rating: 5, title: "Fast and comfortable", body: "Wore these for a 15 km coastal run on day one with no blisters. The foam feels springy without being mushy.", date: "2026-09-14" },
  { id: "r2", productId: "wave-runner", author: "Arjun P.", rating: 4, title: "Great, runs a little narrow", body: "Excellent cushioning and very light. Order a half size up if you have wide feet.", date: "2026-08-02" },
  { id: "r3", productId: "wave-runner", author: "Sana R.", rating: 5, title: "My new daily trainer", body: "Dries quickly after wet pavement and the grip is solid. Colour looks even better in person.", date: "2026-10-21" },

  { id: "r4", productId: "harbor-jacket", author: "Dev S.", rating: 5, title: "Survived a monsoon", body: "Three hours of heavy rain and I stayed completely dry. The hood adjusts well and does not block my view.", date: "2026-07-30" },
  { id: "r5", productId: "harbor-jacket", author: "Lakshmi V.", rating: 5, title: "Packs down small", body: "Fits into its own pocket and weighs almost nothing. Perfect for travel.", date: "2026-10-05" },
  { id: "r6", productId: "harbor-jacket", author: "Rohit M.", rating: 4, title: "Good, slightly warm", body: "Fully waterproof but not very breathable on hard climbs. Fine for everyday use.", date: "2026-09-18" },

  { id: "r7", productId: "anchor-backpack", author: "Neha T.", rating: 4, title: "Right size for work", body: "Fits a 15-inch laptop, lunch and a jacket. The side pockets hold a bottle easily.", date: "2026-06-11" },
  { id: "r8", productId: "anchor-backpack", author: "Karan J.", rating: 5, title: "Solid build", body: "Zips feel sturdy and the straps are well padded. Held up through a rainy commute.", date: "2026-09-02" },
  { id: "r9", productId: "anchor-backpack", author: "Ishita B.", rating: 3, title: "Needs a chest strap", body: "Comfortable for light loads, but it swings around when I run for the train.", date: "2026-10-12" },

  { id: "r10", productId: "sailor-cap", author: "Vikram N.", rating: 4, title: "Warm and soft", body: "No itch at all, and it stays put in wind. Wish there were more colours.", date: "2026-10-28" },
  { id: "r11", productId: "sailor-cap", author: "Pooja D.", rating: 5, title: "Perfect fit", body: "The cuff is just the right depth. I bought a second one as a gift.", date: "2026-11-03" },
  { id: "r12", productId: "sailor-cap", author: "Aman G.", rating: 3, title: "Nice but thin", body: "Good for cool evenings, not for real winter. Quality of the knit is lovely.", date: "2026-11-09" },

  { id: "r13", productId: "deck-sandals", author: "Farah H.", rating: 4, title: "Great grip on wet decks", body: "Did not slip once on a wet boat deck. Dries within minutes.", date: "2026-05-19" },
  { id: "r14", productId: "deck-sandals", author: "Nikhil A.", rating: 4, title: "Comfortable straps", body: "No rubbing even after a full day. Sizing is accurate.", date: "2026-06-23" },
  { id: "r15", productId: "deck-sandals", author: "Tara L.", rating: 3, title: "Sold out too often", body: "Good sandals, but I waited weeks for my size to come back in stock.", date: "2026-08-15" },

  { id: "r16", productId: "compass-watch", author: "Harsh Y.", rating: 5, title: "Built like a tank", body: "Sapphire glass has no scratches after a month of trekking. The compass bezel is genuinely useful.", date: "2026-09-27" },
  { id: "r17", productId: "compass-watch", author: "Anita C.", rating: 5, title: "Beautiful and practical", body: "Easy to read in low light and comfortable on a small wrist.", date: "2026-10-16" },
  { id: "r18", productId: "compass-watch", author: "Sameer Q.", rating: 4, title: "Worth it, but pricey", body: "Excellent quality. I would like a metal strap option.", date: "2026-11-01" },

  { id: "r19", productId: "lighthouse-lantern", author: "Divya E.", rating: 5, title: "Lit our whole campsite", body: "The warm mode is easy on the eyes and the battery lasted all weekend.", date: "2026-10-09" },
  { id: "r20", productId: "lighthouse-lantern", author: "Rahul F.", rating: 4, title: "Handy and sturdy", body: "Survived a drop onto rocks. Charges quickly over USB-C.", date: "2026-09-06" },
  { id: "r21", productId: "lighthouse-lantern", author: "Kavya Z.", rating: 4, title: "Good for power cuts", body: "Great as a backup light at home too. The hook on top is a nice touch.", date: "2026-11-12" },
];

export function getReviews(productId: string): Review[] {
  return reviews.filter((review) => review.productId === productId);
}
