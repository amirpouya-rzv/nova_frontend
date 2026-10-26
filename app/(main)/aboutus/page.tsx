import Link from "next/link";
import {
  FiArrowLeft,
  FiAward,
  FiHeart,
  FiShield,
  FiTruck,
  FiUsers,
  FiTarget,
  FiShoppingBag,
  FiHeadphones,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiShield,
    title: "خرید امن و مطمئن",
    description:
      "تجربه خریدی راحت با توجه به امنیت اطلاعات و اطمینان از سفارش.",
  },
  {
    icon: FiTruck,
    title: "ارسال سریع",
    description:
      "سفارش‌های شما با دقت آماده می‌شوند تا در کوتاه‌ترین زمان به دستتان برسند.",
  },
  {
    icon: FiAward,
    title: "تضمین کیفیت",
    description:
      "تلاش می‌کنیم محصولاتی باکیفیت و متناسب با نیاز شما ارائه دهیم.",
  },
  {
    icon: FiHeadphones,
    title: "پشتیبانی همراه شما",
    description:
      "از انتخاب محصول تا پیگیری سفارش، در کنار شما هستیم.",
  },
];

const values = [
  {
    icon: FiHeart,
    title: "مشتری‌مداری",
    description:
      "رضایت شما برای ما فقط یک شعار نیست؛ اساس تصمیم‌های ماست.",
  },
  {
    icon: FiTarget,
    title: "کیفیت و شفافیت",
    description:
      "اطلاعات روشن و تجربه خرید قابل اعتماد، اولویت ماست.",
  },
  {
    icon: FiUsers,
    title: "رشد در کنار شما",
    description:
      "با شنیدن نظرات شما، هر روز برای بهتر شدن تلاش می‌کنیم.",
  },
];

export default function AboutPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-background text-foreground"
    >
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 size-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <FiShoppingBag size={16} />
              داستان فروشگاه ما
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              خرید بهتر،
              <span className="block text-primary">
                تجربه‌ای متفاوت.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              ما این فروشگاه را با یک هدف ساخته‌ایم:
              ساده‌تر کردن خرید آنلاین و فراهم کردن تجربه‌ای
              مطمئن، لذت‌بخش و متناسب با نیازهای شما.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                مشاهده محصولات
                <FiArrowLeft size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-card px-6 font-semibold transition hover:border-primary/40 hover:bg-accent"
              >
                ارتباط با ما
              </Link>
            </div>
          </div>

          {/* Visual composition */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-5 shadow-2xl sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    هدف ما
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold">
                    بیشتر از یک خرید
                  </h2>
                </div>

                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <FiHeart size={28} />
                </div>
              </div>

              <div className="my-7 rounded-2xl bg-muted/60 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <FiShoppingBag size={23} />
                  </div>

                  <div>
                    <p className="font-bold">انتخاب آسان‌تر</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      محصولات متناسب با نیاز شما
                    </p>
                  </div>
                </div>

                <div className="my-5 h-px bg-border" />

                <div className="flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FiShield size={23} />
                  </div>

                  <div>
                    <p className="font-bold">اعتماد بیشتر</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      تجربه خریدی شفاف و مطمئن
                    </p>
                  </div>
                </div>

                <div className="my-5 h-px bg-border" />

                <div className="flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FiUsers size={23} />
                  </div>

                  <div>
                    <p className="font-bold">همراهی همیشگی</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      پشتیبانی و توجه به مشتریان
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-center text-sm leading-7 text-muted-foreground">
                انتخاب شما، انگیزه ما برای بهتر شدن است.
              </p>
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-border bg-background p-4 shadow-xl sm:-left-6">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FiHeart size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold">با عشق برای شما</p>
                  <p className="text-xs text-muted-foreground">
                    کیفیت در هر انتخاب
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold text-primary">
            چرا ما؟
          </span>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            تجربه خریدی که اهمیت دارد
          </h2>

          <p className="mt-4 leading-8 text-muted-foreground">
            از لحظه انتخاب محصول تا تحویل سفارش، تلاش می‌کنیم
            تمام مراحل خرید برای شما ساده و قابل اعتماد باشد.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon size={23} />
              </div>

              <h3 className="mt-5 text-lg font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold text-primary">
              داستان ما
            </span>

            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              ما برای ساختن تجربه‌ای بهتر اینجاییم.
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              باور داریم خرید آنلاین باید فراتر از انتخاب یک
              محصول و پرداخت هزینه باشد. یک فروشگاه خوب باید
              انتخاب را آسان کند، اطلاعات مفید ارائه دهد و
              احساس اطمینان را در تمام مراحل خرید حفظ کند.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              به همین دلیل تلاش می‌کنیم با توجه به نیاز مشتریان،
              بهبود خدمات و ارائه تجربه‌ای ساده و کاربردی،
              هر روز قدمی به سمت فروشگاهی بهتر برداریم.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-7">
              <FiHeart className="text-primary" size={27} />
              <h3 className="mt-5 text-lg font-bold">
                توجه به مشتری
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                نیازها و تجربه شما برای ما اهمیت دارد.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-7">
              <FiShield className="text-primary" size={27} />
              <h3 className="mt-5 text-lg font-bold">
                اعتماد و شفافیت
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                ارتباط روشن و تجربه خرید مطمئن.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 sm:p-7">
              <FiTarget className="text-primary" size={27} />
              <h3 className="mt-5 text-lg font-bold">
                بهبود مستمر
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                همیشه به دنبال راه‌های بهتر هستیم.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-7">
              <FiUsers className="text-primary" size={27} />
              <h3 className="mt-5 text-lg font-bold">
                همراهی شما
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                نظرات شما به رشد فروشگاه کمک می‌کند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <span className="text-sm font-bold text-primary">
            ارزش‌های ما
          </span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            اصولی که به آن‌ها پایبندیم
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <article
              key={value.title}
              className="rounded-2xl border border-border p-6 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon size={24} />
                </div>

                <span className="text-3xl font-black text-muted-foreground/30">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {value.title}
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full border border-primary-foreground/10" />
          <div className="pointer-events-none absolute -bottom-32 -left-12 size-80 rounded-full border border-primary-foreground/10" />

          <div className="relative">
            <h2 className="text-3xl font-black sm:text-4xl">
              خوشحال می‌شویم همراه ما باشید.
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-8 text-primary-foreground/80">
              سؤالی دارید یا به راهنمایی بیشتری نیاز دارید؟
              برای ارتباط با ما، از صفحه تماس استفاده کنید.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-background px-6 font-bold text-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              تماس با ما
              <FiArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
