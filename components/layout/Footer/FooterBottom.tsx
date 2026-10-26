// components/layout/Footer/FooterBottom.tsx
import Link from "next/link";
import { footerBrand, legalLinks } from "@/constants/footerData";
import BackToTop from "./BackToTop";

export default function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-center sm:flex-row sm:text-start">
      <p className="text-xs text-muted-foreground sm:text-sm">{footerBrand.copyright}</p>

      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {legalLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            {link.label}
          </Link>
        ))}
        <BackToTop />
      </div>
    </div>
  );
}