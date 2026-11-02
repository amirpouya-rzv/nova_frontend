
import {
  FiTruck,
  FiShield,
  FiHeadphones,
  FiShoppingBag,
} from "react-icons/fi";

const highlights = [
  {
    icon: FiShoppingBag,
    title: "Curated Products",
    description:
      "Discover products selected with attention to quality, style, and usefulness.",
  },
  {
    icon: FiShield,
    title: "Secure Shopping",
    description:
      "Enjoy a shopping experience designed with trust and security in mind.",
  },
  {
    icon: FiTruck,
    title: "Reliable Delivery",
    description:
      "We aim to make receiving your orders simple and convenient.",
  },
  {
    icon: FiHeadphones,
    title: "Customer Support",
    description:
      "Our goal is to make sure you feel supported throughout your shopping journey.",
  },
];

export default function AboutHighlights() {
  return (
    <section
      aria-label="NOVA shopping benefits"
      className="px-4 py-16 md:px-8"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="group rounded-2xl border border-white/20 bg-white/10 px-6 py-8 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-white/15"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon size={25} />
              </div>

              <h3 className="mt-6 text-lg font-bold text-card-foreground">
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
