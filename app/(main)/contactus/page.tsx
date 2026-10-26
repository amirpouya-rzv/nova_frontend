import Link from "next/link";
import {
  FiArrowLeft,
  FiClock,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
  FiShield,
  FiShoppingBag,
} from "react-icons/fi";

const contactMethods = [
  {
    icon: FiMessageCircle,
    title: "گفت‌وگوی آنلاین",
    description: "برای دریافت راهنمایی سریع با ما در ارتباط باش.",
    value: "پشتیبانی آنلاین",
    href: "mailto:support@example.com",
    accent: "from-violet-500/15 to-indigo-500/5",
  },
  {
    icon: FiMail,
    title: "ایمیل",
    description: "سؤالات و درخواست‌هایت را برای ما ارسال کن.",
    value: "support@example.com",
    href: "mailto:support@example.com",
    accent: "from-sky-500/15 to-cyan-500/5",
  },
  {
    icon: FiPhone,
    title: "تماس تلفنی",
    description: "برای پیگیری سفارش یا دریافت مشاوره تماس بگیر.",
    value: "۰۲۱-۱۲۳۴۵۶۷۸",
    href: "tel:02112345678",
    accent: "from-emerald-500/15 to-teal-500/5",
  },
];

const faqs = [
  {
    question: "چطور می‌توانم وضعیت سفارشم را پیگیری کنم؟",
    answer:
      "وارد حساب کاربری‌ات شو و از بخش سفارش‌های من، وضعیت سفارش و جزئیات آن را بررسی کن.",
  },
  {
    question: "اگر محصولی که دریافت کردم مشکل داشته باشد چه کنم؟",
    answer:
      "از طریق فرم تماس یا ایمیل پشتیبانی، شماره سفارش و توضیحات مشکل را برای ما بفرست تا راهنمایی‌ات کنیم.",
  },
  {
    question: "چه زمانی پاسخ پیامم را دریافت می‌کنم؟",
    answer:
      "زمان پاسخ‌گویی به ساعات کاری و نوع درخواست بستگی دارد. تلاش می‌کنیم در اولین فرصت پاسخ‌گو باشیم.",
  },
];

