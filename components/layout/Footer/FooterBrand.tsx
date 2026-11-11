// components/layout/Footer/FooterBrand.tsx
import Link from "next/link";
import { contactInfo, footerBrand, socialLinks } from "@/constants/footerData";
import Image from "next/image";

export default function FooterBrand() {
  return (
    <div>
      <Link href="/" className="group inline-flex items-center gap-2.5">
         <span className="relative flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-primary/60 text-lg font-extrabold text-primary-foreground shadow-md shadow-primary/30 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
               <Image
               src='/image/logo.WebP'
               alt="logo"
               width={100}
               height={100}/>
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