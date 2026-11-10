"use client";

import Link from "next/link";
import { useState } from "react";
import { FiArrowRight, FiX, FiShoppingBag, FiArrowLeft } from "react-icons/fi";

export default function Announcement() {
  const [showBanner, setShowBanner] = useState(true);
  const [closing, setClosing] = useState(false);

  const closeBanner = () => {
    setClosing(true);
    setTimeout(() => setShowBanner(false), 500);
  };

  if (!showBanner) return null;

  return (
    <div
      className={`announcement-wrapper mx-auto max-w-7xl px-3 sm:px-6 ${
        closing ? "announcement-exit" : ""
      }`}
    >
      <div className="announcement-banner relative mx-auto overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-rose/30 via-rose/15 to-rose/30 text-primary shadow-lg shadow-rose/5 backdrop-blur-2xl">

        {/* Animated Light */}
        <div className="announcement-light pointer-events-none absolute inset-0" />

        {/* Content */}
        <div className="announcement-content relative mx-auto flex items-center justify-center gap-2 px-10 py-2 text-xs font-medium sm:text-sm">

          <div className="announcement-icon flex shrink-0 items-center justify-center">
            <FiShoppingBag size={16} />
          </div>

          <p className="truncate">
            Welcome to NOVA — Discover Your Style!
          </p>

          <Link
            href="/products"
            className="announcement-link hidden items-center gap-1 underline underline-offset-4 transition-opacity hover:opacity-70 sm:flex"
          >
            Explore Collection
            <FiArrowLeft size={14} />
          </Link>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={closeBanner}
          aria-label="Close welcome message"
          className="announcement-close absolute left-2 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 hover:rotate-90 hover:bg-primary-foreground/15"
        >
          <FiX size={14} />
        </button>
      </div>

      <style jsx global>{`
        .announcement-wrapper {
          perspective: 1000px;
          padding-top: 8px;
          transform-style: preserve-3d;
          animation: announcement-space 1.2s ease both;
        }

        .announcement-banner {
          transform-origin: top center;
          transform: rotateX(-90deg) translateY(-15px);
          opacity: 0;
          animation: cinematic-reveal 1.1s
            cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
        }

        .announcement-content {
          opacity: 0;
          transform: translateY(-8px);
          animation: content-reveal 0.65s ease 1.45s forwards;
        }

        .announcement-icon {
          animation: truck-arrive 0.7s
            cubic-bezier(0.34, 1.56, 0.64, 1) 1.65s both;
        }

        .announcement-link {
          animation: content-reveal 0.5s ease 1.8s both;
        }

        .announcement-light {
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255, 255, 255, 0.12) 45%,
            rgba(255, 255, 255, 0.25) 50%,
            transparent 75%
          );
          transform: translateX(-120%);
          animation: light-sweep 1.2s ease 1.8s both;
        }

        .announcement-close {
          opacity: 0;
          animation: content-reveal 0.4s ease 1.9s forwards;
        }

        @keyframes cinematic-reveal {
          0% {
            opacity: 0;
            transform: rotateX(-90deg) translateY(-15px);
          }
          65% {
            opacity: 1;
            transform: rotateX(8deg) translateY(2px);
          }
          82% {
            transform: rotateX(-3deg) translateY(-1px);
          }
          100% {
            opacity: 1;
            transform: rotateX(0deg) translateY(0);
          }
        }

        @keyframes content-reveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes truck-arrive {
          0% {
            opacity: 0;
            transform: translateX(-20px) scale(0.5);
          }
          70% {
            opacity: 1;
            transform: translateX(3px) scale(1.15);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes light-sweep {
          to {
            transform: translateX(120%);
          }
        }

        @keyframes announcement-space {
          from {
            padding-top: 0;
          }
          to {
            padding-top: 8px;
          }
        }

        .announcement-exit .announcement-banner {
          animation: cinematic-exit 0.5s
            cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }

        @keyframes cinematic-exit {
          to {
            opacity: 0;
            transform: rotateX(-70deg) translateY(-12px) scale(0.95);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .announcement-wrapper,
          .announcement-banner,
          .announcement-content,
          .announcement-icon,
          .announcement-link,
          .announcement-light,
          .announcement-close {
            animation: none !important;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}