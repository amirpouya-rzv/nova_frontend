
"use client";

import Link from "next/link";
import { useState } from "react";
import { FiArrowLeft, FiX, FiZap } from "react-icons/fi";

export default function Announcement() {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <div className="relative bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-10 py-2 text-xs font-medium sm:text-sm">
        <FiZap size={14} className="shrink-0" />

        <p className="truncate">
          ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان
        </p>

        <Link
          href="/offers"
          className="hidden items-center gap-1 underline underline-offset-4 hover:opacity-80 sm:flex"
        >
          مشاهده تخفیف‌ها
          <FiArrowLeft size={14} />
        </Link>
      </div>

      <button
        type="button"
        onClick={() => setShowBanner(false)}
        aria-label="بستن اعلان"
        className="absolute top-1/2 left-3 flex size-6 -translate-y-1/2 items-center justify-center rounded-full transition-colors hover:bg-primary-foreground/15"
      >
        <FiX size={14} />
      </button>
    </div>
  );
}
