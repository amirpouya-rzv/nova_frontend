// src/components/providers/ThemeInitializer.tsx
"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/lib/store/hooks";
import { setTheme } from "@/lib/store/features/themeSlice";

// فقط یک بار موقع لود، تم واقعی صفحه رو از DOM می‌خونه و تو ریداکس میذاره
export default function ThemeInitializer() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    dispatch(setTheme(isDark ? "dark" : "light"));
  }, [dispatch]);

  return null;
}