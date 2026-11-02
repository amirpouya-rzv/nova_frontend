
import {
  FiHeart,
  FiAward,
  FiShield,
  FiPackage,
} from "react-icons/fi";

const values = [
  {
    icon: FiHeart,
    title: "Customer First",
    description:
      "Every decision we make starts with you. Your satisfaction is always our priority.",
  },
  {
    icon: FiAward,
    title: "Quality Matters",
    description:
      "We believe great products should deliver great experiences, every single time.",
  },
  {
    icon: FiShield,
    title: "Trust & Transparency",
    description:
      "Honest pricing, reliable service, and a shopping experience you can trust.",
  },
  {
    icon: FiPackage,
    title: "Careful Delivery",
    description:
      "We aim to make sure your orders are handled with care and delivered safely.",
  },
];

export default function AboutValues() {
  return (
    <section
      aria-labelledby="values-heading"
      className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-28"
    >

      {/* Section Heading */}
      <div className="mx-auto mb-14 max-w-2xl text-center">

        <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-bold tracking-[0.3em] text-primary">
          WHAT WE BELIEVE
        </span>

        <h2
          id="values-heading"
          className="mt-6 text-3xl font-black text-foreground sm:text-4xl"
        >
          The Values Behind
          <span className="text-primary"> Everything.</span>
        </h2>

        <p className="mt-5 text-sm leading-7 text-muted-foreground">
          These are the principles that shape our work and define
          the experience we want to create for you.
        </p>

      </div>

      {/* Values Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {values.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="group rounded-2xl border border-white/20 bg-white/10 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-white/15 hover:shadow-2xl"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={25} />
                </div>

                <span className="text-sm font-bold text-muted-foreground/50">
                  0{index + 1}
                </span>

              </div>

              <h3 className="mt-7 text-lg font-bold text-card-foreground">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>

            </article>
          );
        })}

      </div>
    </section>
  );
}
