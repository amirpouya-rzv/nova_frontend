
import type { Metadata } from "next";
import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory";
import AboutHighlights from "./AboutHighlights";
import AboutValues from "./AboutValues";
import AboutCTA from "./AboutCTA";



export const metadata: Metadata = {
  title: "About Us | NOVA",
  description:
    "Discover NOVA, an online shopping destination focused on quality products, a smooth shopping experience, and customer satisfaction.",
 
};

export default function AboutPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-background">

      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-112.5 w-112.2 rounded-full bg-primary/20 blur-[130px]" />

        <div className="absolute -right-40 top-125 h-125 w-125 rounded-full bg-rose/15 blur-[140px]" />

        <div className="absolute bottom-0 left-1/3 h-100 w-100 rounded-full bg-accent/30 blur-[120px]" />
      </div>

      <AboutHero />

      <AboutStory />

      <AboutHighlights />

      <AboutValues />

      <AboutCTA />

    </main>
  );
}
