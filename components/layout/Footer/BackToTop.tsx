// components/layout/Footer/BackToTop.tsx
"use client";

import { Button } from "@/components/ui/button";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  return (
    <Button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="بازگشت به بالای صفحه"
      className="group z-40 fixed top-11/12 md:top-125 right-5 inline-flex h-10 items-center gap-2 rounded-xl border border-accent-foreground bg-rose text-white  px-4 text-sm dark:bg-primary cursor-pointer shadow-2xl transition-all hover:border-primary/50 hover:bg-rose/80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none "
    >
      <FiArrowUp size={16} className="transition-transform group-hover:-translate-y-1" />
    </Button>
  );
}