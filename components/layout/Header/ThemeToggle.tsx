// components/layout/Header/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setTheme } from "@/lib/store/features/themeSlice";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="size-10" aria-hidden />;
  }

  const isDark = mode === "dark";

  const handleToggle = () => {
    const next = isDark ? "light" : "dark";
    dispatch(setTheme(next));
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? "تغییر به تم روشن" : "تغییر به تم تاریک"}
      className="group relative cursor-pointer flex size-10 items-center justify-center overflow-hidden rounded-xl border border-border bg-card/60 text-foreground transition-all hover:border-primary/50 hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <FiSun
        size={18}
        className={`absolute transition-all duration-300 ${
          isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
        }`}
      />
      <FiMoon
        size={18}
        className={`absolute transition-all duration-300 ${
          isDark ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
    </button>
  );
}