import Link from "next/link";
import type { ProductTypes } from "@/types/ProductTypes";
import { CardImage } from "./CardImage";

export default function ProductsList({ products }: { products: ProductTypes[] }) {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="block h-full transition duration-300 hover:-translate-y-1 hover:drop-shadow-xl"
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