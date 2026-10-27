"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Announcement from "./Announcement";
import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import HeaderActions from "./HeaderActions";
import MobileMenuButton from "./MobileMenuButton";
import MobileNavigation from "./MobileNavigation";
import HeaderProgress from "./HeaderProgress";
import { useScroll } from "@/hooks/useScroll";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useEscapeKey } from "@/hooks/useEscapeKey";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { scrolled, progress } = useScroll();

  // بستن منوی موبایل با تغییر صفحه
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // قفل اسکرول صفحه وقتی منوی موبایل باز است
useLockBodyScroll(isOpen);

  // بستن منو با کلید Escape
useEscapeKey(isOpen, () => setIsOpen(false));


  return (
    <>
      <Announcement />

      {/* بک‌دراپ */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-40 bg-foreground/75 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* هدر شناور */}
      <div
        className={`sticky top-0 z-50 px-3 transition-all duration-300 sm:px-6 ${
          scrolled ? "pt-2" : "pt-4"
        }`}
      >
        <div className="relative mx-auto max-w-7xl">
          <header
            className={`relative overflow-hidden rounded-xl border transition-all duration-300 md:rounded-full ${
              scrolled
                ? "border-border bg-background/75 shadow-lg shadow-foreground/5 backdrop-blur-xl"
                : "border-border/60  backdrop-blur-xs"
            }`}
          >
            <div
              className={`flex items-center justify-between gap-3 px-3 transition-all duration-300 sm:px-5 ${
                scrolled ? "h-14" : "h-[68px]"
              }`}
            >
              <Logo />
              <DesktopNavigation />

              <div className="flex items-center gap-2">
                <HeaderActions />
                <MobileMenuButton
                  isOpen={isOpen}
                  onClick={() => setIsOpen((prev) => !prev)}
                />
              </div>
            </div>

            <HeaderProgress progress={progress} scrolled={scrolled} />
          </header>

          <MobileNavigation isOpen={isOpen} />
        </div>
      </div>
    </>
  );
}