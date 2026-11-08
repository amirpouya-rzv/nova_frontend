import FooterFeatures from "./FooterFeatures";
import FooterNewsletter from "./FooterNewsletter";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden rounded-t-3xl border border-white/10 bg-gradient-to-r from-rose/30 via-rose/15 to-rose/30 text-primary shadow-lg shadow-rose/5 backdrop-blur-2xl">

      {/* Decorative Top Glow */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Newsletter & Features */}
        <div className="-translate-y-10 space-y-4">
          <FooterNewsletter />
          <FooterFeatures />
        </div>

        {/* Main Footer Content */}
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
