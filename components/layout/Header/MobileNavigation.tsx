"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiArrowLeft, FiSearch, FiUser } from "react-icons/fi";
import { navLinks } from "@/constants/navLinks";
import Search from "./Search";

type MobileNavigationProps = {
  isOpen: boolean;
};

export default function MobileNavigation({ isOpen }: MobileNavigationProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // انیمیشن ورود پله‌ای آیتم‌ها
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
        clipPath: isOpen ? "inset(0 0 0 0 round 16px)" : "inset(0 0 100% 0 round 16px)",
      }}
      className={`absolute inset-x-0 top-full mt-2 rounded-2xl border bg-background/95  shadow-2xl shadow-foreground/10 backdrop-blur-sm transition-[clip-path,opacity,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
        isOpen
          ? "visible border-border opacity-100"
          : "pointer-events-none invisible border-transparent opacity-0 delay-0"
      }`}
    >
      <nav
        aria-label="منوی موبایل"
        className="max-h-[calc(100dvh-8rem)] space-y-4 overflow-y-auto p-4"
        inert={!isOpen}
      >
        {/* جستجو */}
        <div className={itemClass} style={itemStyle(0)}>
          {/* <Link
            href="/search"
            tabIndex={isOpen ? 0 : -1}
            className="flex h-11 items-center gap-3 rounded-xl border border-border bg-card px-4 text-sm text-muted-foreground"
          >
            <FiSearch size={18} />
            جستجو در محصولات...
          </Link> */}
          <Search/>
        </div>

        {/* لینک‌های منو */}
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

        {/* ورود و ثبت‌نام */}
        <div className={itemClass} style={itemStyle(navLinks.length + 1)}>
          <Link
            href="/login"
            tabIndex={isOpen ? 0 : -1}
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25"
          >
            <FiUser size={18} />
            ورود / ثبت‌نام
          </Link>
        </div>
      </nav>
    </div>
  );
}