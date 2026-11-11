import React from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Fast & Reliable Delivery",
    description:
      "We deliver your orders quickly and safely right to your doorstep, anywhere in the country.",
    image: "/image/ourproduct.webp",
    alt: "High-quality products from NOVA store",
    articleClass: "md:mx-20",
    imageClass: "lg:mx-20",
  },
  {
    id: 2,
    title: "24/7 Customer Support",
    description:
      "Our support team is always ready to assist you and answer your questions before and after your purchase.",
    image: "/image/suport.webp",
    alt: "NOVA customer support team",
    articleClass: "md:-mx-5",
    imageClass: "md:-mx-10 lg:-mx-20",
  },
  {
    id: 3,
    title: "Quality Guarantee",
    description:
      "We offer only high-quality, tested, and reliable products, with easy returns and exchanges for your peace of mind.",
    image: "/image/send.webp",
    alt: "Fast and reliable delivery across the country",
    articleClass: "md:mx-20",
    imageClass: "lg:mx-20",
  },
];

function Whattodo() {
  return (
    <section
      dir="rtl"
      aria-labelledby="whattodo-title"
      className="md:grid md:grid-cols-2 md:m-8"
    >
      {/* تیتر تبلیغاتی فروشگاه */}
      <h2
        id="whattodo-title"
        className="mt-20 mb-10 text-center text-2xl md:text-4xl font-extrabold text-muted-foreground"
      >
        Everything You Need for a Perfect Online Shopping Experience
      </h2>

      <p
        className="mt-3 text-center px-5 mb-5 text-muted-foreground text-2xl md:text-xl 
  md:mt-22 md:mx-16 md:text-center font-noto"
      >
        From high-quality products to fast delivery and 24/7 customer support,
        we are here to make your shopping experience easy and enjoyable.
      </p>
      {/* خدمات فروشگاه */}
      <div className="flex flex-col gap-y-10 mt-20 ">
        {services.map((service) => (
          <article
            key={service.id}
            className={`border hover:scale-90 duration-300 border-accent shadow-2xl h-52 flex flex-col md:gap-y-5 justify-center items-center md:w-10/12 w-auto mx-5 ${service.articleClass} md:m-0 bg-accent dark:bg-accent-foreground rounded-2xl py-5 text-center text-muted-foreground`}
          >
            <h3 className="text-2xl">{service.title}</h3>

            <p className="text-lg text-center p-5 md:p-0">
              {service.description}
            </p>
          </article>
        ))}
      </div>

      {/* تصاویر تبلیغاتی فروشگاه */}
      <div className="mt-20 flex flex-col gap-y-10">
        {services.map((service) => (
          <div
            key={service.id}
            className={`group relative w-10/12 mx-auto ${service.imageClass} overflow-hidden rounded-2xl shadow-2xl`}
          >
            <Image
              src={service.image}
              width={450}
              height={450}
              sizes="(max-width: 768px) 92vw, 45vw"
              alt={service.alt}
              className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* افکت عبور نور گرادیانت */}
            <div
              className="absolute inset-0 -translate-x-[120%] skew-x-[-25deg]
        bg-linear-to-r from-transparent via-white/50 to-transparent
        group-hover:translate-x-[120%]
        transition-transform duration-1000 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Whattodo;
