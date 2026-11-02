import type { Metadata } from "next";
import { connection } from "next/server";

import { getProductWithId } from "@/services/product";
import config from "@/services/config";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductFeatures from "./ProductFeatures";

type Props = {
  params: Promise<{ productId: string }>;
};

// Metadata - Runtime
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  await connection();

  const { productId } = await params;

  const product = await getProductWithId({
    id: productId,
  });

  return {
    title: `${product.name} | NOVA`,
    description: product.description,

  };
}

export default async function ProductPage({
  params,
}: Props) {

  await connection();

  const { productId } = await params;

  const product = await getProductWithId({
    id: productId,
  });

  return (
    <main
      dir="ltr"
      className="min-h-screen bg-background px-4 py-8 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>

        <ProductFeatures product={product} />

      </div>
    </main>
  );
}