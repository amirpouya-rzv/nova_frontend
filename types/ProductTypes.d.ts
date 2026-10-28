
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

export type ProductsResponse = {
    items: ProductTypes[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
};