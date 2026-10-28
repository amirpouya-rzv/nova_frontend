"use client";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background text-foreground">
      {/* Ambient neon glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]" />

      <div className="relative flex flex-col items-center">
        {/* NOVA logo */}
        <div className="relative mb-10 flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 animate-spin rounded-3xl border-2 border-primary/70 shadow-[0_0_20px_var(--primary)]" />

          <div className="absolute inset-2 animate-[spin_5s_linear_infinite_reverse] rounded-2xl border border-accent-foreground/70" />

          <span className="text-3xl font-black tracking-widest text-primary drop-shadow-[0_0_12px_var(--primary)]">
            N
          </span>

          <span className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full bg-accent-foreground shadow-[0_0_12px_var(--accent-foreground)]" />
        </div>

        {/* Brand */}
        <h1 className="text-4xl font-black tracking-[0.35em] text-foreground">
          NOVA
        </h1>

        <p className="mt-3 text-xs tracking-[0.3em] text-muted-foreground">
          THE FUTURE IS HERE
        </p>

        {/* Loading bar */}
        <div className="mt-10 h-1.5 w-56 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-2/5 animate-[loading_1.6s_ease-in-out_infinite] rounded-full bg-primary shadow-[0_0_14px_var(--primary)]" />
        </div>

        <p className="mt-4 animate-pulse text-sm text-accent-foreground">
          Preparing your experience...
        </p>
      </div>

      <span className="absolute bottom-8 text-[10px] tracking-[0.3em] text-muted-foreground">
        NOVA · NEXT GENERATION STORE
      </span>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-110%);
          }
          100% {
            transform: translateX(280%);
          }
        }
      `}</style>
    </main>
  );
}