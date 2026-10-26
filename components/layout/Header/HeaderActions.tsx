
import Link from "next/link";
import {
  FiArrowLeft,
  FiSearch,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";

import ThemeToggle from "./ThemeToggle";
import { iconButton } from "./headerStyles";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      {/* جستجوی کامل در صفحه بزرگ */}
      <Link
        href="/search"
        className="hidden h-10 items-center gap-2 rounded-xl border border-border bg-card/60 px-3 text-sm text-muted-foreground transition-all hover:border-primary/50 hover:bg-accent hover:text-foreground xl:flex"
      >
        <FiSearch size={16} />
        <span className="w-24 text-start">جستجو...</span>
        <kbd className="rounded-md border border-border bg-background px-1.5 py-0.5 font-mono text-[10px]">
          Ctrl K
        </kbd>
      </Link>

      {/* جستجوی آیکونی در صفحه متوسط */}
      <Link
        href="/search"
        aria-label="جستجو"
        className={`${iconButton} hidden sm:flex xl:hidden`}
      >
        <FiSearch size={18} />
      </Link>

      <ThemeToggle />

      <Link
        href="/cart"
        aria-label="سبد خرید"
        className={`${iconButton} relative`}
      >
        <FiShoppingCart size={18} />
        <span className="absolute -top-1.5 -left-1.5 flex size-5 items-center justify-center rounded-full border-2 border-background bg-primary text-[10px] font-bold text-primary-foreground">
          ۳
        </span>
      </Link>

      <Link
        href="/login"
        className="group hidden h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all hover:shadow-lg hover:shadow-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none sm:flex"
      >
        <FiUser size={16} />
        ورود / ثبت‌نام
        <FiArrowLeft
          size={14}
          className="transition-transform group-hover:-translate-x-1"
        />
      </Link>
    </div>
  );
}
