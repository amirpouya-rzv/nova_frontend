import React from "react";
import Image from "next/image";

function Whattodo() {
  return (
    <section
      aria-labelledby="whattodo-title"
      className="md:grid md:grid-cols-2 md:m-8"
    >
      {/* تیتر تبلیغاتی فروشگاه */}
      <h2
        id="whattodo-title"
        className="mt-20 mb-10 text-center text-2xl md:text-4xl font-extrabold text-muted-foreground"
      >
        هر آنچه برای یک تجربه خرید آنلاین بی‌نقص نیاز دارید
      </h2>

      <p
        className="mt-3 text-center px-5 mb-5 text-muted-foreground  text-2xl md:text-xl 
            md:mt-22 md:mx-16 md:text-center font-noto "
      >
        از محصولات باکیفیت گرفته تا ارسال سریع و پشتیبانی شبانه‌روزی؛ اینجا
        هستیم تا خرید را برای شما آسان و لذت‌بخش کنیم.
      </p>

      {/* خدمات فروشگاه */}
      <div className="flex flex-col gap-y-10 mt-20 ">
        {/* ارسال سریع */}
        <article className="border border-accent shadow-2xl h-52 flex flex-col md:gap-y-5 justify-center items-center md:w-10/12 w-auto mx-5 md:mx-20 md:m-0 bg-accent dark:bg-accent-foreground rounded-2xl py-5 text-center text-muted-foreground ">
          <h3 className="text-2xl">ارسال سریع و مطمئن</h3>
          <p className="text-lg text-center p-5 md:p-0">
            سفارش‌های شما را در سریع‌ترین زمان و با اطمینان تا درب منزل، در هر
            نقطه از کشور، تحویل می‌دهیم.
          </p>
        </article>

        {/* پشتیبانی شبانه‌روزی */}
        <article className="border border-accent shadow-2xl  h-52 flex flex-col md:gap-y-5 justify-center items-center md:w-10/12 w-auto mx-5 md:-mx-5 md:m-0 bg-accent dark:bg-accent-foreground rounded-2xl py-5 text-center text-muted-foreground ">
          <h3 className="text-2xl">پشتیبانی شبانه‌روزی</h3>
          <p className="text-md text-center text-lg p-5 md:p-0">
            تیم پشتیبانی ما پیش و پس از خرید، همواره آماده پاسخ‌گویی و کمک به
            شماست.
          </p>
        </article>

        {/* تضمین کیفیت */}
        <article className="border border-accent shadow-2xl h-52 flex flex-col md:gap-y-5 justify-center items-center md:w-10/12 w-auto mx-5 md:mx-20 md:m-0 bg-accent dark:bg-accent-foreground rounded-2xl py-5 text-center text-muted-foreground ">
          <h3 className="text-2xl">تضمین کیفیت</h3>
          <p className="text-md text-center px-5 text-lg p-5 md:p-0">
            ما فقط محصولات باکیفیت، آزمایش‌شده و قابل‌اعتماد عرضه می‌کنیم و
            امکان بازگشت و تعویض کالا را نیز فراهم کرده‌ایم.
          </p>
        </article>
      </div>

      {/* تصاویر تبلیغاتی فروشگاه */}
      <div className="mt-20">
        <Image
          src="/image/product.webp"
          width={200}
          height={230}
          sizes="(max-width: 768px) 92vw, 45vw"
          alt="انواع محصولات باکیفیت فروشگاه NOVA"
          className="h-52 w-10/12 rounded-2xl mx-auto lg:mx-20 shadow-2xl"
        />
        <div className="flex flex-col mt-10 gap-y-10">
          <Image
            src="/image/suport.webp"
            width={450}
            height={450}
            sizes="(max-width: 768px) 92vw, 45vw"
            alt="تیم پشتیبانی مشتریان فروشگاه NOVA"
            className="h-52 w-10/12 rounded-2xl mx-auto md:-mx-10 lg:-mx-20 shadow-2xl"
          />
          <Image
            src="/image/send.webp"
            width={450}
            height={450}
            sizes="(max-width: 768px) 92vw, 45vw"
            alt="ارسال سریع سفارش‌ها به سراسر کشور"
            className="h-52 w-10/12 rounded-2xl mx-auto lg:mx-20 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Whattodo;