"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <section className="nova-banner mx-auto mt-10 w-11/12 overflow-hidden rounded-2xl border border-border/60 shadow-xl shadow-foreground/10">
      <div className="relative overflow-hidden">
        <Image
          src="/image/nova-banner.WebP"
          alt="NOVA؛ فروشگاه آنلاین"
          width={1920}
          height={1080}
          preload
          sizes="92vw"
          quality={80}
          className="nova-image block h-auto w-full"
        />
        <div className="nova-light pointer-events-none absolute inset-0" />
      </div>

      <style jsx global>{`
        .nova-banner {
          opacity: 0;
          transform: translateY(35px) scale(.94);
          animation: banner-in 1.2s cubic-bezier(.16,1,.3,1) forwards;
        }

        .nova-image {
          transform: scale(1.1);
          animation: image-in 1.8s ease-out forwards;
        }

        .nova-light {
          background: linear-gradient(
            110deg,
            transparent 35%,
            rgb(255 255 255 / .08) 43%,
            rgb(255 255 255 / .5) 50%,
            rgb(255 255 255 / .08) 57%,
            transparent 65%
          );
          transform: translateX(-120%);
          animation: light-pass 1.6s ease-in-out 1s forwards;
        }

        @keyframes banner-in {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes image-in {
          to { transform: scale(1); }
        }

        @keyframes light-pass {
          to { transform: translateX(120%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .nova-banner, .nova-image, .nova-light {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}