import httpService from "./_httpService";
import { CartType } from "@/types/cart";
import { cookies } from "next/headers";

export const getCartService = async (): Promise<CartType> => {
  const cookieStore = await cookies();

  const token = cookieStore.get("logintoken")?.value;

  if (!token) {
    throw new Error("User is not authenticated");
  }

  const res = await httpService.get<CartType>("/api/cart", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};