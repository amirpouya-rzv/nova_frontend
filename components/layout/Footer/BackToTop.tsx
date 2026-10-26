// components/layout/Footer/BackToTop.tsx
"use client";

import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="بازگشت به بالای صفحه"
      className="group inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-card/60 px-4 text-sm text-foreground transition-all hover:border-primary/50 hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      بالای صفحه
      <FiArrowUp size={16} className="transition-transform group-hover:-translate-y-1" />
    </button>
  );
}