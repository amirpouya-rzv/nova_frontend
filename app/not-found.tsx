'use client'
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 text-foreground">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Neon 404 */}
        <div className="relative">
          <div className="absolute inset-0 scale-110 bg-primary/20 blur-3xl" />

          <h1 className="relative select-none text-[clamp(7rem,24vw,15rem)] font-black leading-none tracking-tighter text-primary drop-shadow-[0_0_18px_var(--primary)]">
            404
          </h1>

          <span className="absolute -right-3 top-4 h-3 w-3 animate-pulse rounded-full bg-accent-foreground shadow-[0_0_15px_var(--accent-foreground)] sm:-right-6 sm:top-8 sm:h-4 sm:w-4" />

          <span className="absolute -bottom-2 left-5 h-2 w-2 animate-ping rounded-full bg-primary" />
        </div>

        {/* Message */}
        <div className="mt-8 space-y-4">
          <p className="text-xs font-semibold tracking-[0.45em] text-accent-foreground uppercase">
            Lost in the universe
          </p>

          <h2 className="text-2xl font-bold sm:text-4xl">
            Oops! Page not found
          </h2>

          <p className="mx-auto max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
            Looks like this page has drifted into another galaxy.
            Let&apos;s get you back to something awesome.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-[0_0_18px_color-mix(in_srgb,var(--primary)_35%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--primary)_55%,transparent)]"
          >
            <span aria-hidden="true">⌂</span>
            Back to home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="rounded-xl border border-border bg-card/60 px-7 py-3.5 font-semibold text-foreground transition-all duration-300 hover:border-primary/70 hover:text-primary"
          >
            Go back
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-6 text-[10px] tracking-[0.3em] text-muted-foreground">
        NOVA · BEYOND THE ORDINARY
      </p>
    </main>
  );
}