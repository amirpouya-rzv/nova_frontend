// hooks/useIsActive.ts
"use client";

import { usePathname } from "next/navigation";

export function useIsActive() {
  const pathname = usePathname();
  return (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
}