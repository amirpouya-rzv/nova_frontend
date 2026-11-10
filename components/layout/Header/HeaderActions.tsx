"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiShoppingCart,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

import ThemeToggle from "./ThemeToggle";
import { iconButton } from "./headerStyles";
import Search from "./Search";

import {
  LogoutAction,
  CheckLoginAction,
} from "@/actions/authAction";

export default function HeaderActions() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    CheckLoginAction()
      .then(setIsLoggedIn)
      .catch(() => setIsLoggedIn(false));
  }, []);

  return (
    <div className="flex items-center gap-2">
      <span className="hidden lg:block">
        <Search />
      </span>

      <ThemeToggle />

      <Link
        href="/cart"
        aria-label="Shopping Cart"
        className={`${iconButton} relative`}
      >
        <FiShoppingCart size={18} />
      </Link>

      {isLoggedIn === null ? null : isLoggedIn ? (
        <form action={LogoutAction}>
          <button
            type="submit"
            className="group hidden h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all hover:shadow-lg hover:shadow-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none sm:flex cursor-pointer"
          >
            <FiLogOut size={16} />
            Logout
          </button>
        </form>
      ) : (
        <Link
          href="/login"
          className="group hidden h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all hover:shadow-lg hover:shadow-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none sm:flex cursor-pointer"
        >
          <FiUser size={16} />
          Sign In / Register

          <FiArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      )}
    </div>
  );
}