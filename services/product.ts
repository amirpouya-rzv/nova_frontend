// services/productService.ts
import type { ProductsRequest, ProductsResponse } from "@/types/ProductTypes";
import { cacheLife, cacheTag } from "next/cache";
import httpService from "./_httpService";

export const getProductService = async (
  params: ProductsRequest = {}
): Promise<ProductsResponse> => {
  "use cache";

  cacheLife({ revalidate: 3600 });
  cacheTag("products");

  const res = await httpService.get<ProductsResponse>("/api/products", { params });
  return res.data;
};