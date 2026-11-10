
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
      return {
        success: false,
        message: "Invalid product information",
      };
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("logintoken")?.value;

    // User is not logged in
    if (!token) {
      cookieStore.set(
        "pendingCart",
        JSON.stringify({ productId, quantity }),
        {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
          maxAge: 60 * 10,
        }
      );

      return {
        success: false,
        requiresLogin: true,
        message: "Please login first",
      };
    }

    // User is logged in
    await httpService.post(
      "/api/cart/items",
      { productId, quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      success: true,
      message: "Product added to cart successfully!",
    };

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

    return {
      success: false,
      message: "Something went wrong",
    };
  }
};


export const removeFromCartAction = async (): Promise<AddToCartResult> => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("logintoken")?.value;

    if (!token) {
      return {
        success: false,
        message: "Please login first",
      };
    }

    await httpService.delete("/api/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      success: true,
      message: "Cart emptied successfully!",
    };

  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message;

      return {
        success: false,
        message:
          typeof message === "string"
            ? message
            : "Failed to empty cart",
      };
    }

    return {
      success: false,
      message: "Something went wrong",
    };
  }
};