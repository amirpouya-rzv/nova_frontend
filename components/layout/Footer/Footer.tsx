// components/layout/Footer/Footer.tsx
import FooterFeatures from "./FooterFeatures";
import FooterNewsletter from "./FooterNewsletter";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-card/40 backdrop:blur-sm">
      {/* خط تزئینی بالای فوتر */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* بخش بالا: ویژگی‌ها و خبرنامه (کمی بالاتر از فوتر) */}
        <div className="-translate-y-10 space-y-4">
          <FooterNewsletter />
          <FooterFeatures />
        </div>

        {/* بخش اصلی */}
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2">
            <FooterBrand />
          </div>
          <FooterLinks />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}