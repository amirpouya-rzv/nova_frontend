
import type { Metadata } from "next";
import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";



export const metadata: Metadata = {
  title: "Contact Us | NOVA",
  description:
    "Get in touch with NOVA. Contact our team for questions, product information, and customer support.",

  openGraph: {
    title: "Contact Us | NOVA",
    description:
      "We would love to hear from you. Get in touch with the NOVA team.",
    type: "website",
    siteName: "NOVA",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-background">

      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-112.5 w-112.5 rounded-full bg-primary/20 blur-[130px]" />

        <div className="absolute -right-40 top-125 h-125 w-125 rounded-full bg-rose/15 blur-[140px]" />

        <div className="absolute bottom-0 left-1/3 h-100 w-100 rounded-full bg-accent/30 blur-[120px]" />
      </div>

      <ContactHero />

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-20">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          <ContactInfo />

          <ContactForm />

        </div>

        <ContactMap />

      </section>

    </main>
  );
}
