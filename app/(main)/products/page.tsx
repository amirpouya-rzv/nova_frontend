import { getProductService } from "@/services/product";
import ProductsList from "./ProductsList";
import { PaginationProduct } from "./PaginationProduct";


export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {

  
  const sp = await searchParams;
  const page = Number(sp.page) || 1;

  const data = await getProductService({ page });

  return (
    <>
      <h1 className="pt-10 px-10 text-primary text-2xl font-bold">محصولات</h1>
      <ProductsList products={data.items} />
      <PaginationProduct page={data.page} totalPages={data.totalPages} />
    </>
  );
}


export const metadata ={
  title : 'products',
  describtion : 'products page'
}