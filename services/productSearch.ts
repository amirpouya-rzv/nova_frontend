import type { ProductsRequest, ProductsResponse } from "@/types/ProductTypes";
import httpService from "./_httpService";

export const searchProductsClient = async (
  params: ProductsRequest,
): Promise<ProductsResponse> => {
  const res = await httpService.get<ProductsResponse>("/api/products", { params });
  return res.data;
};