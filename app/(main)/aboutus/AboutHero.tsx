
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative px-4 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 px-6 py-20 text-center shadow-2xl backdrop-blur-2xl sm:px-12 md:py-28">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-rose/20 blur-3xl"
          />

          <div className="relative">

            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-bold tracking-[0.3em] text-primary backdrop-blur-lg">
              THE STORY BEHIND NOVA
            </span>

            <h1
              id="about-heading"
              className="mt-8 text-4xl font-black leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
              More Than Just

              <span className="block text-primary">
                Shopping.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base">
              We believe shopping should be more than a transaction.
              It should be an experience full of discovery, inspiration,
              and little moments that make you smile.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <Link
                href="/products"
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-primary/90 px-7 py-4 text-sm font-bold text-primary-foreground shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:bg-primary"
              >
                Explore Collection
                <FiArrowUpRight size={18} />
              </Link>

              <Link
                href="/contactus"
                className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-foreground backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/20"
              >
                Contact Us
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
