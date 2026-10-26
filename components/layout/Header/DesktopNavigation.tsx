
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/navLinks";

export default function DesktopNavigation() {
  const pathname = usePathname();

  const [pill, setPill] = useState({
    left: 0,
    width: 0,
    visible: false,
  });

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      aria-label="منوی اصلی"
      onMouseLeave={() => setPill((p) => ({ ...p, visible: false }))}
      className="relative hidden items-center gap-1 lg:flex"
    >
      <span
        aria-hidden
        className="absolute  top-0 h-full rounded-xl bg-accent transition-all duration-300 ease-out"
        style={{
          left: pill.left,
          width: pill.width,
          opacity: pill.visible ? 1 : 0,
        }}
      />

      {navLinks.map((link) => {
        const active = isActive(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            onMouseEnter={(e) =>
              setPill({
                left: e.currentTarget.offsetLeft,
                width: e.currentTarget.offsetWidth,
                visible: true,
              })
            }
            className={`relative z-10 flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
              active
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <link.icon
              size={16}
              className={active ? "text-primary" : ""}
            />

            {link.label}

            {link.badge && (
              <span className="rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                {link.badge}
              </span>
            )}

            {active && (
              <span className="absolute -bottom-0.5 left-1/2 h-1 w-5 -translate-x-1/2 rounded-full bg-primary" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
