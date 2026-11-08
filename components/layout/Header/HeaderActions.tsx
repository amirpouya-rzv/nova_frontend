
import Link from "next/link";
import {
  FiArrowRight,
  FiSearch,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";

import ThemeToggle from "./ThemeToggle";
import { iconButton } from "./headerStyles";
import Search from "./Search";

export default function HeaderActions() {
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
        <span className="absolute -top-1.5 -left-1.5 flex size-5 items-center justify-center rounded-full border-2 border-background bg-primary text-[10px] font-bold text-primary-foreground">
          3
        </span>
      </Link>

      <Link
        href="/login"
        className="group hidden h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all hover:shadow-lg hover:shadow-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none sm:flex"
      >
        <FiUser size={16} />
        Sign In / Register
        <FiArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}
