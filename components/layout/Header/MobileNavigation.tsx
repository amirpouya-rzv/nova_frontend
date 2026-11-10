
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FiArrowLeft,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

import { navLinks } from "@/constants/navLinks";
import Search from "./Search";

import {
  CheckLoginAction,
  LogoutAction,
} from "@/actions/authAction";

type MobileNavigationProps = {
  isOpen: boolean;
};

export default function MobileNavigation({
  isOpen,
}: MobileNavigationProps) {
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    CheckLoginAction()
      .then(setIsLoggedIn)
      .catch(() => setIsLoggedIn(false));
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Staggered entrance animation for menu items
  const itemStyle = (index: number): React.CSSProperties => ({
    transitionDelay: isOpen ? `${120 + index * 55}ms` : "0ms",
  });

  const itemClass = `transition-all duration-300 ease-out ${
    isOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
  }`;

  return (
    <div
      id="mobile-menu"
      aria-hidden={!isOpen}
      style={{
        clipPath: isOpen
          ? "inset(0 0 0 0 round 16px)"
          : "inset(0 0 100% 0 round 16px)",
      }}
      className={`absolute inset-x-0 top-full mt-2 rounded-2xl border bg-background/95 shadow-2xl shadow-foreground/10 backdrop-blur-sm transition-[clip-path,opacity,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
        isOpen
          ? "visible border-border opacity-100"
          : "pointer-events-none invisible border-transparent opacity-0 delay-0"
      }`}
    >
      <nav
        aria-label="Mobile navigation"
        className="max-h-[calc(100dvh-8rem)] space-y-4 overflow-y-auto p-4"
        inert={!isOpen}
      >
        {/* Search */}
        <div className={itemClass} style={itemStyle(0)}>
          <Search />
        </div>

        {/* Navigation links */}
        <ul className="space-y-1">
          {navLinks.map((link, i) => {
            const active = isActive(link.href);

            return (
              <li
                key={link.href}
                className={itemClass}
                style={itemStyle(i + 1)}
              >
                <Link
                  href={link.href}
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl p-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${
                      active
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <link.icon size={17} />
                  </span>

                  <span>{link.label}</span>

                  {link.badge && (
                    <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold text-primary">
                      {link.badge}
                    </span>
                  )}

                  <FiArrowLeft size={15} className="ms-auto opacity-40" />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Login, Register or Logout */}
        <div
          className={itemClass}
          style={itemStyle(navLinks.length + 1)}
        >
          {isLoggedIn === null ? null : isLoggedIn ? (
            <form action={LogoutAction}>
              <button
                type="submit"
                tabIndex={isOpen ? 0 : -1}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-destructive/30 bg-primary text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25"
              >
                <FiLogOut size={18} />
                Logout
              </button>
            </form>
          ) : (
            <Link
              href="/login"
              tabIndex={isOpen ? 0 : -1}
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25"
            >
              <FiUser size={18} />
              Sign In / Register
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
