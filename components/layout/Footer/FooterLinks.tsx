// components/layout/Footer/FooterLinks.tsx
import Link from "next/link";
import { footerGroups } from "@/constants/footerData";

export default function FooterLinks() {
  return (
    <div className="grid  grid-cols-3 gap-x-3 gap-y-8 sm:gap-x-8 lg:col-span-3">
      {footerGroups.map((group) => (
        <nav key={group.title} aria-label={group.title} className="min-w-0">
          <h4 className="text-xs font-bold text-foreground sm:text-sm">
            {group.title}
          </h4>
          <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
            {group.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-xs leading-5 text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
                >
                  <span className="hidden h-px w-0 bg-primary transition-all duration-300 group-hover:w-3 sm:block" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
}