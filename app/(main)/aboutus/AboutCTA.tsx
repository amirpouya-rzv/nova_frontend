
import Link from "next/link";
import { FiArrowUpRight, FiUsers } from "react-icons/fi";

export default function AboutCTA() {
  return (
    <section className="px-4 pb-24 md:px-8">

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/20 bg-primary/80 px-6 py-16 text-center text-primary-foreground shadow-2xl backdrop-blur-2xl sm:px-12 lg:py-24">

        {/* Decorative Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/20 bg-white/10 blur-2xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full border border-white/20 bg-white/10 blur-2xl"
        />

        <div className="relative mx-auto max-w-2xl">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/15 backdrop-blur-xl">
            <FiUsers size={30} />
          </div>

          <h2 className="mt-7 text-3xl font-black sm:text-5xl">
            Be Part of Something New.
          </h2>

          <p className="mt-5 text-sm leading-8 opacity-85 sm:text-base">
            Your next favorite thing might be just one click away.
            Explore NOVA and discover a shopping experience made
            to inspire.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/30 bg-white/90 px-8 py-4 text-sm font-bold text-primary shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white"
          >
            Start Exploring
            <FiArrowUpRight size={18} />
          </Link>

        </div>
      </div>
    </section>
  );
}