export default function ContactPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-primary/10 via-background to-violet-500/5" />

        <div className="absolute -left-24 -top-28 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 -z-10 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <FiMessageCircle size={16} />
              <span>ما اینجاییم تا کمکت کنیم</span>
            </div>

            <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              حرفی برای گفتن داری؟
              <span className="mt-3 block bg-gradient-to-l from-primary to-violet-500 bg-clip-text text-transparent">
                با ما در ارتباط باش
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base sm:leading-9">
              سؤال داری، به راهنمایی نیاز داری یا می‌خواهی نظرت را با ما در
              میان بگذاری؟ خوشحال می‌شویم صدایت را بشنویم.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                ارسال پیام
                <FiArrowLeft size={17} />
              </a>

              <a
                href="#contact-options"
                className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card/70 px-6 py-3.5 text-sm font-bold transition hover:border-primary/40 hover:bg-accent"
              >
                راه‌های ارتباطی
                <FiPhone size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section
        id="contact-options"
        className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-bold text-primary">
              راه‌های ارتباطی
            </p>
            <h2 className="text-2xl font-black sm:text-3xl">
              چطور می‌توانیم کمکت کنیم؟
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            روشی را انتخاب کن که برایت راحت‌تر است.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <a
                key={method.title}
                href={method.href}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-7"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-l ${method.accent}`}
                />

                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${method.accent} text-primary transition duration-300 group-hover:scale-110`}
                >
                  <Icon size={25} />
                </div>

                <h3 className="text-lg font-extrabold">{method.title}</h3>

                <p className="mt-3 min-h-14 text-sm leading-7 text-muted-foreground">
                  {method.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-5">
                  <span className="break-all text-sm font-bold">
                    {method.value}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <FiArrowLeft size={16} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Form and information */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12">
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Contact form */}
          <div
            id="contact-form"
            className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FiSend size={22} />
              </div>

              <h2 className="text-2xl font-black">پیامت را برای ما بنویس</h2>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                اطلاعات زیر را تکمیل کن تا بتوانیم بهتر راهنمایی‌ات کنیم.
              </p>
            </div>

            <form action="#" className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold"
                  >
                    نام و نام خانوادگی
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="نام شما"
                    autoComplete="name"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold"
                  >
                    ایمیل
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    autoComplete="email"
                    dir="ltr"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-left text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-bold"
                >
                  موضوع پیام
                </label>
                <select
                  id="subject"
                  name="subject"
                  defaultValue=""
                  required
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                >
                  <option value="" disabled>
                    موضوع پیام را انتخاب کن
                  </option>
                  <option value="order">پیگیری سفارش</option>
                  <option value="product">سؤال درباره محصول</option>
                  <option value="return">مرجوعی یا تعویض</option>
                  <option value="payment">مشکل پرداخت</option>
                  <option value="suggestion">پیشنهاد و انتقاد</option>
                  <option value="other">سایر موارد</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold"
                >
                  متن پیام
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="چطور می‌توانیم کمکت کنیم؟"
                  className="w-full resize-y rounded-2xl border border-border bg-background px-4 py-3.5 text-sm leading-7 outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-extrabold text-primary-foreground shadow-lg shadow-primary/15 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                ارسال پیام
                <FiArrowLeft size={17} />
              </button>

              <p className="text-center text-xs leading-6 text-muted-foreground">
                اطلاعات شما فقط برای پیگیری درخواست استفاده می‌شود.
              </p>
            </form>
          </div>

          {/* Side information */}
          <div className="space-y-5">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-violet-700 p-7 text-white sm:p-9">
              <div className="absolute -left-12 -top-12 h-44 w-44 rounded-full border border-white/10" />
              <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full border border-white/10" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                  <FiShoppingBag size={26} />
                </div>

                <h3 className="text-2xl font-black leading-relaxed">
                  تجربه خرید بهتر،
                  <br />
                  با همراهی ما
                </h3>

                <p className="mt-4 text-sm leading-8 text-white/80">
                  از انتخاب محصول تا پیگیری سفارش، تلاش می‌کنیم تجربه‌ای ساده
                  و مطمئن برایت فراهم کنیم.
                </p>

                <Link
                  href="/products"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-violet-700 transition hover:bg-white/90"
                >
                  مشاهده محصولات
                  <FiArrowLeft size={16} />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 sm:p-7">
              <h3 className="text-lg font-extrabold">اطلاعات بیشتر</h3>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FiClock size={20} />
                  </div>
                  <div>
                    <p className="font-bold">ساعات پاسخ‌گویی</p>
                    <p className="mt-1 text-sm leading-7 text-muted-foreground">
                      روزهای کاری، مطابق ساعات کاری فروشگاه
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold">آدرس فروشگاه</p>
                    <p className="mt-1 text-sm leading-7 text-muted-foreground">
                      اطلاعات آدرس فروشگاه را اینجا قرار بده.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FiShield size={20} />
                  </div>
                  <div>
                    <p className="font-bold">ارتباط امن</p>
                    <p className="mt-1 text-sm leading-7 text-muted-foreground">
                      برای پیگیری درخواستت، اطلاعات ضروری را ارسال کن.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold text-primary">
              سؤالات متداول
            </p>
            <h2 className="text-2xl font-black sm:text-3xl">
              شاید پاسخ سؤالت اینجا باشد
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              پاسخ چند سؤال رایج را برای دسترسی سریع‌تر آماده کرده‌ایم.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-border bg-card p-5 transition open:border-primary/30 sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold leading-7 marker:hidden">
                  <span className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-black text-primary">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-lg transition group-open:rotate-45 group-open:bg-primary group-open:text-primary-foreground">
                    +
                  </span>
                </summary>

                <p className="mt-4 pr-10 text-sm leading-8 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">
              هنوز سؤالت را پیدا نکردی؟
            </p>
            <a
              href="#contact-form"
              className="mt-3 inline-flex items-center gap-2 font-bold text-primary transition hover:gap-3"
            >
              برای ما پیام بفرست
              <FiArrowLeft size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}