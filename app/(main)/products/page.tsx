import { Suspense } from "react";
import { getProductService } from "@/services/product";
import ProductsList from "./ProductsList";
import { PaginationProduct } from "./PaginationProduct";
import ProductsSkeleton from "./ProductsSkeleton";

export const metadata = {
  title: "products",
  description: "products page",
};


export default function Products({searchParams}: {searchParams: Promise<{ page?: string }>;}) {
  return (
    <>
      <Suspense fallback={<ProductsSkeleton  />}>
        <ProductsContent searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function ProductsContent({searchParams}: {searchParams: Promise<{ page?: string }>;}) {
  const sp = await searchParams;
  const page = Number(sp.page) || 1;

  const data = await getProductService({ page });

  return (
    <>
      <ProductsList products={data.items} />
      <PaginationProduct page={data.page} totalPages={data.totalPages} />
    </>
  );
}