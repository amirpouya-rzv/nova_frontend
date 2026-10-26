// components/layout/Footer/FooterNewsletter.tsx
"use client";

import { useState } from "react";
import { FiArrowLeft, FiCheck } from "react-icons/fi";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: اینجا درخواست واقعی به بک‌اند بزن
    setDone(true);
    setEmail("");
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-8 text-primary-foreground sm:px-10 sm:py-10">
      <div
        aria-hidden
        className="absolute -top-16 -right-16 size-56 rounded-full bg-primary-foreground/10 blur-2xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-20 -left-10 size-64 rounded-full bg-primary-foreground/10 blur-2xl"
      />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-md">
          <h3 className="text-xl font-extrabold sm:text-2xl">از تخفیف‌ها زودتر باخبر شو</h3>
          <p className="mt-2 text-sm leading-7 opacity-90">
            ایمیلت را وارد کن تا جدیدترین پیشنهادها و محصولات را اول از همه برایت بفرستیم.
          </p>
        </div>

        {done ? (
          <p className="flex items-center gap-2 rounded-xl bg-primary-foreground/15 px-5 py-3 text-sm font-semibold">
            <FiCheck size={18} />
            ثبت شد، ممنون!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ایمیل شما"
              aria-label="ایمیل"
              dir="ltr"
              className="h-12 min-w-0 flex-1 rounded-xl border border-primary-foreground/30 bg-primary-foreground/10 px-4 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/60 focus:border-primary-foreground/70"
            />
            <button
              type="submit"
              className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-xl bg-primary-foreground px-5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              عضویت
              <FiArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}