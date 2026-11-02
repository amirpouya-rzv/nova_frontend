  import Link from "next/link";
  import type { ProductTypes } from "@/types/ProductTypes";
  import { CardImage } from "./CardImage";

  export default function ProductsList({
    products,
  }: {
    products: ProductTypes[];
  }) {
    return (
      <div className="px-4 py-10 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="group block h-full rounded-3xl transition-all duration-500 hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <CardImage
                id={product.id}
                imageUrl={product.imageUrl}
                description={product.description}
                name={product.name}
                priceCents={product.priceCents}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }