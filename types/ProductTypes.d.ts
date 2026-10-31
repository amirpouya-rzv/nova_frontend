// types/ProductTypes.ts
export type ProductTypes = {
  id: string;
  name: string;
  slug: string;
  description: string;
  priceCents: number;
  stock: number;
  imageUrl: string;
  isActive: boolean;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  category: {
    id: string;
    name: string;
    slug: string;
  };
};

// چیزی که می‌فرستیم
export type ProductsRequest = {
  q?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: "newest" | "price_asc" | "price_desc" | "name";
  page?: number;
  limit?: number;
};

// چیزی که برمی‌گردد
export type ProductsResponse = {
  items: ProductTypes[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};