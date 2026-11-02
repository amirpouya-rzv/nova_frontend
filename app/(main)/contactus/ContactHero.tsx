
import Link from "next/link";

export default function ContactHero() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="relative px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 px-6 py-20 text-center shadow-2xl backdrop-blur-2xl sm:px-12 md:py-24">

          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-rose/20 blur-3xl"
          />

          <div className="relative">

            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-bold tracking-[0.3em] text-primary backdrop-blur-lg">
              GET IN TOUCH
            </span>

            <h1
              id="contact-heading"
              className="mt-8 text-4xl font-black leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
              Let's Talk
              <span className="block text-primary">
                With Us.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base">
              Have a question, an idea, or need some help?
              We'd love to hear from you. Our team is always
              ready to help you.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3 text-xs text-muted-foreground">

              <Link href="/" className="transition hover:text-primary">
                Home
              </Link>

              <span className="text-primary">/</span>

              <span className="font-semibold text-primary">
                Contact Us
              </span>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
