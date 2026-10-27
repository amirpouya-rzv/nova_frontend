import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section aria-label="بنر اصلی فروشگاه" className="rounded-2xl overflow-hidden w-11/12 mt-10 mx-auto">
            <Image
                src="/image/nova-banner.WebP"
                alt="NOVA؛ فروشگاه آنلاین، فراتر از یک خرید ساده"
                width={1920}
                height={1080}
                preload
                sizes="(max-width: 768px) 92vw, (max-width: 1280px) 92vw, 1760px"
                quality={80}
                className="w-full h-auto"
            />
        </section>
    );
};

export default Banner;