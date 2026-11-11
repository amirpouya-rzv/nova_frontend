import React from "react";

import { LoginAction } from "@/actions/authAction";
import SubmitForm from "@/components/SubmitForm";
import { useActionState } from "react";
import { ActionTypeLogin } from "@/types/actionLogin";
import Link from "next/link";
const Form = () => {
  const initialState: ActionTypeLogin = { errors: {}, success: false };

  const [state, formAction] = useActionState<ActionTypeLogin, FormData>(
    LoginAction,
    initialState,
  );
  return (
    <div>
      <form action={formAction} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold">
            Email Address
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="name@example.com"
            className="w-full h-13 rounded-xl border border-input bg-background/60 px-4 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-ring focus:ring-4 focus:ring-ring/10"
          />

          {state.errors?.email?.[0] && (
            <p className="text-sm text-destructive">{state.errors.email[0]}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-semibold">
            Password
          </label>

          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full h-13 rounded-xl border border-input bg-background/60 px-4 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-ring focus:ring-4 focus:ring-ring/10"
          />

          {state.errors?.password?.[0] && (
            <p className="text-sm text-destructive">
              {state.errors.password[0]}
            </p>
          )}
        </div>

        {/* General Error */}
        {state.errors?.general && (
          <p className="text-sm text-destructive text-center">
            {state.errors.general}
          </p>
        )}

        {/* Remember Me */}
        <div className="flex items-center justify-between text-sm pt-1">
          <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
            <input type="checkbox" className="size-4 accent-primary" />
            Remember me
          </label>

          <a
            href="#"
            className="font-semibold text-primary hover:text-rose transition-colors"
          >
            Forgot password?
          </a>
        </div>

        {/* Submit */}
        <SubmitForm />
      </form>
      <span className="text-left flex gap-10 mt-10 text-rose-500 animate-pulse">
        <p> email: admin@shop.dev</p>
        <p>password: Admin12345</p>
      </span>
      {/* Divider */}
      <div className="flex items-center gap-4 my-8">
        <div className="h-px flex-1 bg-border" />

        <span className="text-xs font-medium text-muted-foreground">
          NEW TO NOVA?
        </span>

        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Register */}
      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?
        <Link
          href="/login"
          className="ml-1 font-bold text-primary hover:text-rose transition-colors"
        >
          Create account
        </Link>
      </p>
    </div>
  );
};

export default Form;
