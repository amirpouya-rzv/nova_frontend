"use server";

import httpService from "@/services/_httpService";
import { cookies } from "next/headers";
import axios from "axios";

type AddToCartResult = {
  success: boolean;
  message: string;
  requiresLogin?: boolean;
};

export const addToCartAction = async (
  productId: string,
  quantity: number = 1
): Promise<AddToCartResult> => {
  try {
    if (!productId || !Number.isInteger(quantity) || quantity < 1) {
      return { success: false, message: "Invalid product information" };
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("logintoken")?.value;

    if (!token) {
      cookieStore.set("pendingCart", JSON.stringify({ productId, quantity }), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 10,
      });

      return {
        success: false,
        requiresLogin: true,
        message: "Please login first",
      };
    }

    await httpService.post(
      "/api/cart/items",
      { productId, quantity },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return { success: true, message: "Product added to cart successfully!" };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message;
      return {
        success: false,
        message:
          typeof message === "string"
            ? message
            : "Failed to add product to cart",
      };
    }
    return { success: false, message: "Something went wrong" };
  }
};

// حذف یک محصول از سبد
export const removeFromCartAction = async (
  productId: string
): Promise<AddToCartResult> => {
  try {
    if (!productId) {
      return { success: false, message: "Invalid product information" };
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("logintoken")?.value;

    if (!token) {
      return { success: false, message: "Please login first" };
    }

    await httpService.delete(
      `/api/cart/items/${encodeURIComponent(productId)}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return { success: true, message: "Item removed from cart" };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message;
      return {
        success: false,
        message:
          typeof message === "string" ? message : "Failed to remove item",
      };
    }
    return { success: false, message: "Something went wrong" };
  }
};

// حذف همه‌ی محصولات سبد
export const clearCartAction = async (): Promise<AddToCartResult> => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("logintoken")?.value;

    if (!token) {
      return { success: false, message: "Please login first" };
    }

    await httpService.delete("/api/cart", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return { success: true, message: "Cart emptied successfully!" };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message;
      return {
        success: false,
        message:
          typeof message === "string" ? message : "Failed to empty cart",
      };
    }
    return { success: false, message: "Something went wrong" };
  }
};