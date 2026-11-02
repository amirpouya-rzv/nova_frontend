
import { FiMapPin } from "react-icons/fi";

export default function ContactMap() {
  return (
    <section
      aria-labelledby="map-heading"
      className="mt-20 space-y-6"
    >

      <div>
        <span className="text-xs font-bold tracking-[0.25em] text-primary">
          FIND US
        </span>

        <h2
          id="map-heading"
          className="mt-3 text-3xl font-black text-foreground"
        >
          Visit Our Store
        </h2>
      </div>

      <div className="relative flex min-h-72 items-center justify-center overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-2xl">

        {/* Map Background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30"
        >
          <div className="h-full w-full bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:22px_22px]" />
        </div>

        <div
          aria-hidden="true"
          className="absolute h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        />

        {/* Location */}
        <div className="relative flex flex-col items-center gap-4 text-center">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-primary/90 text-primary-foreground shadow-xl backdrop-blur-xl">
            <FiMapPin size={30} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground">
              NOVA Store
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Your destination for something special.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
