
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ShoppingBasket,
  ShieldCheck,
  Truck,
  Tag,
} from "lucide-react";

type CartItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
};

const initialCart: CartItem[] = [
  {
    id: 1,
    name: "کیف دستی چرمی زنانه",
    category: "اکسسوری",
    price: 1850000,
    quantity: 1,
    image: "/image/products/bag.jpg",
  },
  {
    id: 2,
    name: "ساعت کلاسیک مینیمال",
    category: "ساعت و اکسسوری",
    price: 2450000,
    quantity: 2,
    image: "/image/products/watch.jpg",
  },
  {
    id: 3,
    name: "عینک آفتابی مدل کلاسیک",
    category: "اکسسوری",
    price: 980000,
    quantity: 1,
    image: "/image/products/glasses.jpg",
  },
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fa-IR").format(price) + " تومان";

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);

  const increase = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    [cart]
  );

  const shipping = subtotal >= 3000000 || subtotal === 0 ? 0 : 85000;
  const discount = subtotal >= 5000000 ? 250000 : 0;
  const total = subtotal + shipping - discount;

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-background text-foreground px-4 py-10 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground">
              <ShoppingBag size={15} />
              SHOPPING CART
            </span>

            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              سبد خرید شما
            </h1>

            <p className="mt-3 text-sm text-muted-foreground">
              محصولات مورد علاقه‌ات منتظر نهایی شدن سفارش هستند.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShoppingBasket size={19} />
            <span>
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
              {" "}محصول در سبد خرید
            </span>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-3xl border border-border bg-card px-6 py-20 text-center shadow-sm">
            <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-secondary text-primary">
              <ShoppingBag size={36} />
            </div>

            <h2 className="text-2xl font-bold">
              سبد خرید شما خالی است!
            </h2>

            <p className="mt-3 text-sm text-muted-foreground">
              هنوز محصولی به سبد خرید اضافه نکرده‌اید.
            </p>

            <button className="mt-8 rounded-xl bg-primary px-8 py-3 font-bold text-primary-foreground transition hover:opacity-90">
              مشاهده محصولات
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

            {/* Products */}
            <section className="space-y-5 lg:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">
                  محصولات انتخاب شده
                </h2>
                <span className="text-xs text-muted-foreground">
                  {cart.length} نوع محصول
                </span>
              </div>

              {cart.map((item) => (
                <article
                  key={item.id}
                  className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-4 shadow-sm transition duration-300 hover:border-primary/40 sm:flex-row sm:items-center"
                >
                  {/* Product image */}
                  <div className="relative h-36 w-full shrink-0 overflow-hidden rounded-xl bg-muted sm:size-32">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Product information */}
                  <div className="flex flex-1 flex-col justify-between gap-4">
                    <div>
                      <span className="text-xs text-muted-foreground">
                        {item.category}
                      </span>

                      <h3 className="mt-2 text-base font-bold">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-sm font-bold text-primary">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-1">
                        <button
                          onClick={() => increase(item.id)}
                          aria-label="افزایش تعداد"
                          className="flex size-8 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground"
                        >
                          <Plus size={15} />
                        </button>

                        <span className="min-w-5 text-center text-sm font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => decrease(item.id)}
                          aria-label="کاهش تعداد"
                          className="flex size-8 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground"
                        >
                          <Minus size={15} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-2 text-xs text-muted-foreground transition hover:text-destructive"
                      >
                        <Trash2 size={16} />
                        حذف محصول
                      </button>
                    </div>
                  </div>

                  {/* Total price */}
                  <div className="hidden min-w-32 text-left sm:block">
                    <p className="text-xs text-muted-foreground">
                      قیمت کل
                    </p>
                    <p className="mt-2 font-extrabold text-foreground">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </article>
              ))}

              <div className="flex items-center justify-between rounded-2xl bg-secondary/60 p-5">
                <div className="flex items-center gap-3">
                  <Truck className="text-primary" size={22} />
                  <div>
                    <p className="text-sm font-bold">
                      ارسال رایگان
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      برای سفارش‌های بالای ۳ میلیون تومان
                    </p>
                  </div>
                </div>

                <Tag className="text-primary" size={22} />
              </div>
            </section>

            {/* Order summary */}
            <aside className="sticky top-6 rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-black">
                خلاصه سفارش
              </h2>

              <div className="my-6 h-px bg-border" />

              <div className="space-y-5 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    قیمت محصولات
                  </span>
                  <span className="font-semibold">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    هزینه ارسال
                  </span>
                  <span className={shipping === 0 ? "font-bold text-success" : "font-semibold"}>
                    {shipping === 0 ? "رایگان" : formatPrice(shipping)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    تخفیف
                  </span>
                  <span className="font-bold text-success">
                    {discount > 0 ? `-${formatPrice(discount)}` : "۰ تومان"}
                  </span>
                </div>
              </div>

              <div className="my-6 h-px bg-border" />

              <div className="flex items-center justify-between">
                <span className="font-bold">
                  مبلغ قابل پرداخت
                </span>
                <span className="text-xl font-black text-primary">
                  {formatPrice(total)}
                </span>
              </div>

              <button
                disabled={cart.length === 0}
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-4 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25 disabled:opacity-50"
              >
                تکمیل فرآیند خرید
                <ArrowLeft size={18} />
              </button>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck size={17} className="text-success" />
                پرداخت امن و مطمئن
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
