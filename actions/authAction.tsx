"use server";

import httpService from "@/services/_httpService";
import { ActionTypeLogin } from "@/types/actionLogin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as z from "zod";

// validation 
const validationSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const LoginAction = async (
  prevState: ActionTypeLogin,
  formData: FormData,
) => {

  // Extract form values 
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;


  // handle validation
  const params = { email, password };
  const validationfeild = validationSchema.safeParse(params);
  if (!validationfeild.success) {
    return {
      errors: validationfeild.error.flatten().fieldErrors,
      success: false,
    };
  }

  // try {
    const res = await httpService.post("/api/auth/login", params);
    if (res.status === 200) {
      const token = res.data.accessToken;

      (await cookies()).set("logintoken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 15, // ۱۵ دقیقه، برابر عمر توکن
     });

       redirect("/");
     } 
    return {
       errors: { general: ["Login failed. Please try again."] },
      success: false,
    };

  // }
  //  catch (err) {

  //   //  general error 
  //   return {
  //     errors: {
  //       general: ["Email or password is incorrect"],
  //     },
  //     success: false,
  //   };
  // }
};


// control login user
export const isLoggedIn = async (): Promise<boolean> => {
  try {
    const token = (await cookies()).get("logintoken")?.value;

    if (!token) return false;

    const res = await httpService.get("/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.status === 200;

  } catch (error) {
    return false;
  }
};
