
import { FiShoppingBag } from "react-icons/fi";

export default function AboutStory() {
  return (
    <section
      aria-labelledby="story-heading"
      className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 py-16 md:px-8 lg:grid-cols-2 lg:gap-20 lg:py-24"
    >

      {/* Visual */}
      <div className="relative mx-auto w-full max-w-xl">

        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">

          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-rose/20" />

          <div className="absolute left-8 top-8 h-32 w-32 rounded-full border border-primary/30" />

          <div className="absolute bottom-10 right-8 h-48 w-48 rounded-full border border-primary/20" />

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <span
              aria-hidden="true"
              className="text-9xl font-black tracking-tighter text-primary drop-shadow-lg"
            >
              N.
            </span>

            <span className="mt-3 text-xs font-bold tracking-[0.5em] text-muted-foreground">
              NOVA
            </span>

            <div className="mt-8 h-px w-24 bg-primary/60" />

            <p className="mt-5 max-w-52 text-center text-sm leading-7 text-muted-foreground">
              A new way to discover what you love.
            </p>

          </div>
        </div>

        {/* Floating Card */}
        <div className="absolute -bottom-7 -right-3 rounded-2xl border border-white/30 bg-white/20 p-5 shadow-2xl backdrop-blur-2xl sm:-right-6">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/15 text-primary">
              <FiShoppingBag size={23} />
            </div>

            <div>
              <p className="text-sm font-bold text-foreground">
                Discover More
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                Love every moment
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">

        <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-bold tracking-[0.25em] text-primary">
          WHO WE ARE
        </span>

        <h2
          id="story-heading"
          className="text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          A Little Different.

          <span className="block text-primary">
            A Lot More Personal.
          </span>
        </h2>

        <p className="text-sm leading-8 text-muted-foreground sm:text-base">
          NOVA was created with one simple idea: make online shopping
          feel exciting, effortless, and personal.
        </p>

        <p className="text-sm leading-8 text-muted-foreground sm:text-base">
          We bring together carefully selected products, thoughtful
          details, and a customer-focused approach to create a place
          where discovering something new feels special.
        </p>

        <p className="text-sm leading-8 text-muted-foreground sm:text-base">
          Whether you're looking for something useful, something
          beautiful, or simply something different, we're here to
          make that journey enjoyable.
        </p>

        <blockquote className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-xl">
          <p className="border-l-2 border-primary py-2 pl-5 text-lg font-bold italic text-foreground">
            Your world. Your style. Your NOVA.
          </p>
        </blockquote>

      </div>
    </section>
  );
}
