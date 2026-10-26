// components/layout/Footer/FooterBrand.tsx
import Link from "next/link";
import { contactInfo, footerBrand, socialLinks } from "@/constants/footerData";

export default function FooterBrand() {
  return (
    <div>
      <Link href="/" className="group inline-flex items-center gap-2.5">
        <span className="flex size-11 items-center justify-center rounded-xl bg-linear-to-br from-primary to-primary/60 text-xl font-extrabold text-primary-foreground shadow-md shadow-primary/30 transition-transform duration-300 group-hover:rotate-6">
          {footerBrand.letter}
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-lg font-extrabold text-foreground">{footerBrand.name}</span>
          <span className="text-[11px] text-muted-foreground">{footerBrand.tagline}</span>
        </span>
      </Link>

      <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
        {footerBrand.description}
      </p>

      <ul className="mt-5 space-y-3">
        {contactInfo.map((item) => {
          const content = (
            <>
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                <item.icon size={15} />
              </span>
              <span>{item.label}</span>
            </>
          );

          return (
            <li key={item.label}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {content}
                </Link>
              ) : (
                <span className="flex items-center gap-3 text-sm text-muted-foreground">
                  {content}
                </span>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex items-center gap-2">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-card/60 text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
          >
            <social.icon size={17} />
          </Link>
        ))}
      </div>
    </div>
  );
}