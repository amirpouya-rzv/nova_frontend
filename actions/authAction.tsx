
"use server";

import httpService from "@/services/_httpService";
import { ActionTypeLogin } from "@/types/actionLogin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as z from "zod";
import axios from "axios";

// Validation schema
const validationSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const LoginAction = async (
  prevState: ActionTypeLogin,
  formData: FormData
) => {
  // Extract form values
  const email = formData.get("email");
  const password = formData.get("password");

  // Validate form data
  const validation = validationSchema.safeParse({
    email,
    password,
  });

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
      success: false,
    };
  }

  const cookieStore = await cookies();

  // Default redirect destination
  let redirectTo = "/";

  let token: string;

  // Login request
  try {
    const res = await httpService.post("/api/auth/login", {
      email: validation.data.email,
      password: validation.data.password,
    });

    token = res.data.accessToken;

    if (!token) {
      return {
        errors: {
          general: ["Login failed. Please try again."],
        },
        success: false,
      };
    }

  } catch (error: unknown) {
    let message = "Email or password is incorrect";

    if (axios.isAxiosError(error)) {
      const apiMessage = error.response?.data?.message;

      if (typeof apiMessage === "string") {
        message = apiMessage;
      }
    }

    return {
      errors: {
        general: [message],
      },
      success: false,
    };
  }

  // Save authentication token
  cookieStore.set("logintoken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 15,
  });

  // Check pending cart
  const pendingCartCookie = cookieStore.get("pendingCart")?.value;

  if (pendingCartCookie) {
    redirectTo = "/cart";

    try {
      const pendingCart = JSON.parse(pendingCartCookie);

      // Validate saved product information
      if (
        typeof pendingCart.productId === "string" &&
        pendingCart.productId.length > 0 &&
        Number.isInteger(pendingCart.quantity) &&
        pendingCart.quantity >= 1
      ) {
        await httpService.post(
          "/api/cart/items",
          {
            productId: pendingCart.productId,
            quantity: pendingCart.quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Remove pending cart after successful request
        cookieStore.delete("pendingCart");
      } else {
        cookieStore.delete("pendingCart");
      }

    } catch (error) {
      // Keep pendingCart if adding the product fails
      console.error("Failed to add pending product to cart:", error);
    }
  }

  // Redirect user
  redirect(redirectTo);
};


export async function LogoutAction() {
  const cookieStore = await cookies();

  cookieStore.delete("logintoken");

  redirect("/");
}


export async function CheckLoginAction() {
  const cookieStore = await cookies();

  return Boolean(cookieStore.get("logintoken")?.value);
}