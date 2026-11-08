"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ProductTypes } from "@/types/ProductTypes";
import { CardImage } from "./CardImage";

export default function ProductsList({
  products,
}: {
  products: ProductTypes[];
}) {
  const listRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = listRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-10">
      <div
        ref={listRef}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {products.map((product, index) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            style={{
              transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
            }}
            className={`group block h-full rounded-3xl transition-all duration-700 ease-out hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              isVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-12 scale-[0.96] opacity-0"
            }`}
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
