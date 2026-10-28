
import type { ProductsResponse } from "@/types/ProductTypes";
import { cacheLife, cacheTag } from "next/cache";




export const getProductService = async (): Promise<ProductsResponse> => {
    "use cache"
    cacheLife({revalidate : 3600})
    cacheTag('/product')
    const res = await fetch("http://localhost:4000/api/products?sort=newest&page=1&limit=12");
    const data: ProductsResponse = await res.json();
    return data;
};
