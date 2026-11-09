import { cacheLife, cacheTag } from "next/cache";
import httpService from "./_httpService";
import { CartType } from "@/types/cart";

export const getCartService = async (
  params: CartType = {}
): Promise<promises> => {
  "use cache";

  cacheLife({ revalidate: 3600 });
  cacheTag("cart");

  const res = await httpService.get<CartType>("/api/cart", { params });
  return res.data;
};
