// types/cart.ts

export type CartCategory = {
  id: string;
  name: string;
};

export type CartProduct = {
  id: string;
  name: string;
  slug: string;
  description: string;
  priceCents: number;
  stock: number;
  imageUrl: string | null;
  isActive: boolean;
  categoryId: string;
  category: CartCategory;
};

export type CartItem = {
  id: string;
  productId: string;
  quantity: number;
  product: CartProduct;
};

export type CartType = {
  items: CartItem[];
  count: number;
  totalCents: number;
};